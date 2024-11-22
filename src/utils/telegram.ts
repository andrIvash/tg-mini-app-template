export const initTelegram = () => {
    if (process.env.MOCK === 'true') {
        console.warn('Using mocked Telegram Web App API in development mode.');

        // Mock implementation
        return {
            ready: () => console.log('Mocked Telegram API: ready() called'),
            initDataUnsafe: {
                user: {
                    first_name: 'Mocked User',
                    last_name: 'Developer',
                    username: 'mocked_user',
                },
            },
        };
    }

    if (!window.Telegram) {
        console.error('Telegram Web App SDK not found');
        return null;
    }

    return window.Telegram.WebApp;
};
