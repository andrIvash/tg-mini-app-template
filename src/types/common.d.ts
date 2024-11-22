import { TelegramWebApp } from './telegram';

declare global {
    interface Window {
        Telegram: {
            WebApp: TelegramWebApp;
        };
    }
}
export {};
