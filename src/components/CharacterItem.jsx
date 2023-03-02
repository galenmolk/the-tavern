import { FaEdit, FaTimes } from 'react-icons/fa'
import { useContext } from 'react'
import StatLabel from './shared/StatLabel'
import CharacterContext from '../context/CharacterContext'

function CharacterItem({ character }) {
    const { setEditingCharacter } = useContext(CharacterContext)

    const handleEdit = () => {
      setEditingCharacter(character)
    }

    return (
      <div className='card'>
        <div>
          <h3 className='horizontal padding-right'>{character.name}</h3>
          <button className='horizontal padding-right' onClick={handleEdit}><b>Edit</b><FaEdit/></button>
        </div>
        <div className='character-stats'>
          <StatLabel label='Health' value={character.health}/>
          <StatLabel label='Defense' value={character.defense}/>
          <StatLabel label='Speed' value={character.speed}/>
          <StatLabel label='Abilities' value={character.abilities.length}/>
        </div>
      </div>
  )
}

export default CharacterItem
