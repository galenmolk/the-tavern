import CharacterList from './components/CharacterList'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CharacterEditor from './pages/CharacterEditor'
import { useContext } from 'react'
import AbilitySelector from './pages/AbilitySelector'
import CharacterContext from './context/CharacterContext'

function App() {
    const { editingCharacter } = useContext(CharacterContext)

    return (
            <Router>
                <Routes>
                    <Route path='/the-tavern' element={
                        editingCharacter ? <CharacterEditor/> : <CharacterList />
                    } />

                    <Route path='/the-tavern/abilities' element={
                        <AbilitySelector />
                    }
                    />
                    
                </Routes>
            </Router>
    )
}

export default App
