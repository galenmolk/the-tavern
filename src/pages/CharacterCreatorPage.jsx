import { useContext } from 'react'
import TavernContext from '../context/TavernContext'
import InputField from '../components/shared/InputField'

function CharacterCreatorPage() {

    const { activeCharacter } = useContext(TavernContext)

    return (
        <>
            <InputField label='Character Name:' value={activeCharacter.name}/>
            <InputField label='Health:' value={activeCharacter.health}/>
            <InputField label='Defense:' value={activeCharacter.defense}/>
            <InputField label='Speed:' value={activeCharacter.speed}/>
        </>
        
    )
}

export default CharacterCreatorPage
