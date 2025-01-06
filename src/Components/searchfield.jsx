function Search({ wordSearch, setSearch, handleWordSubmit }) {
  const handleSubmit = async (e) => {
    handleWordSubmit(e);
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="w-60 rounded-xl relative pl-0">
      <input
        type="text"
        // value={wordSearch}
        value="keyboard"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search"
        className="bg-gray-200 relative"
      />
      <img
        src="https://cdn.shopify.com/s/files/1/0911/1420/9592/files/icon-search.svg?v=1736039240"
        alt="search"
        className="absolute top-0 left-0"
      />
      <input type="submit" />
    </form>
  );
}
export default Search;
