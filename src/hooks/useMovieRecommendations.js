import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"; // Assuming your API key and options are here
import { addMovies } from "../utils/moviesSlice"; // Action to store movies in Redux

const useMovieRecommendations = () => {
  const dispatch = useDispatch();

  const getMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addMovies(json.results)); // Dispatch movies to Redux store
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []); // Fetch movies on component mount
};

export default useMovieRecommendations;
