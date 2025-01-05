function Search({ wordSearch, setSearch, handleWordSubmit }) {
  const handleSubmit = async (e) => {
    handleWordSubmit(e);
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="w-60 rounded-xl relative pl-0">
      <input
        type="text"
        value={wordSearch}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search"
        className="bg-gray-200"
      />
      <img src="" alt="search" />
      <input type="submit" />
    </form>
  );
}
export default Search;
