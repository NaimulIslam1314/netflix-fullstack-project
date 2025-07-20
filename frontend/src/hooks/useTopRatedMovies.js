import axios from "axios";
import { TopRatedMovies, options } from "../components/utils/constant";
import { getTopRatedMovies } from "../redux/movieSlice";

const useTopRatedMovies = async (dispatch) => {
    try {
        const res = await axios.get(`${TopRatedMovies}`, options);
        dispatch(getTopRatedMovies(res.data.results));
        console.log(res);
    } catch (error) {
        console.error("Error fetching top rated movies:", error);
    }
};
export default useTopRatedMovies;