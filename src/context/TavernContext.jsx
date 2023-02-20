import { createContext, useState } from "react"
import CharacterData from "../data/CharacterData"
import { v4 as uuidv4 } from 'uuid'

const TavernContext = createContext()

const DEFAULT_NAME = 'New Character'
const DEFAULT_HEALTH = 0
const DEFAULT_DEFENSE = 0
const DEFAULT_SPEED = 6

export const TavernProvider = ({children}) => {

    const [characters, setCharacters] = useState(CharacterData)
    const [editingCharacter, setEditingCharacter] = useState({})
    const [isEditing, setIsEditing] = useState(false)

    const addCharacter = () => {

        const newCharacter = {
            id: uuidv4(),
            name: DEFAULT_NAME,
            health: DEFAULT_HEALTH,
            defense: DEFAULT_DEFENSE,
            speed: DEFAULT_SPEED
        }

        setCharacters([newCharacter, ...characters])
    }

    const startEditing = (character) => {
        setEditingCharacter(character)
        setIsEditing(true)
    }

    const stopEditing = () => {
        setEditingCharacter(null)
        setIsEditing(false)
    }

    const updateCharacter = (id, updatedCharacter) => {
        setCharacters(characters.map((c) => c.id === id ? updatedCharacter : c))
    }

    return <TavernContext.Provider value = {{
            characters,
            editingCharacter,
            isEditing,
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
