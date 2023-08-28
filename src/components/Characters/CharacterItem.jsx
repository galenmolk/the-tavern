import { useContext } from 'react'
import StatLabel from '../shared/StatLabel'
import CharacterContext from '../../context/CharacterContext'
import EditButton from '../shared/EditButton'
import DeleteButton from '../shared/DeleteButton'

function CharacterItem({ character }) {
    const { setEditingCharacter, deleteCharacter } = useContext(CharacterContext)

    const handleEdit = () => {
      setEditingCharacter(JSON.parse(JSON.stringify(character)));
    }

    const handleDelete = () => {
      console.log('deleting ' + character.name)
      deleteCharacter(character.id);
    }

    return (
      <div className='item character'>
          <div className="title">{character.name}</div>
          <div className='stats-and-edit'>
            <StatLabel type='health' value={character.health}/>
            <StatLabel type='defense' value={character.defense}/>
            <StatLabel type='speed' value={character.speed}/>
            <StatLabel type='abilities' value={character.abilityIds.length}/>
            <EditButton onClick={handleEdit}/>
            <DeleteButton onClick={handleDelete}/>
          </div>
      </div>
  )
}

export default CharacterItem
