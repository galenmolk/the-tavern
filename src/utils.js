import { v4 as uuidv4 } from 'uuid';

const DEFAULT_NAME = 'New Character';
const DEFAULT_HEALTH = 0;
const DEFAULT_DEFENSE = 0;
const DEFAULT_SPEED = 6;

export function NewCharacter() {
    return {
        id: uuidv4(),
        name: DEFAULT_NAME,
        health: DEFAULT_HEALTH,
        defense: DEFAULT_DEFENSE,
        speed: DEFAULT_SPEED,
        abilities: []
    }
}
