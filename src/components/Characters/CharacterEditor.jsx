import '../../css/character-editor.css'
import { useContext, useState } from 'react'
import InputField from '../shared/InputField'
import { AbilityContext } from '../../context/AbilityContext'
import CharacterContext from '../../context/CharacterContext'
import UnloadConfirmation from '../shared/UnloadConfirmation'
import MiniAbilityItem from '../Abilities/MiniAbilityItem'
import AbilitySearchBox from '../Abilities/AbilitySearchBox'
import { SketchPicker } from 'react-color'
import ConfirmationModal from '../shared/ConfirmationModal'

export default function CharacterEditor() {
    const { getAbilityForId } = useContext(AbilityContext)
    const { setEditingCharacter, editingCharacter, updateCharacter } = useContext(CharacterContext)

    const [ name, setName ] = useState(editingCharacter.name)
    const [ health, setHealth ] = useState(editingCharacter.health)
    const [ defense, setDefense ] = useState(editingCharacter.defense)
    const [ speed, setSpeed ] = useState(editingCharacter.speed)
    const [ abilityIds, setAbilityIds ] = useState(editingCharacter.abilityIds)
    const [ colorHex, setColorHex ] = useState(editingCharacter.colorHex);
    const [ discardParams, setDiscardParams ] = useState(null);
    const [ unsavedChanges, setUnsavedChanges ] = useState(false);

    const [ hoveringAbility, setHoveringAbility] = useState(null);

    const renderGlobalButtons = () => {
        return (
        <div className='button-panel'>
            <button className='button back' onClick={handleTryBack}>Back</button>
            <button className='button reset' onClick={handleTryReset}>Reset</button>
            <button className='button save' onClick={handleSave}>Save</button>
        </div>);
    }

    const confirmBack = () => {
        setEditingCharacter(null);
    }

    const confirmReset = () => {
        setName(editingCharacter.name);
        setHealth(editingCharacter.health);
        setDefense(editingCharacter.defense);
        setSpeed(editingCharacter.speed);
        setColorHex(editingCharacter.colorHex);
        setAbilityIds(editingCharacter.abilityIds);
        setDiscardParams(null);
        setUnsavedChanges(false);
    }

    const cancelDiscard = () => {
        setDiscardParams(null);
    }

    const handleTryBack = () => {
        if (unsavedChanges === true) {
            setDiscardParams({
                prompt: `Are you sure you want to leave? All unsaved changes to ${editingCharacter.name} will be lost.`,
                confirm: confirmBack
            });
        } else {
            confirmBack();
        }
    }

    const handleTryReset = () => {
        if (unsavedChanges === true) {
            setDiscardParams({
                prompt: `Are you sure you want to reset? All unsaved changes to ${editingCharacter.name} will be lost.`,
                confirm: confirmReset
            });
        } else {
            confirmReset();
        }
    }

    const handleSave = () => {
        const updatedCharacter = {
            ...editingCharacter,
            name,
            colorHex,
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
        setUnsavedChanges(true);
    }

    const handleHealthChange = (health) => {
        setHealth(health);
        setUnsavedChanges(true);
    }

    const handleDefenseChange = (defense) => {
        setDefense(defense);
        setUnsavedChanges(true);
    }

    const handleSpeedChange = (speed) => {
        setSpeed(speed);
        setUnsavedChanges(true);
    }

    const handleColorChange = (color) => {
        setColorHex(color.hex);
        setUnsavedChanges(true);
    }

    const handleAddAbility = (ability) => {
        console.log('handleAddAbility ' + ability.name)
        const newAbilityIds = [ability.id, ...abilityIds];
        setAbilityIds(newAbilityIds);
        setUnsavedChanges(true);
    }

    const abilityFilter = (ability) => {
        return !abilityIds.includes(ability.id);
    }

    const handleRemoveAbility = (ability) => {
        const newAbilityIds = abilityIds.filter((abilityId) => abilityId !== ability.id);
        setAbilityIds(newAbilityIds);
        setUnsavedChanges(true);
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

        const getPassive = () => {
            return preview.isPassive === '<PASSIVE>' ? '<PASSIVE>' : (preview.isPassive ? 'Yes' : 'No');
        }

        const getInterrupt = () => {
            return preview.isInterrupt === '<INTERRUPT>' ? '<INTERRUPT>' : (preview.isInterrupt ? 'Yes' : 'No');
        }

        return (
            <div className='ability-preview'>
                <p>{preview.name.toUpperCase()}</p>
                <p>COOLDOWN: {preview.cooldown} / PASSIVE: {getPassive()} / INTERRUPT: {getInterrupt()}</p>
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
            <div style={{ backgroundColor: colorHex, width: '100px', height: '50px', alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                Color
            </div>

            <SketchPicker color={colorHex} onChange={handleColorChange} />
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
            { discardParams !== null ? <ConfirmationModal 
                prompt={discardParams.prompt}
                onYes={discardParams.confirm}
                onNo={cancelDiscard}/> : null}
        </UnloadConfirmation>
    )
}
