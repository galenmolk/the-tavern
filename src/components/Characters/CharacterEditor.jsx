import { useContext, useState } from 'react'
import AbilityItem from '../Abilities/AbilityItem'
import InputField from '../shared/InputField'
import { AbilityContext } from '../../context/AbilityContext'
import CharacterContext from '../../context/CharacterContext'

function CharacterEditor() {
    const { getAbilitiesForIds } = useContext(AbilityContext)
    const { setEditingCharacter, editingCharacter, updateCharacter } = useContext(CharacterContext)

    const [ name, setName ] = useState(editingCharacter.name)
    const [ health, setHealth ] = useState(editingCharacter.health)
    const [ defense, setDefense ] = useState(editingCharacter.defense)
    const [ speed, setSpeed ] = useState(editingCharacter.speed)
    const [ abilityIds, setAbilityIds ] = useState(editingCharacter.abilityIds)

    const renderGlobalButtons = () => {
        return (
        <div className='button-panel'>
            <button className='button back' onClick={handleBack}>Back</button>
            <button className='button reset' onClick={handleReset}>Reset</button>
            <button className='button save' onClick={handleSave}>Save</button>
        </div>);
    }

    const handleBack = () => {
        setEditingCharacter(null);
    }

    const handleReset = () => {
        setName(editingCharacter.name);
        setHealth(editingCharacter.health);
        setDefense(editingCharacter.defense);
        setSpeed(editingCharacter.speed);
        setAbilityIds(editingCharacter.abilityIds);
    }

    const handleSave = () => {
        const updatedCharacter = {
            ...editingCharacter,
            name,
            health,
            defense,
            speed,
            abilityIds
        }
        updateCharacter(updatedCharacter)
        setEditingCharacter(null);
    }

    const handleNameChange = (name) => {
        setName(name);
    }

    const handleHealthChange = (health) => {
        setHealth(health);
    }

    const handleDefenseChange = (defense) => {
        setDefense(defense);
    }

    const handleSpeedChange = (speed) => {
        setSpeed(speed);
    }

    const handleAbilitiesChanged = (abilities) => {
        const c = editingCharacter;
        c.abilityIds = abilities;
        setEditingCharacter(c);
    }

    const removeAbility = (idToRemove) => {
        const newAbilityIds = abilityIds.filter((abilityId) => abilityId !== idToRemove);
        setAbilityIds(newAbilityIds);
    }

    return (
        <>
            {renderGlobalButtons()}
            <InputField 
                name={'Name'}
                value={name} 
                handleChange={(e) => handleNameChange(e.target.value)}
                type='text'
                required={true}
            />
            <InputField 
                name={'Health'}
                value={health} 
                handleChange={(e) => handleHealthChange(e.target.value)} 
                type='number'
                min="0"
                required={true}
            />
            <InputField 
                name={'Defense'}
                value={defense} 
                handleChange={(e) => handleDefenseChange(e.target.value)}
                type='number'
                min="0"
                required={true}
            />
            <InputField 
                name={'Speed'}
                value={speed} 
                handleChange={(e) => handleSpeedChange(e.target.value)}
                type='number'
                min="0"
                required={true}
            />
            {getAbilitiesForIds(abilityIds).map((ability, index) => {
                return (<AbilityItem key={index} ability={ability} onRemove={removeAbility}/>);
            })}
            {renderGlobalButtons()}
        </>
    )
}

export default CharacterEditor
