import CharacterList from './components/CharacterList'
import { useState } from 'react'
import CharacterData from './data/CharacterData'

function App() {

    const [characters, setCharacters] = useState(CharacterData)

    return (
        <>
            <CharacterList characters={characters} />
        </>
    )
}

export default App
