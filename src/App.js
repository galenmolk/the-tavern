import CharacterList from './components/CharacterList'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { TavernProvider } from './context/TavernContext'
import CharacterCreatorPage from './pages/CharacterCreatorPage'

function App() {

    const handleSelect = (character) => {

    }

    return (
        <TavernProvider>
            <Router>
                <Routes>
                    <Route path='/' element={
                        <>
                            <CharacterList selectCharacter={handleSelect}/>
                        </>
                    } />

                    <Route path='/character' element={
                        <CharacterCreatorPage></CharacterCreatorPage>
                    }/>
                    
                </Routes>
            </Router>
        </TavernProvider>
    )
}

export default App
