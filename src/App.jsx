import { useState } from "react";
import axios from "axios";
import Search from "./Components/searchfield";
import SearchedWord from "./Components/DisplayWord/searchedWord";
import ToggleBar from "./Components/darkToggle";

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
    <div className="w-96 p-9">
      <ToggleBar />
      <Search
        handleWordSubmit={handleWordSubmit}
        wordSearch={wordSearch}
        setSearch={setSearch}
      />
      {wordSearch ? <SearchedWord data={data} /> : <h3>Loading...</h3>}
    </div>
  );
}

export default App;
