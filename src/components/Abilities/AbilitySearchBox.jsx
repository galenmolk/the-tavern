import { AbilityContext } from '../../context/AbilityContext'
import AbilitySearchItem from "./AbilitySearchItem";
import { useContext, useState } from "react";
import Select from 'react-select'

const defaultBooleanOption = { value: undefined, label: 'Any' };

const booleanOptions = [
    defaultBooleanOption,
    { value: true, label: 'Yes' },
    { value: false, label: 'No' }
];

export default function AbilitySearchBox( { sideControls }) {
    const { abilities, getCooldownOptions } = useContext(AbilityContext);
    const [ nameFilter, setNameFilter ] = useState("")
    const [ descriptionFilter, setDescriptionFilter ] = useState("")
    const [ cooldownFilter, setCooldownFilter ] = useState([])
    const [ passiveFilter, setPassiveFilter ] = useState(undefined)
    const [ interruptFilter, setInterruptFilter ] = useState(undefined)

    const abilityFilter = (ability) => {
        if (ability.name.toLowerCase().indexOf(nameFilter.trim().toLowerCase()) === -1) {
            return false;
        }

        if (ability.description.toLowerCase().indexOf(descriptionFilter.trim().toLowerCase()) === -1) {
            return false;
        }

        if (cooldownFilter.length > 0 && cooldownFilter.indexOf(ability.cooldown) === -1) {
            return false;
        }

        if (passiveFilter !== undefined && passiveFilter !== ability.isPassive) {
            return false;
        }

        if (interruptFilter !== undefined && interruptFilter !== ability.isInterrupt) {
            return false;
        }

        return true;
    }

    const onNameFilterChange = (e) => {
        setNameFilter(e.target.value);
    }

    const onDescriptionFilterChange = (e) => {
        setDescriptionFilter(e.target.value);
    }

    const onCooldownFilterChange = (e) => {
        setCooldownFilter(e.map(cd => cd.value));
    }

    const onPassiveFilterChange = (e) => {
        setPassiveFilter(e.value);
    }

    const onInterruptFilterChange = (e) => {
        setInterruptFilter(e.value);
    }

    const getCooldownFilterOptions = () => {
        return getCooldownOptions().map(cd => { return {value: cd, label: cd }})
    }

    return (
        <>
        <div className='search-row'>
            <div></div>
            <div className='search-header'>NAME</div>
            <div className='search-header'>DESCRIPTION</div>
            <div className='search-header'>COOLDOWN</div>
            <div className='search-header'>PASSIVE</div>
            <div className='search-header'>INTERRUPT</div>
        </div>
        <div className='search-row'>
            <div></div>
            <input className='search-filter' type="text" onChange={onNameFilterChange}></input>
            <input className='search-filter' type="text" onChange={onDescriptionFilterChange}></input>
            <div className='search-filter'><Select options={getCooldownFilterOptions()} placeholder={'Any'} isMulti onChange={onCooldownFilterChange}/></div>
            <div className='search-filter'><Select options={booleanOptions} defaultValue={defaultBooleanOption} onChange={onPassiveFilterChange}/></div>
            <div className='search-filter'><Select options={booleanOptions} defaultValue={defaultBooleanOption} onChange={onInterruptFilterChange}/></div>
        </div>
        <div>
            { abilities.filter(a => abilityFilter(a)).map((a, i) => <AbilitySearchItem ability={a} key={i} sideControls={sideControls}/>)}
        </div>
        </>
    );
}
