import { useState } from "react";
import axios from "axios";
import Search from "./Components/searchfield";
import SearchedWord from "./Components/DisplayWord/searchedWord";
import ToggleBar from "./Components/topBar";
import { useTheme } from "./Context/themeContext";

function App() {
  const [wordSearch, setSearch] = useState("keyboard");
  const [data, setData] = useState([]);
  const { darkTheme, darkToggleTheme } = useTheme();

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
    <div className={`screen w-96 p-9 ${darkTheme ? "bg-darkest text-white" : "bg-white text-dark"}`}>
      {/* TOP BAR WITH ICON AND THEME TOGGLE */}
      <ToggleBar />
      {/* INPUT FIELD COMPONENT */}
      <Search
        handleWordSubmit={handleWordSubmit}
        wordSearch={wordSearch}
        setSearch={setSearch}
      />

      {/* CONDITIONALLY RENDER THE DEFINITIONS */}
      {wordSearch ? <SearchedWord data={data} /> : <h3>Loading...</h3>}
    </div>
  );
}

export default App;
