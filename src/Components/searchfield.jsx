import { useTheme } from "../Context/themeContext";

function Search({ wordSearch, setSearch, handleWordSubmit }) {
  const { darkTheme } = useTheme();
  const handleSubmit = async (e) => {
    handleWordSubmit(e);
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-60 rounded-xl relative pl-0 ml-6 mt-6 mr-6"
    >
      <input
        type="text"
        // value={wordSearch}
        value={wordSearch}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search"
        className={` relative w-[327px] h-12  rounded-2xl pl-6 ${
          darkTheme ? "bg-darker text-white" : "bg-white text-dark"
        }`}
      />

      <img
        src="https://cdn.shopify.com/s/files/1/0911/1420/9592/files/icon-search.svg?v=1736039240"
        alt="search"
        className="absolute top-3 right-0 w-4 h-4"
      />
      <input type="submit" />
    </form>
  );
}
export default Search;
