import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="md:fixed absolute -z-10">
        <img className="" src={BG_URL} alt="background" />
      </div>
      <div className="md:p-0  pt-[10%] ">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
