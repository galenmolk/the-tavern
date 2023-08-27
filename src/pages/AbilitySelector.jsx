import { useContext } from "react";
import AbilityCard from "../components/AbilityCard";
import AbilityContext from "../context/AbilityContext";

export default function AbilitySelector() {
    const { abilities } = useContext(AbilityContext)

    return (
        <ul>
            {abilities.map((ability, index) => {
                return (
                    <li key={index}>
                        <AbilityCard ability={ability}/>
                    </li>
                );
            })}
        </ul>
   );
}
