import React from "react";
import { useDispatch } from "react-redux";
import { setMovieId, setOpen } from "../redux/movieSlice";

export default function MoveiCard({ movie, movieId }) {
  const dispatch = useDispatch();
  if (movie.poster_path === null) {
    return null;
  }
  const handleOpen = () => {
    dispatch(setOpen(true));
    dispatch(setMovieId(movieId));
  };
  return (
    <div className="w-48 pr-2 group cursor-pointer" onClick={handleOpen}>
      <div className="relative overflow-hidden rounded-xl shadow-lg border border-gray-800 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <img
          src={
            movie?.poster_path
              ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
              : "https://img.freepik.com/premium-photo/flying-popcorn-3d-glasses-film-reel-clapboard-yellow-background-cinema-movie-concept-3d_989822-1302.jpg?semt=ais_hybrid&w=740"
          }
          alt={movie?.title || "Movie Poster"}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-white text-base font-semibold truncate">
            {movie?.title}
          </h3>
          <p className="text-gray-400 text-xs">
            {movie?.release_date?.slice(0, 4)}
          </p>
        </div>
      </div>
    </div>
  );
}
