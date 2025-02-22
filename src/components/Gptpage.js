import { URLs } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchbar from "./GptSearchbar";

const GPTpage = () => {
  return (
    <>
      <div className=" fixed ">
        <img
          className="w-screen h-screen object-cover"
          src={URLs.BG_IMG_URL}
          alt="logo"
        />
      </div>
      <div>
        <GptSearchbar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};
export default GPTpage;
