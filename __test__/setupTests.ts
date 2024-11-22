import '@testing-library/jest-dom';

Object.defineProperty(window, 'Telegram', {
    value: {
        WebApp: {
            initData: 'mocked-data',
            ready: jest.fn(),
            initDataUnsafe: {
                user: { first_name: 'Mocked User' },
            },
        },
    },
    writable: true,
});
