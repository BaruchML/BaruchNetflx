import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies}) => {
  return (
  
    <div className='flex'>

    {movies.map(item => <MovieCard key={item.id}{...item}/>)}

    </div>
    

  )
}

export default MovieList