import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {

        const langKey = useSelector(store => store.config.lang)

  return (
    <div className="pt-[10%] flex justify-center ">
      <form className="w-1/3 bg-black rounded-lg">
        <input
          type="Text"
          className="p-4 m-4 w-96 bg-slate-500 rounded-lg placeholder-black"
          placeholder={lang[langKey].gptSearchPlaceholder}/>
        <button className="py-4 px-4 bg-red-700 text-black rounded-lg">
        {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
