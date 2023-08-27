import { createContext, useState } from "react"
import CharacterData from "../data/CharacterData"
import { NewCharacter } from "../utils/NewCharacter";

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
    const [characters, setCharacters] = useState(CharacterData);
    const [editingCharacter, setEditingCharacter] = useState(null);

    const addCharacter = () => {
        setCharacters([NewCharacter(), ...characters]);
    }

    const updateCharacter = (updatedCharacter) => {
        setCharacters(characters.map((c) => c.id === updatedCharacter.id ? updatedCharacter : c));
    }

    const deleteCharacter = (id) => {
        setCharacters(characters.filter((c) => c.id !== id));
    }

    return <CharacterContext.Provider value ={{
        characters,
        editingCharacter,
        setEditingCharacter,
        setCharacters,
        addCharacter,
        updateCharacter,
        deleteCharacter
    }}>
        {children}
    </CharacterContext.Provider>
}

export default CharacterContext;
