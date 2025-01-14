import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Components/searchfield";
import SearchedWord from "./Components/DisplayWord/searchedWord";
import ToggleBar from "./Components/topBar";
import { useTheme } from "./Context/themeContext";
import { getNestedData } from "./utils";

function App() {
  const [wordSearch, setSearch] = useState("keyboard");
  const [data, setData] = useState([]);
  const [errorMsg, setErrorMsg] = useState({});
  const { darkTheme, darkToggleTheme } = useTheme();

  const handleWordSubmit = async () => {
    // console.log("THIS IS APP");
    try {
      await axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordSearch}`)
        .then((response) => {
          setData(response.data);
        });
      // setSearch("");
    } catch (error) {
      if (error.response.data !== null) {
        setErrorMsg(error.response.data);
        console.log("ERROR", error.response);
      } else {
        console.log("THIS ERROR WORD IS EMPTY FILL IN BLANK FIELD");
      }
    }
  };

  useEffect(() => {
    handleWordSubmit();
  }, [wordSearch]);

  return (
    <div className={`w-96  ${darkTheme ? " text-white" : " text-dark"}`}>
      {/* TOP BAR WITH ICON AND THEME TOGGLE */}
      <ToggleBar />

      {/* INPUT FIELD COMPONENT */}
      <div className="pt-5">
        <Search
          handleWordSubmit={handleWordSubmit}
          wordSearch={wordSearch}
          setSearch={setSearch}
          // setError={setErrorMsg}
        />
      </div>

      {/* CONDITIONALLY RENDER THE DEFINITIONS */}
      {wordSearch ? <SearchedWord data={data} /> : <h3>Loading...</h3>}
    </div>
  );
}

export default App;
