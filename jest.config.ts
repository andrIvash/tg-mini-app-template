export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    moduleNameMapper: {
        '\\.(css|scss|sass|less)$': 'identity-obj-proxy', // mock styles
        '\\.(png|jpg|jpeg|gif|svg|webp|ico)$':
            '<rootDir>/__test__/__mocks__/fileMock.js', // mock images
        '\\.html$': '<rootDir>/test/__mocks__/fileMock.js', // mock html
    },
    setupFilesAfterEnv: ['<rootDir>/__test__/setupTests.ts'],
    transform: {
        '\\.[jt]sx?$': 'ts-jest',
        '\\.css$': 'jest-transform-stub',
    },
};
