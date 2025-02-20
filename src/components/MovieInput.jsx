import React from 'react'

const MovieInput = () => {
  const [newMovie, setNewMovie] = useState('')
  
  return (
    <>
      <input type="text" /> <button>Add Movie</button>
    </>
  )
}

export default MovieInput