import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styles/global.css'; // global styles

const domNode = document.getElementById('root');
if (domNode) {
    const root = createRoot(domNode);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    );
} else {
    console.error('Root element not found.');
}