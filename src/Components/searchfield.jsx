import { useState } from "react";
import axios from "axios";

function Search() {
  const [wordSearch, setSearch] = useState("");

  const handleSubmit = async (e) => {
    // console.log("SUBMITTING SEARCH", wordSearch);
    try {
      axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordSearch}`)
        .then((response) => console.log(response));
    } catch (error) {
      console.log(error);
      
    }
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className='w-60 rounded-xl relative'>
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
