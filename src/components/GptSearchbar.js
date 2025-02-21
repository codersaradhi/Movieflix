import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";

const GptSearchbar = () => {
  const langKey = useSelector((store) => {
    return store.config.lang;
  });
  const searchText = useRef(null);
  const handlegptClick = async () => {
    console.log(searchText.current.value);
    //make a api call and log the results first
    const GPTquery =
      "Act as a Movie recommedation system and suggest some movies for the query :" +
      searchText.current.value +
      ".only give me names of 5 movies, comma seperated.";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: GPTquery }],
      model: "gpt-4o-mini",
    });
    console.log(gptResults.choices);
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
