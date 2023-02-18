import { createContext, useState } from "react"
import CharacterData from "../data/CharacterData"

const TavernContext = createContext()

export const TavernProvider = ({children}) => {

    const [characters, setCharacters] = useState(CharacterData)
    const [activeCharacter, setActiveCharacter] = useState({})

    return <TavernContext.Provider value = {{
            characters,
            activeCharacter,
            setActiveCharacter,
        }}
        >
            {children}
        </TavernContext.Provider>
}

export default TavernContext
