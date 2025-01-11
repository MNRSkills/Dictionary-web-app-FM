import React from "react";
import { getNestedData } from "../../utils";

function Meanings({ meaning }) {
  console.log(meaning);
  return (
    <div className="ml-6 mt-6 mr-6">
      <div className="partOfSpeech-wrapper w-[327px] h-[21px] justify-center align-center inline-flex overflow-hidden">
        <h3 className="text-2xl font-bold">{getNestedData(meaning, ["partOfSpeech"])}</h3>
        <span className="h-[.5px] w-[266px] block bg-dark-gray"></span>
      </div>
      <h1 className="text-4xl font-mono font-bold text-light-gray">Meaning</h1>
      <ul className="ml-6">
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
