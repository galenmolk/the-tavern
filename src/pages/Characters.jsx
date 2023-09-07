import { useContext } from 'react'
import CharacterContext from '../context/CharacterContext';
import CharacterEditor from '../components/Characters/CharacterEditor';
import CharacterList from '../components/Characters/CharacterList';

export default function Characters() {
    const { editingCharacter } = useContext(CharacterContext)

    return editingCharacter ? <CharacterEditor /> : <CharacterList />
}
