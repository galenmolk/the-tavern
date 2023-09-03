import { v4 as uuidv4 } from 'uuid';

const DEFAULT_ABILITY = {
    name: 'New Ability',
    colorHex: '#FFFFFF',
    description: "",
    cooldown: 0,
    isPassive: false,
    isInterrupt: false
};

export function NewAbility() {
    return {
        id: uuidv4(),
        ...DEFAULT_ABILITY
    }
}
