import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openAi";


const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  
  const handleGptSearchClick = async () => {
  console.log(searchText.current.value);
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the quesry : " +
      searchText.current.value +
      " . only give me name of some movies, in bullet points or comma separated.";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices);
    
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
