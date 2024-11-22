# Telegram Mini App Template

## Description

A template for developing a single-page application for Telegram using React, TypeScript, and Webpack. This project includes ESLint, Prettier configuration, CSS Modules support, and HMR.

---

## Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd tg-miniapp-template
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

---

## Commands

-   Launches the application in development mode with HMR enabled. (Mocked API) see [Environment Variables](#environment-variables)

```bash
    npm start
```

-   Creates an optimized production build in the dist folder. (Real API)

```bash
    npm run build
```

-   Deletes the dist folder.

```bash
    npm run clean
```

-   Starts a local server to test the production build in the dist folder.

```bash
    npm run serve:prod
```

---

## Technologies and Packages

-   **React**: Library for building user interfaces.
-   **TypeScript**: Static typing to improve code quality.
-   **Webpack**: Module bundler for creating optimized bundles.
-   **ESLint**: Linter for maintaining code quality.
-   **Prettier**: Code formatting tool.
-   **CSS Modules**: Support for modular CSS.

---

## Project Structure

```text
├── public/                  # Static files (index.html)
├── src/                     # Source code
│   ├── components/          # React components
│   ├── assets/              # Images, and fonts
│   ├── styles/              # Styles
│   ├── types/               # Types d.ts
│   ├── utils/               # Utils
│   ├── App.tsx              # Main Component
│   └── index.tsx            # Entry point
├── dist/                    # Build output
├── .eslintrc.json           # ESLint configuration
├── .prettierrc              # Prettier configuration
├── .babelrc                 # Babel configuration
├── .tsconfig.json           # TypeScript configuration
├── .jest.config.ts          # Jest configuration
├── webpack/                 # Webpack configuration
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
```

---

## Tips

-   Before running `npm run build`, ensure the `dist` folder is clean:

```bash
npm run clean && npm run build
```

-   Test the production build locally with:

```bash
npm run serve:prod
```

---

## Additional Notes

-   Make sure the project is using local configurations for ESLint and Prettier.
-   Set up a `.env` file for environment variables.

---

## Environment Variables

-   **`REACT_APP_API_URL`**: API link
-   **`REACT_APP_BOT_TOKEN`**: Bot token
-   **`MOCK`**: Determines whether to use mocked Telegram API or real API.
    -   `true`: Use mock data (default for development).
    -   `false`: Use real Telegram API (default for production).
