import React from "react";
import { getNestedData } from "../../utils";

function Meanings({ meaning }) {
  // console.log(meaning);
  return (
    <div className="ml-6 mt-6 mr-6">
      <div className="partOfSpeech-wrapper w-[327px] h-[21px] justify-center items-center inline-flex overflow-hidden">
        <h3 className="text-2xl font-bold">{getNestedData(meaning, ["partOfSpeech"])}</h3>
        <span className="h-[.5px] w-[266px] block bg-dark-gray"></span>
      </div>
      <div class="text-[#757575] text-base font-normal font-['Inter']">Meaning</div>
        {getNestedData(meaning, ["definitions"])?.map((def, index) => {
          return (
            <ul key={index.toString()} className="ml-6 marker:text-purple ">
            <li  className="list-disc">
              <p>{def.definition}</p>
            </li>
      </ul>
          );
        })}
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
