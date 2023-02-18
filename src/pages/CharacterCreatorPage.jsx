import { useContext, useState, useEffect } from 'react'
import TavernContext from '../context/TavernContext'
import InputField from '../components/shared/InputField'

function CharacterCreatorPage() {

    window.onbeforeunload = function (event) {
        event = event || window.event

        const contextName = (name === '' ? 'This character ' : name)

        const message = contextName + ' will not be saved. Exit page?'

        if (event) {
            event.returnValue = message
        }

        return message
    }

    const [name, setName] = useState()
    const [health, setHealth] = useState()
    const [defense, setDefense] = useState()
    const [speed, setSpeed] = useState()

    const { activeCharacter } = useContext(TavernContext)

    useEffect(() => {
        if (activeCharacter === null) {
            return
        }

        setName(activeCharacter.name)
        setHealth(activeCharacter.health)
        setDefense(activeCharacter.defense)
        setSpeed(activeCharacter.speed)
        
    }, [activeCharacter])

    const handleSubmit = (event) => {
        console.log('form submitted')
    }

    const handleNameChange = (event) => {
        console.log('new name: ' + event.target.value)
        setName(event.target.value)
    }

    const handleHealthChange = (event) => {
        console.log('new health: ' + event.target.value)
        setHealth(event.target.value)
    }

    const handleDefenseChange = (event) => {
        console.log('new defense: ' + event.target.value)
        setDefense(event.target.value)
    }

    const handleSpeedChange = (event) => {
        console.log('new speed: ' + event.target.value)
        setSpeed(event.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <InputField 
                    label={'Name:'}
                    value={name} 
                    handleChange={handleNameChange}
                    placeholder='Name'
                    type='text'
                    required={true}
                />
                <InputField 
                    label={'Health:'}
                    value={health} 
                    handleChange={handleHealthChange} 
                    placeholder='Health'
                    type='number'
                    min="0"
                    required={true}
                />
                <InputField 
                    label={'Defense:'}
                    value={defense} 
                    handleChange={handleDefenseChange}
                    placeholder='Defense'
                    type='number'
                    min="0"
                    required={true}
                />
                <InputField 
                    label={'Speed:'}
                    value={speed} 
                    handleChange={handleSpeedChange}
                    placeholder='Speed'
                    type='number'
                    min="0"
                    required={true}
                />
                <button type='submit'>Save</button>
            </form>
        </>
    )
}

export default CharacterCreatorPage
