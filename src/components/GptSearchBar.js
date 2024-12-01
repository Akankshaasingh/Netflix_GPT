import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import huggingface from "../utils/hf";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          movie
        )}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );

      if (!response.ok) {
        throw new Error(`TMDB API Error: ${response.statusText}`);
      }

      const json = await response.json();
      return json.results || [];
    } catch (error) {
      console.error("Error fetching from TMDB:", error);
      return [];
    }
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const query =
  "You are a Movie Recommendation system. Based on the query, suggest a list of movies in bullet points. The list should include only the names of the movies, excluding any stars (*) or movie years. The query is: " +
  searchText.current.value +
  ". Please provide the movie names without any additional commentary or details.";


    const result = await huggingface.textGeneration({
      model: "Qwen/QwQ-32B-Preview", // Specify the model
      inputs: query, // Input prompt
      parameters: {
        temperature: 0.7, // Add temperature (adjust as needed)
      },
    });

    console.log(result.generated_text);

    // Processing the output to extract movie names
    const gptMovies = result.generated_text
      .split("\n") // Split text into lines
      .filter((line) => line.startsWith("-")) // Keep only lines starting with a bullet point
      .map((line) => line.replace("- ", "").trim()); // Remove the bullet point and trim whitespace

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center ">
      <form
        className="w-1/3 bg-black rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="Text"
          className="p-4 m-4 w-96 bg-slate-500 rounded-lg placeholder-black"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-4 px-4 bg-red-700 text-black rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
