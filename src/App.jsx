import { useState } from "react";
import axios from "axios";
import Search from "./Components/searchfield";
import SearchedWord from "./Components/DisplayWord/searchedWord";

function App() {
  const [wordSearch, setSearch] = useState("");
  const [data, setData] = useState([]);

  const handleWordSubmit = async () => {
    // console.log("THIS IS APP");
    try {
      await axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordSearch}`)
        .then((response) => setData(response.data));
      // setSearch("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline font-mono">Hello world!</h1>
      <Search
        handleWordSubmit={handleWordSubmit}
        wordSearch={wordSearch}
        setSearch={setSearch}
      />
      {wordSearch ? <SearchedWord data={data} /> : <h3>Loading...</h3>}
    </>
  );
}

export default App;
