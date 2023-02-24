import { useContext } from "react";
import TavernContext from "../context/TavernContext";

export default function AbilitySelector() {
    const { abilities } = useContext(TavernContext)

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
