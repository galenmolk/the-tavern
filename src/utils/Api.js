import { sillyDecrypt } from "./SillyCryptography";

const GH_PAT = sillyDecrypt('jks_g2dRP8NxC9JVNX15Ng57d1M8pnIiYz458qCT');
const GIST_ENDPOINT = 'https://api.github.com/gists/';

const CHARACTERS_ID = '12953c4c94be8897997bc3746fd82be9';
const ABILITIES_ID = 'e081087e30ca9af5f1bfbeff95511c3a';

const CHARACTERS_FILE = 'characters.json';
const ABILITIES_FILE = 'abilities.json';

const CHARACTER_PARAMS = {
    id: CHARACTERS_ID,
    file: CHARACTERS_FILE,
    label: 'characters'
};

const ABILITY_PARAMS = {
    id: ABILITIES_ID,
    file: ABILITIES_FILE,
    label: 'abilities'
}

const fetchCharacters = async () => {
    return await fetchGistData(CHARACTER_PARAMS);
}

const updateCharacters = async (characters) => {
    await updateGistData(CHARACTER_PARAMS, characters);
}

const fetchAbilities = async () => {
    return await fetchGistData(ABILITY_PARAMS);
}

const updateAbilities = async (abilities) => {
    await updateGistData(ABILITY_PARAMS, abilities);
}

const updateGistData = async (params, data) => {
    try {
        const gist = {
            files: {
                [params.file]: {
                    content: JSON.stringify(data, null, 2)
                }
            }
        }

        const response = await fetch(`${GIST_ENDPOINT}${params.id}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GH_PAT}`
            },
            body: JSON.stringify(gist)
        });

        const body = await response.json();
        console.log(`Updated ${params.label}: ${body}`);
    } catch (error) {
        console.error(`Error updating ${params.label}: `, error);
    }
}
const fetchGistData = async (params) => {

    try {
        const response = await fetch(`${GIST_ENDPOINT}${params.id}?timestamp=${new Date().getTime()}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${GH_PAT}`
            }
        });
        const body = await response.json();
        const json = body.files[params.file].content;
        return JSON.parse(json);
    } catch (error) {
        console.error(`Error fetching ${params.label}: `, error);
    }
}

export { 
    fetchCharacters, 
    updateCharacters, 
    fetchAbilities, 
    updateAbilities 
};
