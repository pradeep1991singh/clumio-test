import React, { useState, useCallback } from "react";
import moment from "moment";
import { isEmpty } from "lodash";

import Select from "../core/Select";
import StarRating from "../core/StarRating";
import ThemeButton from "../core/ThemeButton";
import { useGetGenreList } from "../data/hooks/genres";
import { generatePastYear } from "../services/utils";

const showOptions = [
  { id: "movie", name: "Movie" },
  { id: "tv", name: "TV" },
];

// const yearNow = new Date().getFullYear();
const yearsOptions = generatePastYear(20);

const Sidebar = ({ onFilterChange }) => {
  const { data } = useGetGenreList();
  // const [yearRange, setYearRange] = useState([yearNow, yearNow]); // todo: fix this

  const handleChange = (event) => {
    const value = event.target.value;
    const type = event.target.getAttribute("name");
    setFilter({ value, type });
  };

  // const handleYearRange = (event) => {
  //   let value = event.target.value;
  //   const type = event.target.getAttribute("name");
  //   if (type === "releaseYearStart") {
  //     yearRange[0] = value;
  //   } else {
  //     yearRange[1] = value;
  //   }
  //   value = yearRange.join("-");
  //   setYearRange(yearRange);
  //   setFilter({ value, type: "releaseYear" });
  // };

  const getGenreNames = () => {
    return !isEmpty(data) ? Object.values(data) : [];
  };

  const setFilter = useCallback(
    ({ value, type }) => {
      onFilterChange({ value, type });
    },
    [onFilterChange]
  );

  return (
    <aside
      className="sidebar w-1/3 py-8 px-5 border-l border-black shadow-outer h-screen"
      aria-label="Sidebar"
    >
      <>
        <div className="flex items-center flex-shrink-0 dark:text-white">
          <span className="font-semibold text-l tracking-tight dark:text-gray-500">
            DISCOVER OPTIONS
          </span>
        </div>
        <div className="overflow-y-auto py-4 rounded dark:bg-gray-900">
          <ul className="space-y-2">
            <li>
              <div className="inline-block relative">
                <Select
                  label="Genre"
                  options={getGenreNames()}
                  name="genreList"
                  onChange={handleChange}
                />
              </div>
            </li>
            <li>
              <div className="inline-block relative">
                <Select
                  label="Type"
                  options={showOptions}
                  name="type"
                  onChange={handleChange}
                />
              </div>
            </li>
            <li>
              <div className="inline-block relative">
                <label className="block dark:bg-gray-900 dark:text-gray-500">
                  Year
                </label>
                <Select
                  label="Start Year"
                  options={yearsOptions}
                  name="releaseYear"
                  onChange={handleChange}
                />
                {/* <Select
                  label="Start Year"
                  options={yearsOptions}
                  name="releaseYearStart"
                  onChange={handleChange}
                /> */}
                {/* <Select
                  label="End Year"
                  options={yearsOptions}
                  name="releaseYearEnd"
                  onChange={handleYearRange}
                /> */}
                {/* <input
                  className="block dark:bg-gray-900 dark:text-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow focus:outline-none focus:shadow-outline w-56 dark:placeholder-white"
                  type="date"
                  min="1990-01-01"
                  max="2022-12-31"
                  name="releaseYear"
                  onChange={handleChange}
                  value={dateValue["start"]}
                />
                <input
                  className="block dark:bg-gray-900 dark:text-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow focus:outline-none focus:shadow-outline w-56 dark:placeholder-white"
                  type="date"
                  min="1990-01-01"
                  max="2022-12-31"
                  name="releaseYear"
                  onChange={handleChange}
                  value={dateValue["end"]}
                /> */}
              </div>
            </li>
          </ul>
        </div>
        <StarRating
          onRatingChange={(value) => setFilter({ value, type: "vote_average" })}
        />
      </>
      <div className="mt-10">
        <ThemeButton />
      </div>
    </aside>
  );
};

export default Sidebar;
