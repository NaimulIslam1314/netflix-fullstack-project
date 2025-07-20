import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import movieReducer from './movieSlice';
import searchSlice from './searchSlice';

const store = configureStore({
    reducer: {
        app: userSlice,
        movie: movieReducer,
        search: searchSlice,
        open: movieReducer
    }
});
export default store;