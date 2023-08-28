import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App'
import './css/index.css'
import './css/shared/icon.css'
import './css/shared/nav-bar.css'
import { CharacterProvider } from './context/CharacterContext';
import { AbilityProvider } from './context/AbilityContext';

const cors = require('cors');

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <CharacterProvider>
            <AbilityProvider>
                <App />
            </AbilityProvider>
        </CharacterProvider>
    </React.StrictMode>
)
