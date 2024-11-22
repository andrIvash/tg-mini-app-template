import React from 'react';
import sampleImage from '../../assets/images/sample.png';
import * as styles from './Header.module.css';

interface HeaderProps {
    user: { first_name: string } | null;
}

export const Header: React.FC<HeaderProps> = ({ user }) => {
    return (
        <header className="Header">
            <h1 className={styles.title}>Telegram Mini App</h1>
            {user ? <p>Welcome, {user.first_name}!</p> : <p>Loading user information...</p>}
            <img src={sampleImage} alt="Sample" className={styles.image} />
        </header>
    );
};
