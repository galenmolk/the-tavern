import { createContext, useState } from "react"
import AbilityData from "../data/AbilityData"
import CharacterData from "../data/CharacterData"
import { NewCharacter } from "../utils"

const TavernContext = createContext()

export const TavernProvider = ({children}) => {
    const [characters, setCharacters] = useState(CharacterData)
    const [editingCharacter, setEditingCharacter] = useState(null)
    const [abilities, setAbilities] = useState(AbilityData)

    const addCharacter = () => {
        setCharacters([NewCharacter(), ...characters])
    }

    const startEditing = (character) => {
        setEditingCharacter(character)
    }

    const stopEditing = () => {
        setEditingCharacter(null)
    }

    const updateCharacter = (id, updatedCharacter) => {
        setCharacters(characters.map((c) => c.id === id ? updatedCharacter : c))
    }

    const getAbilities = (abilityIds) => {
        return abilities.filter((a) => abilityIds.includes(a.id));
    }

    return <TavernContext.Provider value = {{
            characters,
            editingCharacter,
            abilities,
            getAbilities,
            startEditing,
            stopEditing,
            addCharacter,
            updateCharacter
        }}
        >
            {children}
        </TavernContext.Provider>
}

export default TavernContext
