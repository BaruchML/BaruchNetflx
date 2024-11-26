import React from 'react'

const MovieCard = ({title,category,img ,year}) => {
  return (
    <div className='border-2 border-cyan-200 p-2 m-2'>
        <h1>{title}</h1>
        <img src={img} alt={title} />
        <p>{category}</p>
        <p>{year}</p>

    </div>
  )
}

export default MovieCard