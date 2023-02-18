import CharacterItem from './CharacterItem'
import { useContext } from 'react'
import TavernContext from '../context/TavernContext'

function CharacterList({selectCharacter}) {
   
    const { characters } = useContext(TavernContext)

    if (!characters || characters.length === 0) {
        return <p>No Characters</p>
    }

    const handleSelect = (character) =>
    {
        selectCharacter(character)
    }

    return (
        <div>
            {characters.map(
                (character) => (
                    <CharacterItem 
                        key={characters.indexOf(character)} 
                        character={character}
                        handleSelect={handleSelect}
                    />
                )
            )}
        </div>
    )
}

export default CharacterList
