import axios from "axios";
import { NowPlayingMovies, options } from "../components/utils/constant";
import { getNowPlayingMovies } from "../redux/movieSlice";

const useNowPlayingMovies = async (dispatch) => {
    try {
        const res = await axios.get(`${NowPlayingMovies}`, options);
        dispatch(getNowPlayingMovies(res.data.results));
        console.log(res);
    } catch (error) {
        console.error("Error fetching now playing movies:", error);
    }
};
export default useNowPlayingMovies;