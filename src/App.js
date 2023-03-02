import CharacterList from './components/CharacterList'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CharacterEditor from './pages/CharacterEditor'
import { useContext } from 'react'
import StatLabel from './components/shared/StatLabel'
import AbilitySelector from './pages/AbilitySelector'
import CharacterContext from './context/CharacterContext'

function App() {
    const { editingCharacter } = useContext(CharacterContext)

    const characterList = () => {
        return <CharacterList />
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
