
import { movieVideoUrl, options } from '../components/utils/constant';
import axios from 'axios';
import { getTrailerMovie } from '../redux/movieSlice';
import { useEffect } from 'react';

const useMovieById = (id, dispatch) => {
    useEffect(() => {
        const getMovieById = async () => {
            try {
                const res = await axios.get(`${movieVideoUrl}/${id}/videos`, options);
                console.log(res);
                const trailer = res?.data?.results?.filter((item) => item.type === "Trailer");
                dispatch(getTrailerMovie(trailer.length > 0 ? trailer[0] : res.data.results[0]));
            } catch (error) {
                console.error("Error fetching movie by ID:", error);
            }
        }
        getMovieById(id);


    }, [id, dispatch])


}

export default useMovieById;
