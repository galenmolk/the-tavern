import CharacterItem from './CharacterItem'
import { useContext } from 'react'
import CharacterContext from '../context/CharacterContext'

function CharacterList() {
   
    const { characters, addCharacter } = useContext(CharacterContext)

    return (
        <div>
            <button onClick={addCharacter}><b>NEW CHARACTER</b></button>
            {characters.map(
                (character) => (
                    <CharacterItem 
                        key={characters.indexOf(character)} 
                        character={character}
                    />
                )
            )}
        </div>
    )
}

export default CharacterList
