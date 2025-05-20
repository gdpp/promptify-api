import { PrismaClient } from '../../generated/prisma';

let db: PrismaClient;

declare global {
    var __db: PrismaClient | undefined;
}

if (!global.__db) {
    global.__db = new PrismaClient({
        log: ['query']
    });
}

db = global.__db;

export {db}