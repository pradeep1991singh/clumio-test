import React, { useState } from "react";

const SearchBox = ({ onSearchKeyChange }) => {
  const [searchKey, setSearchKey] = useState("");

  const handleChange = (event) => {
    setSearchKey(event.target.value);
    onSearchKeyChange({ value: event.target.value, type: "title" });
  };

  return (
    <form className="w-full max-w-sm">
      <div className="flex items-center py-2">
        <button
          className="flex-shrink-0 text-sm dark:text-gray-500 py-2 px-2"
          type="button"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="search"
            className="w-4"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
            ></path>
          </svg>
        </button>
        <input
          className="font-semibold mr-3 py-1 px-2 leading-tight rounded focus:outline-none text-blue-500 dark:bg-gray-900 dark:border-gray-900 placeholder-blue-500"
          type="text"
          placeholder="SEARCH"
          aria-label="Search box"
          value={searchKey}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default SearchBox;
