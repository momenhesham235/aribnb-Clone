import React from "react";
import { SearchIcon } from "@heroicons/react/solid";
const SearchBar = () => {
  return (
    <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm px-2">
      <input
        type="text"
        placeholder="Start your search"
        className="text-sm text-gray-600 placeholder-gray-400 flex-grow pl-5 bg-transparent outline-none caret-red-400"
      />
      <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer" />
    </div>
  );
};

export default SearchBar;
