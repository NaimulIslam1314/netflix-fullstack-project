import { useEffect } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import SearchMovie from "./SearchMovie";

export default function Browse() {
  const user = useSelector((state) => state.app.user);
  const toggle = useSelector((state) => state.movie.toggle);
  const dispatch = useDispatch();
  useNowPlayingMovies(dispatch);
  usePopularMovies(dispatch);
  useTopRatedMovies(dispatch);
  useUpComingMovies(dispatch);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Header />
      <div>
        {toggle ? (
          <SearchMovie />
        ) : (
          <>
            <MainContainer />
            <MovieContainer />
          </>
        )}
      </div>
    </div>
  );
}
