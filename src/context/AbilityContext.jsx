import { createContext, useState } from "react"
import AbilityData from "../data/AbilityData"

const AbilityContext = createContext()

export const AbilityProvider = ({children}) => {
    const [abilities, setAbilities] = useState(AbilityData)

    const getAbilities = (abilityIds) => {
        return abilities.filter((a) => abilityIds.includes(a.id));
    }

    return <AbilityContext.Provider value = {{
            abilities,
            getAbilities,
        }}
        >
            {children}
        </AbilityContext.Provider>
}

export default AbilityContext
