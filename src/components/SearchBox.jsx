const SearchBox = () => {
  return (
    <div className="p-2 w-fit m-auto flex space-x-3">
      <input
        className="w-[56vw] pl-2 border border-gray-300 rounded-lg shadow-sm font-medium text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
        type="search"
        placeholder="Search..."
      />
      <button className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm transition duration-300 ease-out">
        Search
      </button>
    </div>
  );
};

export default SearchBox;
