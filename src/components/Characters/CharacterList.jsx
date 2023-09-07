import CharacterItem from './CharacterItem'
import { useContext, useState } from 'react'
import CharacterContext from '../../context/CharacterContext'
import SaveJsonButton from '../shared/SaveJsonButton'
import NavBar from '../shared/NavBar'
import ConfirmationModal from '../shared/ConfirmationModal'

export default function CharacterList() {
    const { characters, addCharacter, deleteCharacter } = useContext(CharacterContext);
    const [ deletingCharacter, setDeletingCharacter ] = useState(null);

    const handleTryDelete = (character) => {
        setDeletingCharacter(character);
    };

    const getDeletePrompt = () => {
        return `Delete character "${deletingCharacter.name}"? This cannot be undone.`;
    }

    const handleConfirmDelete = () => {
        deleteCharacter(deletingCharacter);
        setDeletingCharacter(null);
    }

    const handleCancelDelete = () => {
        setDeletingCharacter(null);
    }

    const displayCharacters = () => {
        return characters.map(
            (character) => (
                <CharacterItem 
                    key={character.id} 
                    character={character}
                    tryDelete={handleTryDelete}
                />
            )
        );
    };

    return (
        <>
            <NavBar/>
            <div>
                <button onClick={addCharacter}><b>NEW CHARACTER</b></button>
                {characters === null ? <p>Loading characters...</p> : displayCharacters()}
                <SaveJsonButton name='characters' data={characters}/>
            </div>
            { deletingCharacter !== null ? <ConfirmationModal 
                prompt={getDeletePrompt()}
                onYes={handleConfirmDelete}
                onNo={handleCancelDelete}/> : null}
        </>
    )
}
