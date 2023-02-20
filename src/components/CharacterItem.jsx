import { FaEdit, FaTimes } from 'react-icons/fa'
import { useContext } from 'react'
import TavernContext from '../context/TavernContext'
import StatLabel from './shared/StatLabel'

function CharacterItem({character, handleSelect}) {
    const { startEditing } = useContext(TavernContext)

    const handleEdit = () => {
        console.log('handle edit')
        startEditing(character)
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
        </div>
      </div>
  )
}

export default CharacterItem
