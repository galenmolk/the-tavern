import { useState } from "react";

export default function AbilityItem({ ability, onRemove }) {
    const [ showDesc, setShowDesc ] = useState(false);
    
    function getTitle() {
        const title = [`${ability.name}`];

        if (ability.hasOwnProperty('cooldown')) {
            const cooldown = ability.cooldown;
            title.push(`(${cooldown} ${cooldown === 1 ? 'turn' : 'turns'})`)
        }

        if (ability.hasOwnProperty('isPassive') && ability.isPassive) {
            title.push('(Passive)');
        } 

        if (ability.hasOwnProperty('isInterrupt') && ability.isInterrupt) {
            title.push('(Interrupt)');
        }

        return title.join(' ');
    }

    function getDropdown() {
        return <div className={`${showDesc ? "up-caret" : "down-caret"}`}></div>
    }
    
    return (
        <div className="ability item">
            <div className="hor ability-item" onClick={() => setShowDesc(!showDesc)}>
                <p className="title">{getTitle()}</p>
                {getDropdown()}
                <button onClick={() => onRemove(ability.id)}>Remove</button>
            </div>
            {showDesc ? <p>{ability.description}</p> : <></>}
        </div>
    );
}
