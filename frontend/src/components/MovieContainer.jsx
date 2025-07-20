import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

export default function MovieContainer() {
  const movies = useSelector((state) => state.movie);
  // console.log(movies);

  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-10">
        <MovieList
          title="Now Playing Movies"
          movies={movies.nowPlayingMovies}
        />
        <MovieList title="Popular Movies" movies={movies.popularMovies} />
        <MovieList title="Top Rated Movies" movies={movies.topRatedMovies} />
        <MovieList title="Upcoming Movies" movies={movies.upComingMovies} />
      </div>
    </div>
  );
}
