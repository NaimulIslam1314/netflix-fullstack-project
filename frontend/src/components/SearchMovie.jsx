import axios from "axios";
import { useState } from "react";
import { options, searchMovieUrl } from "./utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setSearchMovieDetails } from "../redux/searchSlice";
import { setLoading } from "../redux/userSlice";
import MovieList from "./MovieList";

export default function SearchMovie() {
  const [searchedMovie, setSearchMovie] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.app.isLoading);
  const { movieName, searchMovie } = useSelector((state) => state.search);
  console.log(movieName, searchMovie);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    try {
      const res = await axios.get(
        `${searchMovieUrl}?query=${searchedMovie}`,
        options
      );

      dispatch(
        setSearchMovieDetails({
          movieName: searchedMovie,
          searchMovie: res.data.results,
        })
      );
      console.log(res.data.results);
    } catch (error) {
      console.error("Error in search handler:", error);
    } finally {
      setSearchMovie("");
      dispatch(setLoading(false));
    }
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-[60vh] pt-[10%] w-[100%] bg-opacity-70">
        <form
          onSubmit={submitHandler}
          className="flex flex-col md:flex-row items-center gap-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-2xl"
        >
          <input
            type="text"
            value={searchedMovie}
            onChange={(e) => setSearchMovie(e.target.value)}
            required
            placeholder="Search for a movie..."
            className="p-3 rounded-lg bg-gray-800 text-white w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white px-6 py-3 rounded-lg font-semibold shadow-lg text-lg"
            type="submit"
          >
            {isLoading ? <span className="animate-spin">🔄</span> : "Search"}
          </button>
        </form>
      </div>
      {searchMovie.length > 0 ? (
        <MovieList searchMovie={true} title={movieName} movies={searchMovie} />
      ) : (
        <div className="flex items-center justify-center min-h-[60vh]">
          <p className="text-gray-400 text-lg">No search results found.</p>
        </div>
      )}
    </>
  );
}
