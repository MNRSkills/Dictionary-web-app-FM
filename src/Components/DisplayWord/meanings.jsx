import React from "react";
import { getNestedData } from "../../utils";

function Meanings({ meaning }) {
  console.log(meaning);
  return (
    <div>
      <div className="partOfSpeech-wrapper flex justify-center align-center">
        <h3 className="text-2xl">{getNestedData(meaning, ["partOfSpeech"])}</h3>
        <span className="h-1 w-full block bg-dark-gray"></span>
      </div>
      <h1 className="text-4xl font-mono font-bold text-light-gray">Meaning</h1>
      <ul>
        {getNestedData(meaning, ["definitions"])?.map((def, index) => {
          return (
            <li key={index} className="list-disc">
              <p>{def.definition}</p>
            </li>
          );
        })}
      </ul>
      <ul className="flex ">
        {getNestedData(meaning, ["synonyms"])?.map((synoym, index) => {
          console.log(synoym);
          return <li>{synoym}</li>;
        })}
      </ul>
    </div>
  );
}

export default Meanings;
