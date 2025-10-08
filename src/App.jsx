import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Characters from './pages/Characters'
import Abilities from './pages/Abilities'

function App() {

    return (
            <Router basename="/the-tavern">
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/characters' element={<Characters />} />
                    <Route path='/abilities' element={<Abilities/>} />
                </Routes>
            </Router>
    )
}

export default App
