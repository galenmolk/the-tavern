import CharacterItem from './CharacterItem'
import { useContext } from 'react'
import CharacterContext from '../context/CharacterContext'

function CharacterList() {
    const { characters, addCharacter } = useContext(CharacterContext)

    const displayCharacters = () => {
        return characters.map(
            (character) => (
                <CharacterItem 
                    key={characters.indexOf(character)} 
                    character={character}
                />
            )
        );
    }

    return (
        <div>
            <button onClick={addCharacter}><b>NEW CHARACTER</b></button>
            {characters === null ? <p>Loading characters...</p> : displayCharacters()}
        </div>
    )
}

export default CharacterList
