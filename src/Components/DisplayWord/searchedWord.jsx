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
          <section key={index}>
            {" "}
            <div className="mt-6 ml-6 mr-6 mb-6">
              <h1 className="text-3xl font-bold font-sans">
                {getNestedData(eachWord, ["word"])}
              </h1>{" "}
              <h3 className="text-purple mt-2">
                {getNestedData(eachWord, ["phonetic"])}
              </h3>
            </div>
            {getNestedData(eachWord, ["meanings"])?.map((meaning, index) => {
              // console.log("THIS IS THE MEANING", means);
              return <Meanings key={index} meaning={meaning} />;
            })}
          </section>
        );
      })}
    </>
  );
}

export default SearchedWord;
