import { createContext, useState } from "react"
import CharacterData from "../data/CharacterData"
import { NewCharacter } from "../utils";

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
    const [characters, setCharacters] = useState(CharacterData);
    const [editingCharacter, setEditingCharacter] = useState(null);

    const addCharacter = () => {
        setCharacters([NewCharacter(), ...characters]);
    }

    const updateCharacter = (id, updatedCharacter) => {
        setCharacters(characters.map((c) => c.id === id ? updatedCharacter : c));
    }

    return <CharacterContext.Provider value ={{
        characters,
        editingCharacter,
        setEditingCharacter,
        setCharacters,
        addCharacter,
        updateCharacter
    }}>
        {children}
    </CharacterContext.Provider>
}

export default CharacterContext;
