
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VedioBackground = ({ movieId }) => {
    useMovieTrailer(movieId);
    const trailer = useSelector((store) => store.movies?.trailerVedio) 
  return (
    <div className="w-[90%] overflow-hidden">
      <iframe className=" aspect-vedio w-screen h-screen "
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailer?.key}?&autoplay=1&mute=1&loop=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin" 
        frameborder="0" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"
      ></iframe>
    </div>
  );
};

export default VedioBackground;
