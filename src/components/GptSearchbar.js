import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchbar = () => {
  const langKey = useSelector((store) => {
    return store.config.lang});
    
  return (
    <div className="pt-[10%] flex justify-center absolute top-28 mx-auto right-0 left-0">
      <form className="w-1/2 bg-black bg-opacity-75 grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9 bg-gray-700 bg-opacity-50 text-white"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchbar;
