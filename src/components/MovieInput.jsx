import React from 'react'
import { useState } from 'react'
import { addMovie } from '../reducers/movieSlice'
import {useDispatch} from 'react-redux'

const MovieInput = () => {
  const [newMovie, setNewMovie] = useState('');

  const dispatch = useDispatch();

  const handleAddMovie = () => {
    if (newMovie) {
        dispatch(addMovie(newMovie));
        setNewMovie('');
      }
  };

  return (
    <>
      <input type="text" onChange={(e) => setNewMovie(e.target.value)}/>
      <button onClick={handleAddMovie}>Add Movie</button>
    </>
  )
};

export default MovieInput