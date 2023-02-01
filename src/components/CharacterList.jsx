import CharacterItem from './CharacterItem'

function CharacterList({characters}) {
   
    if (!characters || characters.length === 0) {
        return <p>No Characters</p>
    }

    return (
        <div>
            {characters.map(
                (character) => (
                    <CharacterItem key={characters.indexOf(character)} character={character}/>
                )
            )}
        </div>
    )
}

export default CharacterList
