import 'dotenv/config';

export const env = {
    port: Number(process.env.PORT ?? 3001),
    databaseUrl: process.env.DATABASE_URL ?? '',
    jwtSecret: process.env.JWT_SECRET ?? '',
    frontendUrl: process.env.FRONTEND_URL ?? 'http://localhost:5173',
};
