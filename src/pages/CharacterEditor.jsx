import { useContext, useState, useEffect } from 'react'
import TavernContext from '../context/TavernContext'
import InputField from '../components/shared/InputField'

function CharacterEditor() {

    const [name, setName] = useState()
    const [health, setHealth] = useState()
    const [defense, setDefense] = useState()
    const [speed, setSpeed] = useState()

    const { stopEditing, editingCharacter, updateCharacter } = useContext(TavernContext)

    useEffect(() => {
        if (editingCharacter === null) {
            return
        }

        setName(editingCharacter.name)
        setHealth(editingCharacter.health)
        setDefense(editingCharacter.defense)
        setSpeed(editingCharacter.speed)
        
    }, [editingCharacter])

    const handleSubmit = (event) => {
        event.preventDefault()

        const updatedCharacter = {
            id: editingCharacter.id,
            name,
            health,
            defense,
            speed
        }

        updateCharacter(editingCharacter.id, updatedCharacter)
        stopEditing()
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleHealthChange = (event) => {
        setHealth(event.target.value)
    }

    const handleDefenseChange = (event) => {
        setDefense(event.target.value)
    }

    const handleSpeedChange = (event) => {
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

export default CharacterEditor
