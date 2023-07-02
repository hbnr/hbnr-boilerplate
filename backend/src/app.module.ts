import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {AuthModule} from 'src/auth/auth.module';
import {UserModule} from 'src/user/user.module';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {PrismaModule} from './prisma/prisma.module';

@Module({
    imports: [
        AuthModule,
        ConfigModule.forRoot({isGlobal: true}),
        PrismaModule,
        UserModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
