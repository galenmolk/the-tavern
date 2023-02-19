import { FaEdit} from 'react-icons/fa'
import { useContext } from 'react'
import TavernContext from '../context/TavernContext'
import { useNavigate } from 'react-router-dom'

function CharacterItem({character, handleSelect}) {
    const { setActiveCharacter } = useContext(TavernContext)

    const navigate = useNavigate()

    const handleEdit = () => {
        console.log('handle edit')
        setActiveCharacter(character)
        navigate('/character')
    }

    return (
      <div className='card'>
        <button onClick={handleEdit}><b>Edit</b><FaEdit/></button>
      <h3>{character.name}</h3>
      <p>
        Defense: {character.defense}<br/>
        Health: {character.health}<br/>
        Speed: {character.speed}
      </p>
      </div>
  )
}

export default CharacterItem
