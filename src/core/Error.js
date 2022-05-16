import React from "react";

const Error = ({ message }) => {
  return (
    <div className="block dark:bg-gray-900 dark:text-gray-500 p-10">
      {message}
    </div>
  );
};

export default Error;
