import { useContext } from "react";
import { AbilityContext } from "../context/AbilityContext";
import AbilityList from "../components/Abilities/AbilityList";
import AbilitySearchBox from "../components/Abilities/AbilitySearchBox";

export default function Abilities() {
    const { editingAbility } = useContext(AbilityContext)

    return <AbilitySearchBox />  // editingAbility ? <p>editor</p> : <AbilityList />;
}
