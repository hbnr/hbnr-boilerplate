import {ForbiddenException, Injectable} from '@nestjs/common';
import {PrismaService} from 'src/prisma/prisma.service';
import {AuthDto} from './dto';
import * as argon from 'argon2';
import {PrismaClientKnownRequestError} from '@prisma/client/runtime';
import {ConfigService} from '@nestjs/config';
import {JwtService} from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private config: ConfigService,
        private prisma: PrismaService,
        private jwt: JwtService
    ) {
    }

    async signup(dto: AuthDto) {
        // generate the password hash
        const salt = await argon.hash(new Date().toISOString());
        const hash = await argon.hash(this.saltAndPepper(salt, dto.password));

        try {
            // save the new user in the db
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    salt,
                    hash,
                },
            });
            delete user.hash;
            delete user.salt;

            return user;
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ForbiddenException('Email is already been used.');
                }
            }
            throw error;
        }
    }

    async signin(dto: AuthDto) {
        // find user by email
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email,
            },
        });

        // if user does not exist throw exception
        if (!user) throw new ForbiddenException('Credentials incorrect');

        // compare password
        const pwMatches = await argon.verify(user.hash, this.saltAndPepper(user.salt, dto.password));

        // if password incorrect throw exception
        if (!pwMatches) throw new ForbiddenException('Credentials incorrect');

        // return jwt-token
        return this.signToken(user.id, user.email);
    }

    async signToken(userId: number, email: string): Promise<{ access_token: string }> {
        const payload = {sub: userId, email};
        const secret = this.config.get('JWT_SECRET');
        return {
            access_token: await this.jwt.signAsync(
                payload,
                {
                    expiresIn: '15m',
                    secret
                }
            )
        };
    }

    private saltAndPepper(salt: string, secret: string) {
        return salt + secret + this.config.get('PEPPER');
    }
}
