import { createSlice } from "@reduxjs/toolkit";
const searchSlice = createSlice({
    name: "search",
    initialState: {
        movieName: null,
        searchMovie: null,

    },
    reducers: {
        setSearchMovieDetails: (state, action) => {
            state.movieName = action.payload.movieName;
            state.searchMovie = action.payload.searchMovie;
        },

    }
});
export const { setSearchMovieDetails } = searchSlice.actions;
export default searchSlice.reducer;