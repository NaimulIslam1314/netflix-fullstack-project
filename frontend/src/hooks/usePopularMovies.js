import axios from "axios";
import { PopularMovies, options } from "../components/utils/constant";
import { getPopularMovies } from "../redux/movieSlice";

const usePopularMovies = async (dispatch) => {
    try {
        const res = await axios.get(`${PopularMovies}`, options);
        dispatch(getPopularMovies(res.data.results));
        console.log(res);
    } catch (error) {
        console.error("Error fetching popular movies:", error);
    }
};
export default usePopularMovies;