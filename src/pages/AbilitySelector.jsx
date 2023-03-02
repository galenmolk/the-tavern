import { useContext } from "react";
import AbilityContext from "../context/AbilityContext";

export default function AbilitySelector() {
    const { abilities } = useContext(AbilityContext)

    return (
        <ul>
            {abilities.map((ability, index) => {
                return (
                    <li key={index}>
                        <div className="card">
                            <input 
                                id={index}
                                type="checkbox"
                            />
                            {' '}
                            <label htmlFor={index}>{ability.name}</label>
                        </div>
                    </li>
                );
            })}
        </ul>
   );
}
