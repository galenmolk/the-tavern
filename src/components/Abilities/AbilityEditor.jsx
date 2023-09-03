import { useContext, useState } from "react"
import { AbilityContext } from "../../context/AbilityContext"
import InputField from "../shared/InputField";
import UnloadConfirmation from "../shared/UnloadConfirmation";

export default function Test() {
    const { endEdit, editingAbility, updateAbility } = useContext(AbilityContext)
    
    const [ name, setName ] = useState(editingAbility.name);
    const [ description, setDescription ] = useState(editingAbility.description);
    const [ cooldown, setCooldown ] = useState(editingAbility.cooldown);
    const [ isPassive, setIsPassive ] = useState(editingAbility.isPassive);
    const [ isInterrupt, setIsInterrupt ] = useState(editingAbility.isInterrupt);

    const renderGlobalButtons = () => {
        return (
        <div className='button-panel'>
            <button className='button back' onClick={handleBack}>Back</button>
            <button className='button reset' onClick={handleReset}>Reset</button>
            <button className='button save' onClick={handleSave}>Save</button>
        </div>);
    }

    const handleBack = () => {
        endEdit();
    }

    const handleReset = () => {
        setName(editingAbility.name);
        setDescription(editingAbility.description);
        setCooldown(editingAbility.cooldown);
        setIsPassive(editingAbility.isPassive);
        setIsInterrupt(editingAbility.isInterrupt);
    }

    const handleSave = () => {
        const updatedAbility = {
            ...editingAbility,
            name,
            description,
            cooldown,
            isPassive,
            isInterrupt
        }
        updateAbility(updatedAbility)
        endEdit();
    }

    const handleNameChange = (name) => {
        setName(name);
    }

    const handleDescriptionChange = (description) => {
        setDescription(description);
    }

    const handleCooldownChange = (cooldown) => {
        setCooldown(cooldown);
    }

    const handleIsPassiveChange = (isPassive) => {
        setIsPassive(isPassive);
    }

    const handleIsInterruptChange = (isInterrupt) => {
        setIsInterrupt(isInterrupt);
    }

    return (
        <UnloadConfirmation>
        {renderGlobalButtons()}
            <InputField 
                name={'Name'}
                value={name} 
                handleChange={(e) => handleNameChange(e.target.value)}
                type='text'
            />
            <p>Description:</p>
            <textarea 
                id='descriptionTextArea'
                rows={8}
                cols={60}
                name={'Description'}
                value={description} 
                onChange={(e) => handleDescriptionChange(e.target.value)} 
                type='text'
            />
            <InputField 
                name={'Cooldown'}
                value={cooldown} 
                handleChange={(e) => handleCooldownChange(e.target.value)}
                type='number'
            />
            <div>
            <label htmlFor="passiveCheckbox">Passive: </label>
            <input 
                id="passiveCheckbox" 
                checked={isPassive}
                onChange={(e) => handleIsPassiveChange(e.target.checked)}
                type={'checkbox'}
            />
            <br/>
            </div>
            <div>
            <label htmlFor="interruptCheckbox">Interrupt: </label>
            <input 
                id="interruptCheckbox" 
                checked={isInterrupt}
                onChange={(e) => handleIsInterruptChange(e.target.checked)}
                type={'checkbox'}
            />
            <br/>
            </div>
        </UnloadConfirmation>
    )
}
