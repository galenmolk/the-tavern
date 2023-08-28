import { v4 as uuidv4 } from 'uuid';

const DEFAULT_CHARACTER = {
    name: 'New Character',
    colorHex: '#FFFFFF',
    health: 0,
    defense: 0,
    speed: 6,
    abilityIds: []
};

export function NewCharacter() {
    return {
        id: uuidv4(),
        ...DEFAULT_CHARACTER
    }
}
