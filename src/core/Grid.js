import React from "react";
import Card from "./Card";

const Grid = ({ items }) => {
  return (
    <div className="dark:bg-gray-900 p-10 grid gap-10 grid-cols-4">
      {items.map((item) => (
        <div key={item.id}>
          <Card {...item} />
        </div>
      ))}
      {!items.length && (
        <span className="font-semibold text-xl tracking-tight dark:text-gray-300">
          No Result found!
        </span>
      )}
    </div>
  );
};

export default Grid;
