import Tooltip from "../shared/Tooltip"

export default function MiniAbilityItem( {ability, onRemove, onMouseEnter, onMouseLeave} ) {
    return <div className="mini-ability-item" onMouseEnter={() => onMouseEnter(ability)} onMouseLeave={onMouseLeave}>
            <button className="remove-button" onClick={() => onRemove(ability)}>X</button>
            <p className="mini-ability-item-text">{ability.name}</p>
        </div>
}
