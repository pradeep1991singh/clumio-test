import React, { useState } from "react";

const StarRating = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleRateChange = (rating) => {
    setHover(rating);
    onRatingChange(rating);
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={
              index <= (hover || rating)
                ? "text-orange-500"
                : "dark:text-gray-500"
            }
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => handleRateChange(rating)}
          >
            <span className="bg-transparent border-none outline-one cursor-pointer">
              &#9733;
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
