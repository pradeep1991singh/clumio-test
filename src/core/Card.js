import React from "react";

const Card = ({ title, posterPath, genreList, releaseYear }) => {
  return (
    <div className="max-w-sm overflow-hidden">
      <img className="w-full" src={posterPath} alt="Card" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-blue-500">{title}</div>
        <p className="text-gray-700 text-base dark:text-gray-500">
          {genreList}, {releaseYear}
        </p>
      </div>
    </div>
  );
};

export default Card;
