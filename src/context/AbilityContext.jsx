import { createContext, useEffect, useState } from "react"
import { fetchAbilities, updateAbilities } from "../utils/Api"
import { NewAbility } from '../utils/NewAbility'

const AbilityContext = createContext()

export const AbilityProvider = ({ children }) => {
    const [abilities, setAbilities] = useState(null)
    const [editingAbility, setEditingAbility] = useState(null);

    useEffect(() => {
        const refresh = async () => {
            const freshAbilities = await fetchAbilities();
            setAbilities(freshAbilities)
        }

        refresh();
    }, []);

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

    return <AbilityContext.Provider value = {{
            abilities,
            editingAbility,
            setEditingAbility,
            getAbilitiesForIds,
            addAbility,
            updateAbility,
            deleteAbility
        }}
        >
            {children}
        </AbilityContext.Provider>
}

export default AbilityContext
