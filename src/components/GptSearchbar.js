import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchbar = () => {
  const dispatch = useDispatch()
  const langKey = useSelector((store) => {
    
    return store.config.lang;
  });
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1", API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handlegptClick = async () => {
    // console.log(searchText.current.value);
    //make a api call and log the results first
    const GPTquery =
      "Act as a Movie recommedation system and suggest some movies for the query :" +
      searchText.current.value +
      ".only give me names of 5 movies, comma seperated.";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: GPTquery }],
      model: "gpt-4o-mini",
    });
    // if(!gptResults.choices){
    //   <div className="alert alert-error  p-4 mb-4 bg-red-500 text-white rounded">
    //     Your query is empty..
    //   </div>
    // } //have to check this error handling
    // console.log(gptResults.choices?.[0]?.message?.content);
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    console.log(gptMovies)
    const PromiseArray = gptMovies.map((movie)=>searchMovieTMDB(movie))
    const tmbdResults = await Promise.all(PromiseArray)
    // console.log(tmbdResults)
    dispatch(addGptMovieResult({movieNames:gptMovies, movieResults:tmbdResults}));
  };


  return (
    <div className="pt-[10%] flex justify-center absolute top-28 mx-auto right-0 left-0">
      <form
        className="w-1/2 bg-black bg-opacity-75 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 bg-gray-700 bg-opacity-50 text-white"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white"
          onClick={handlegptClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchbar;
