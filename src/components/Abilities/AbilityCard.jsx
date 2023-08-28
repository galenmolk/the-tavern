import { useContext, useState } from "react";
import AbilityContext from "../../context/AbilityContext";
import InputField from "../shared/InputField";

export default function AbilityCard({ ability }) {
    const [modifiedAbility, setModifiedAbility] = useState(ability);
    const { updateAbility } = useContext(AbilityContext);

    const handleSaveAbility = (e) => {
        e.preventDefault();
    }

    const handleIsPassiveChanged = () => {
        const newAbility = ability;
        newAbility.isPassive = !ability.isPassive;
        setModifiedAbility(newAbility);
    };

    const handleCooldownChanged = (e) => {
        const newAbility = ability;
        newAbility.cooldown = e.target.value;
        setModifiedAbility(newAbility);
    }

    const handleDescriptionChanged = (e) => {
        const newAbility = ability;
        newAbility.description = e.target.value;
        setModifiedAbility(newAbility);
    }

    return (
        <form onSubmit={handleSaveAbility}>
            <div className="ability-card">
                <div>
                <h4>{ability.name}</h4>
                <label htmlFor="is-passive">{" "}Passive?:</label>
                <input id="is-passive" type="checkbox" checked={ability.isPassive} value={ability.isPassive} onChange={handleIsPassiveChanged}/>
                
                {!ability.isPassive ? <InputField 
                        name={'Cooldown'}
                        value={ability.cooldown ?? 0} 
                        handleChange={handleCooldownChanged}
                        type='number'
                        required={false}
                        min="0"
                    /> : null}
                </div>
                <textarea 
                    id="description" 
                    rows="4" 
                    cols="45" 
                    placeholder="Ability Description"
                    value={ability.description}
                    onChange={handleDescriptionChanged} />
            <button type="submit">Save</button>
            </div>
        </form>
    );
}
