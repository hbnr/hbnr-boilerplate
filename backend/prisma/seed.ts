// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
    // create user
    const user1 = await prisma.user.upsert({
        where: { email: 'studio@hbnr.nl' },
        update: {},
        create: {
            createdAt: new Date('2023-07-03 00:25:56.788'),
            updatedAt: new Date('2023-07-03 00:25:56.788'),
            email: 'studio@hbnr.nl',
            hash: '$argon2id$v=19$m=65536,t=3,p=4$oQLTgj/whrUbTp08DswrxQ$V19Z8BTYWJU66Xj8cHf8oPycQ1yon26w4T3nULmga/Y',
            salt: '$argon2id$v=19$m=65536,t=3,p=4$OLcwBnlJxgGAm+tfruQXIg$IpWGkeOoCD1pOqLI5Fz+u1LDTLKuaWJ6WE5gEFifTDQ'
        },
    });

    console.log({ user1 });
}

// execute the main function
main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        // close Prisma Client at the end
        await prisma.$disconnect();
    });
