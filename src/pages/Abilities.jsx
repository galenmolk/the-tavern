import { useContext } from "react";
import { AbilityContext } from "../context/AbilityContext";
import AbilityList from "../components/Abilities/AbilityList";
import AbilityEditor from "../components/Abilities/AbilityEditor";

export default function Abilities() {
    const { editingAbility } = useContext(AbilityContext)

    return editingAbility ? <AbilityEditor/> : <AbilityList />;
}
