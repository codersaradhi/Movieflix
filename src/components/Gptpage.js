import { URLs } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchbar from "./GptSearchbar";

const GPTpage = () => {
  return (
    <>
      <div className=" -z-10 w-screen h-screen">
        <img className="h-auto" src={URLs.BG_IMG_URL} alt="logo" />
      </div>
      <div className="">
        <GptSearchbar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};
export default GPTpage;