import axios from "axios";
import { UpComingMovies, options } from "../components/utils/constant";
import { getUpComingMovies } from "../redux/movieSlice";

const useUpComingMovies = async (dispatch) => {
    try {
        const res = await axios.get(`${UpComingMovies}`, options);
        dispatch(getUpComingMovies(res.data.results));
        console.log(res);
    } catch (error) {
        console.error("Error fetching upcoming movies:", error);
    }
};
export default useUpComingMovies;