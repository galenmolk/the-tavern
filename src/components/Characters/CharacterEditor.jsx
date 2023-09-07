import '../../css/character-editor.css'
import { useContext, useState } from 'react'
import InputField from '../shared/InputField'
import { AbilityContext } from '../../context/AbilityContext'
import CharacterContext from '../../context/CharacterContext'
import UnloadConfirmation from '../shared/UnloadConfirmation'
import MiniAbilityItem from '../Abilities/MiniAbilityItem'
import AbilitySearchBox from '../Abilities/AbilitySearchBox'
import { hover } from '@testing-library/user-event/dist/hover'

export default function CharacterEditor() {
    const { getAbilityForId } = useContext(AbilityContext)
    const { setEditingCharacter, editingCharacter, updateCharacter } = useContext(CharacterContext)

    const [ name, setName ] = useState(editingCharacter.name)
    const [ health, setHealth ] = useState(editingCharacter.health)
    const [ defense, setDefense ] = useState(editingCharacter.defense)
    const [ speed, setSpeed ] = useState(editingCharacter.speed)
    const [ abilityIds, setAbilityIds ] = useState(editingCharacter.abilityIds)

    const [ hoveringAbility, setHoveringAbility] = useState(null);

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

    const handleAddAbility = (ability) => {
        console.log('handleAddAbility ' + ability.name)
        const newAbilityIds = [ability.id, ...abilityIds];
        setAbilityIds(newAbilityIds);
    }

    const abilityFilter = (ability) => {
        return !abilityIds.includes(ability.id);
    }

    const handleRemoveAbility = (ability) => {
        const newAbilityIds = abilityIds.filter((abilityId) => abilityId !== ability.id);
        setAbilityIds(newAbilityIds);
    }

    const sideControls = (ability) => {
        return (
            <div>
                <button style={{fontWeight:"bold"}} onClick={() => handleAddAbility(ability)}>Add</button>
            </div>
        );
    }

    const handleMouseEnter = (ability) => {
        console.log('enter')

        setHoveringAbility(ability);
    }

    const handleMouseLeave = () => {
        console.log('leave')
        setHoveringAbility(null);
    }

    const getAbilityPreview = () => {
        const preview = hoveringAbility === null ? {
            name: "<NAME>",
            cooldown: "<COOLDOWN>", 
            description: "<DESCRIPTION>", 
            isPassive: "<PASSIVE>", 
            isInterrupt: "<INTERRUPT>" } : hoveringAbility;

        return (
            <div className='ability-preview'>
                <p>{preview.name}</p>
                <p>C: {preview.cooldown} / P: {preview.isPassive} / I: {preview.isInterrupt}</p>
                <p>{preview.description}</p>
            </div>
        );
    }

    return (
        <UnloadConfirmation>
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
            {getAbilityPreview()}
            <p>Selected Abilities:</p>
            <div id="selectedAbs" className='mini-ability-item-container'>
                {abilityIds.map((id) => {
                    const ability = getAbilityForId(id);
                    return <MiniAbilityItem 
                    ability={ability} 
                    key={id} 
                    onRemove={handleRemoveAbility}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}/>
                })}
            </div>
            <p>Ability Library:</p>
            <AbilitySearchBox sideControls={sideControls} optionalFilter={abilityFilter}/>
        </UnloadConfirmation>
    )
}
