import CharacterList from './components/CharacterList'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TavernContext from './context/TavernContext'
import CharacterEditor from './pages/CharacterEditor'
import { useContext } from 'react'
import StatLabel from './components/shared/StatLabel'
import AbilitySelector from './pages/AbilitySelector'

function App() {

    const handleSelect = (character) => {

    }

    const { editingCharacter } = useContext(TavernContext)

    const characterList = () => {
        return <CharacterList selectCharacter={handleSelect}/>
    }

    const characterEditor = () => {
        return <CharacterEditor/>
    }

    return (
            <Router>
                <Routes>
                    <Route path='/' element={
                        editingCharacter ? characterEditor() : characterList()
                    } />

                    <Route path='/abilities' element={
                        <AbilitySelector />
                    }
                    />
                    
                </Routes>
            </Router>
    )
}

export default App
