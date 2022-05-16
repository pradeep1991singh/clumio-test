import React from "react";
import { Link } from "react-router-dom";

const NavigationItem = ({ name, path }) => {
  return (
    <Link
      className="font-semibold block mt-4 lg:inline-block lg:mt-0 mr-4 text-blue-500"
      to={path}
    >
      {name}
    </Link>
  );
};

export default NavigationItem;
