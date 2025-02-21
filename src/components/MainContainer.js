import React from "react";
import VedioTitle from "./VedioTitle";
import VedioBackground from "./VedioBackground";
import { useSelector } from "react-redux";
// import MovieCards from "./ShimmerMovieCards";
import SecondaryContainer from "./SecondaryContainer";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  // console.log(mainMovie)
  const { original_title, overview, id } = mainMovie;
  return (

      <div>
        <VedioTitle title={original_title} overview={overview} />
        <VedioBackground movieId={id} />
        
      </div>
    
  );
};

export default MainContainer;
