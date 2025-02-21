import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import { Header } from './Header';
import MainContainer from './MainContainer';



const Browse = () => {
  useNowPlayingMovies(); //this our custom hook
  usePopularMovies(); // popular movies custom hook
  useTopRatedMovies(); // top rated movies custom hook
  useUpComingMovies(); // upcoming movies custom hook
  return (
    <div className='bg-black '>
      <Header />
      <MainContainer />
    </div>
  )
}

export default Browse
