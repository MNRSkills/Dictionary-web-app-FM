import { useState } from "react";
import Search from "./Components/searchfield";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Search />
    </>
  );
}

export default App;
