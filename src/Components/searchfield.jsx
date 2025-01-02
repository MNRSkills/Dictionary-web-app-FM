import { useState } from "react";
import axios from "axios";

import SearchedWord from "./DisplayWord/searchedWord";
function Search({ wordSearch, setSearch, handleWordSubmit }) {
  const handleSubmit = async (e) => {
    // console.log(e.target.value);
    handleWordSubmit(e);
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="w-60 rounded-xl relative">
      <input
        type="text"
        value={wordSearch}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search"
        className="bg-gray-200"
      />
      <img src="" alt="search" />
      <input type="submit" />
    </form>
  );
}
export default Search;
