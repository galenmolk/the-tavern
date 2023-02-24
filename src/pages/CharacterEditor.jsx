import { useContext, useState } from 'react'
import TavernContext from '../context/TavernContext'
import InputField from '../components/shared/InputField'

function CharacterEditor() {
    const { getAbilities, stopEditing, editingCharacter, updateCharacter } = useContext(TavernContext)

    const [modifiedCharacter, setModifiedCharacter] = useState(editingCharacter)

    const handleSubmit = (event) => {
        event.preventDefault()

        const c = modifiedCharacter;
        c.id = editingCharacter.id;

        updateCharacter(editingCharacter.id, c)
        stopEditing()
    }

    const setName = (name) => {
        const c = modifiedCharacter;
        c.name = name;
        setModifiedCharacter(c);
    }

    const setHealth = (health) => {
        const c = modifiedCharacter;
        c.health = health;
        setModifiedCharacter(c);
    }

    const setDefense = (defense) => {
        const c = modifiedCharacter;
        c.defense = defense;
        setModifiedCharacter(c);
    }

    const setSpeed = (speed) => {
        const c = modifiedCharacter;
        c.speed = speed;
        setModifiedCharacter(c);
    }

    const setAbilities = (abilities) => {
        const c = modifiedCharacter;
        c.abilities = abilities;
        setModifiedCharacter(c);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <InputField 
                    name={'Name'}
                    value={modifiedCharacter.name} 
                    handleChange={(e) => setName(e.target.value)}
                    type='text'
                    required={true}
                />
                <InputField 
                    name={'Health'}
                    value={modifiedCharacter.health} 
                    handleChange={(e) => setHealth(e.target.value)} 
                    type='number'
                    min="0"
                    required={true}
                />
                <InputField 
                    name={'Defense'}
                    value={modifiedCharacter.defense} 
                    handleChange={(e) => setDefense(e.target.value)}
                    type='number'
                    min="0"
                    required={true}
                />
                <InputField 
                    name={'Speed'}
                    value={modifiedCharacter.speed} 
                    handleChange={(e) => setSpeed(e.target.value)}
                    type='number'
                    min="0"
                    required={true}
                />
                <ul>
                {getAbilities(modifiedCharacter.abilities).map((ability, index) => {
                return (
                    <li key={index}>
                        <div className="card">
                            <input 
                                id={index}
                                type="checkbox"
                            />
                            {' '}
                            <label htmlFor={index}>{ability.name}</label>
                        </div>
                    </li>
                );
            })}
        </ul>
                <button type='submit'>Save</button>
            </form>
        </>
    )
}

export default CharacterEditor
