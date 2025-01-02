import { useState } from "react";
import { getNestedData } from "../../utils";
import Meanings from "./meanings";

function SearchedWord({ data }) {
  const [definition, setDef] = useState([]);
  if (!data || data.length === 0) return <p>No data available</p>;

  return (
    <>
      {data.map((eachWord, index) => {
        return (
          <div key={index}>
            {" "}
            <h1>{getNestedData(eachWord, ["word"])}</h1>{" "}
            <h3>{getNestedData(eachWord, ["phonetic"])}</h3>
            {getNestedData(eachWord, ["meanings"])?.map((meaning, index) => {
              // console.log("THIS IS THE MEANING", means);
              return <Meanings key={index} meaning={meaning} />;
            })}
          </div>
        );
      })}
    </>
  );
}

export default SearchedWord;
