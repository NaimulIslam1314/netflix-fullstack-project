import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upComingMovies: null,
        toggle: false,
        trailerMovie: null,
        open: false,
        movieId: null
    },
    reducers: {
        getNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        getPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        getTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        getUpComingMovies: (state, action) => {
            state.upComingMovies = action.payload;
        },
        setToggle: (state) => {
            state.toggle = !state.toggle;

        },
        getTrailerMovie: (state, action) => {
            state.trailerMovie = action.payload;
        },
        setOpen: (state, action) => {
            state.open = action.payload;
        },
        setMovieId: (state, action) => {
            state.movieId = action.payload;
        }
    }
});
export const { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpComingMovies, setToggle, getTrailerMovie, setOpen, setMovieId } = movieSlice.actions;
export default movieSlice.reducer;