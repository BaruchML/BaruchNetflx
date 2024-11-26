import React, { useEffect, useState } from 'react'
import { getMovies } from '../../AsyncMock'
import MovieList from './MovieList'


const MoviesListContainer = () => {

    const [movies,setMovies] = useState([])

    useEffect(() => {
        getMovies()
        .then(res => setMovies(res))
        .catch(err => console.log(err));
    },[])

  return (
<>

<MovieList movies={movies}/>
</>
  )
}

export default MoviesListContainer