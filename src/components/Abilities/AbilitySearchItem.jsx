import { useState } from "react"

const charLimit = 74;

export default function AbilitySearchItem( {ability} ) {
    const [ isExpanded, setIsExpanded ] = useState(false);
    
    const getDescription = () => {
        const d = ability.description;

        if (isExpanded || d.length <= charLimit + 3) {
            return d;
        }

        return ability.description.substring(0, charLimit) + "...";
    }

    const handleDescClick = (e) => {
        e.preventDefault();
        setIsExpanded(!isExpanded);
    }

    return <div className="search-row">
        <div className="search-item">{ability.name}</div>
        <div className="search-item" onClick={handleDescClick}>{getDescription()}</div>
        <div className="search-item">{ability.cooldown}</div>
        <div className="search-item">{ability.isPassive ? "Yes" : ""}</div>
        <div className="search-item">{ability.isInterrupt ? "Yes" : ""}</div>
    </div>
}
