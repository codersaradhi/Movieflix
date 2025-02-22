import React from 'react';
import { URLs } from '../utils/constants';

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-48 mr-2 hover:scale-90 transition-all duration-300'>
      <img alt='Movie' src={URLs?.MOVIE_POSTER + posterPath} />
    </div>
  )
}

export default MovieCard
