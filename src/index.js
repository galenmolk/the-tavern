import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App'
import './index.css'
import { CharacterProvider } from './context/CharacterContext';
import { AbilityProvider } from './context/AbilityContext';

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
