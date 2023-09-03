import { useState } from "react"

const charLimit = 58;

export default function AbilitySearchItem( {ability, sideControls } ) {
    const [ isExpanded, setIsExpanded ] = useState(false);

    const isSpillover = () => {
        return ability.description.length > charLimit + 3;
    }

    const getDescription = () => {
        if (isExpanded || !isSpillover()) {
            return ability.description;
        }

        return ability.description.substring(0, charLimit) + "...";
    }

    const getDescriptionToggleText = () => {
        return isExpanded ? "Hide" : "Show"; 
    }

    const handleDescriptionToggleClick = () => {
        setIsExpanded(!isExpanded);
    }

    return <div className="search-row">
        {sideControls(ability)}
        <div className="search-item">{ability.name}</div>
        <div className="search-item" >
                {getDescription()}
                {isSpillover() ? <button onClick={handleDescriptionToggleClick}>{getDescriptionToggleText()}</button> : <></>}
        </div>
        <div className="search-item" style={{textAlign:"center"}}>{ability.cooldown}</div>
        <div className="search-item">{ability.isPassive ? "YES" : ""}</div>
        <div className="search-item">{ability.isInterrupt ? "YES" : ""}</div>
    </div>
}
