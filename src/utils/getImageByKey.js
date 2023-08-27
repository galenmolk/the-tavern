import abilities from '../img/abilities.png';
import health from '../img/health.png';
import defense from '../img/defense.png';
import speed from '../img/speed.png';

const images = {
    abilities,
    health,
    defense,
    speed
}

export default function getImageByKey(key) {
    return images[key]
}
