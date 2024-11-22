import React, { useEffect, useState } from 'react';
import { initTelegram } from './utils/telegram';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

if (process.env.NODE_ENV === 'development') {
    // React Fast Refresh
    const { hot } = module;
    if (hot) hot.accept();
}

export const App: React.FC = () => {
    const [user, setUser] = useState<{ first_name: string } | null>(null);

    useEffect(() => {
        const tg = initTelegram();
        tg?.ready();
        setUser(tg?.initDataUnsafe?.user || null);
    }, []);

    return (
        <div className="App">
            <Header user={user} />
            <Main />
        </div>
    );
};