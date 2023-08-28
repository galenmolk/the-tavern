import { v4 as uuidv4 } from 'uuid';

const DEFAULT_ABILITY = {
    name: 'New Ability',
    colorHex: '#FFFFFF',
    description: "",
};

export function NewAbility() {
    return {
        id: uuidv4(),
        ...DEFAULT_ABILITY
    }
}
