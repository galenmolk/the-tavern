import { createContext, useEffect, useState } from "react"
import { fetchAbilities, updateAbilities } from "../utils/Api"
import { NewAbility } from '../utils/NewAbility'

const AbilityContext = createContext()

export function AbilityProvider({ children }) {
    const [abilities, setAbilities] = useState([])
    const [editingAbility, setEditingAbility] = useState({});

    useEffect(() => {
        refresh();
    }, []);

    const refresh = async () => {
        const freshAbilities = await fetchAbilities();
        setAbilities(freshAbilities);
    }

    const updateAndPost = async (abs) => {
        await updateAbilities(abs);
        setAbilities(abs);
    }

    const addAbility = () => {
        const newAbs = [NewAbility(), ...abilities];
        updateAndPost(newAbs);
    }

    const updateAbility = (updatedAbility) => {
        const newAbs = abilities.map(a => a.id === updatedAbility.id ? updatedAbility : a);
        updateAndPost(newAbs);
    }

    const deleteAbility = (id) => {
        const newAbs = abilities.filter(a => a.id !== id);
        updateAndPost(newAbs);
    }

    const getAbilitiesForIds = (abilityIds) => {
        return abilities.filter((a) => abilityIds.includes(a.id));
    }

    const getCooldownOptions = () => {
        return abilities.reduce((acc, next) => {
            const cd = next.cooldown === undefined ? 0 : next.cooldown;
            if (acc.indexOf(cd) === -1) {
                acc.push(cd);
            }
            return acc;
        }, []).sort((a, b) => a - b);
    }

    return <AbilityContext.Provider value = {{
            abilities,
            editingAbility,
            setEditingAbility,
            getAbilitiesForIds,
            getCooldownOptions,
            addAbility,
            updateAbility,
            deleteAbility
        }}
        >
            {children}
        </AbilityContext.Provider>
}

export { AbilityContext };