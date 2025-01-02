import { useState } from "react";

function SearchedWord({ data }) {
  const [defanition, setDef] = useState([]);

  console.log(data);
  return (
    <>
      <h1>{data[0].word}</h1>
      {/* <h1>{data[0].word}</h1>
        <h3>{data[0].phonetic}</h3>

        {data[0].meanings.map((define, index) => {
          return setDef(define);
        })} */}
    </>
  );
}

export default SearchedWord;
