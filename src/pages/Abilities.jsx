import { useContext } from "react";
import AbilityContext from "../context/AbilityContext";
import AbilityList from "../components/Abilities/AbilityList";

export default function Abilities() {
    const { editingAbility } = useContext(AbilityContext)

    return editingAbility ? <p>editor</p> : <AbilityList />;
}
