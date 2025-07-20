import { useDispatch, useSelector } from "react-redux";
import useMovieById from "../hooks/useMovideById";

export default function VideoBackground({ movieId, bool }) {
  const dispatch = useDispatch();
  useMovieById(movieId, dispatch);
  const trailerMovie = useSelector((state) => state.movie.trailerMovie);
  return (
    <div className={` inset-0 $ w-screen h-screen z-0 overflow-hidden`}>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=IhNiDHyqjoX1rd0r&autoplay=1&mute&playlist=${trailerMovie?.key}`}
        title="YouTube video player"
        allow="autoplay; fullscreen"
        allowFullScreen
        style={{ minWidth: "100vw", minHeight: "100vh", objectFit: "cover" }}
      ></iframe>
    </div>
  );
}
