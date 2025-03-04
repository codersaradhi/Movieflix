import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MoviesList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null; //or load shimmer ui

  return (
    <div className="bg-black 
     text-white bg-opacity-70 relative  top-96 ">
      <div >
        {movieNames.map((movie, index) => (
          <MovieList key={movie.index} title={movie} Movies={movieResults[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
