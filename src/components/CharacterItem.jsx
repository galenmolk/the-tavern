function CharacterItem({character}) {
    return (
    <div className='card' onClick={() => {
        console.log(character)
    }}>
      {character.name}
    </div>
  )
}

export default CharacterItem
