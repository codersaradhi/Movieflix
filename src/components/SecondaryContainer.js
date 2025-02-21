import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies)

  return (
    <div className='-mt-36 z-25 relative'>
      <MoviesList title={"Now Playing"} Movies={movies.nowPlayingMovies}/>
      <MoviesList title={"Popular"} Movies={movies.popularMovies}/>
      <MoviesList title={"Top Rated"} Movies={movies.topRatedMovies}/>
      <MoviesList title={"UpComing"} Movies={movies.upComingMovies}/>
    </div>
    /*
    MoviesList - popular
      MoviesCards * n
    MovieList - Now playing 
    MoviesList - Trending
    MoviesList - Horror
     */
  )
}

export default SecondaryContainer
