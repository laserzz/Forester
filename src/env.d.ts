declare global {
    namespace NodeJS {
        interface ProcessEnv {
            TOKEN: string;
            DB_URL: string;
            OWNERS: string;
            INVITE: string;
        }
    }
}

export {};