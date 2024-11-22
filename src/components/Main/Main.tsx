import React from 'react';

export const Main: React.FC = () => {
    const handleClose = () => {
        // const tg = window.Telegram.WebApp;
        // tg?.close();
        //console.log(tg.initData);
    };

    return (
        <main className="Main">
            <p>This is the main content of the app.</p>
            <button onClick={handleClose}>Close App</button>
        </main>
    );
};

