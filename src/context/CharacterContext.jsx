import { createContext, useState, useEffect } from "react"
import { NewCharacter } from "../utils/NewCharacter";
import { fetchCharacters, updateCharacters } from "../utils/Api";

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
    const [characters, setCharacters] = useState(null);
    const [editingCharacter, setEditingCharacter] = useState(null);

    useEffect(() => {
        const refresh = async () => {
            const freshCharacters = await fetchCharacters();
            setCharacters(freshCharacters);
        }

        refresh();
    }, []);

    const updateAndPost = async (chars) => {
        await updateCharacters(chars);
        setCharacters(chars);
    }

    const addCharacter = () => {
        const newChars = [NewCharacter(), ...characters];
        updateAndPost(newChars);
    }

    const updateCharacter = (updatedCharacter) => {
        const newChars = characters.map(c => c.id === updatedCharacter.id ? updatedCharacter : c);
        updateAndPost(newChars);
    }

    const deleteCharacter = (character) => {
        const newChars = characters.filter(c => c.id !== character.id);
        updateAndPost(newChars);
    }

    return <CharacterContext.Provider value ={{
        characters,
        editingCharacter,
        setEditingCharacter,
        addCharacter,
        updateCharacter,
        deleteCharacter
    }}>
        {children}
    </CharacterContext.Provider>
}

export default CharacterContext;
