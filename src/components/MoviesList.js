import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({title,Movies}) => {
  return (
    <div className='py-6 pl-20'>
      <h1 className='text-2xl font-semibold text-white mt-8 pb-2'>{title}</h1>
    <div className='flex overflow-x-scroll no-scrollbar'>
      <div className='flex pr-10'>
        {Movies?.map((movie) => <MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
      </div>
    </div>
    </div>
  )
}

export default MoviesList
