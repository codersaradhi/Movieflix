import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import { Header } from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import Gptpage from './Gptpage';





const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  useNowPlayingMovies(); //this our custom hook
  usePopularMovies(); // popular movies custom hook
  useTopRatedMovies(); // top rated movies custom hook
  useUpComingMovies(); // upcoming movies custom hook
  return (
    <div className='bg-black '>
      <Header />
      {showGptSearch ? <Gptpage /> :<>
        <MainContainer />
        <SecondaryContainer /></>}
    </div>
  )
}

export default Browse
