import { useContext } from "react";
import NavBar from "../shared/NavBar";
import SaveJsonButton from "../shared/SaveJsonButton";
import { AbilityContext } from '../../context/AbilityContext'
import AbilityItem from './AbilityItem'

export default function AbilityList() {
    const { abilities, addAbility, getAbilitiesForIds } = useContext(AbilityContext);

    const displayAbilities = () => {
        console.log('display abs: ' +  abilities.length)
        return abilities.map(
            (ability, index) => (
                <AbilityItem 
                    key={index}
                    ability={ability}
                />
            )
        );
    };

    return (
        <>
            <NavBar />
            <div>
                <SaveJsonButton name='abilities' data={abilities} />
                <button onClick={addAbility}><b>NEW ABILITY</b></button>
                {abilities ? displayAbilities() : <></>}
            </div>            
        </>
    );
}
