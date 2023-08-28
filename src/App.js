import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Characters from './pages/Characters'
import Abilities from './pages/Abilities'

function App() {
    return (
            <Router>
                <Routes>
                    <Route path='/the-tavern' element={<Home/>}/>
                    <Route path='/the-tavern/characters' element={<Characters />} />
                    <Route path='/the-tavern/abilities' element={<Abilities/>} />
                </Routes>
            </Router>
    )
}

export default App
