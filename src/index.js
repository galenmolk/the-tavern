import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App'
import './index.css'
import { TavernProvider } from './context/TavernContext';

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <TavernProvider>
            <App />
        </TavernProvider>
    </React.StrictMode>
)
