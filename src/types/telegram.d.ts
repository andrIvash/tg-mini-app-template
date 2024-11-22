export interface TelegramWebApp {
    close: () => void;
    ready: () => void;
    initDataUnsafe?: {
        user?: {
            first_name: string;
            last_name?: string;
            username?: string;
        };
    };
}
