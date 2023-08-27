import { createContext, useState } from "react"
import AbilityData from "../data/AbilityData"

const AbilityContext = createContext()

export const AbilityProvider = ({children}) => {
    const [abilities, setAbilities] = useState(AbilityData)

    const getAbilities = (abilityIds) => {
        return abilities.filter((a) => abilityIds.includes(a.id));
    }

    const updateAbility = (id, updatedAbility) => {
        setAbilities(abilities.map((a) => a.id === id ? updatedAbility : a));
    }

    return <AbilityContext.Provider value = {{
            abilities,
            getAbilities,
            updateAbility
        }}
        >
            {children}
        </AbilityContext.Provider>
}

export default AbilityContext
