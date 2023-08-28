import CharacterItem from './CharacterItem'
import { useContext } from 'react'
import CharacterContext from '../../context/CharacterContext'
import SaveJsonButton from '../shared/SaveJsonButton'
import NavBar from '../shared/NavBar'

export default function CharacterList() {
    const { characters, addCharacter } = useContext(CharacterContext)

    const displayCharacters = () => {
        return characters.map(
            (character, index) => (
                <CharacterItem 
                    key={index} 
                    character={character}
                />
            )
        );
    }

    return (
        <>
            <NavBar/>
            <div>
                <SaveJsonButton name='characters' data={characters}/>
                <button onClick={addCharacter}><b>NEW CHARACTER</b></button>
                {characters === null ? <p>Loading characters...</p> : displayCharacters()}
            </div>
        </>
    )
}
