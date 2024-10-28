import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = (await data).json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      " . only give me name of some movies, in bullet points or comma separated.";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      //TODO: Write Error Handling
    }
    console.log(gptResults.choices?.[0]?.message.content);

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(addGptMovieResult({movieNames:gptMovies, movieResults: tmdbResults}));
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
