import React from "react";

const Theme = ({ children }) => {
  return (
    <main className="bg-white dark:bg-gray-900 transition-all">{children}</main>
  );
};

export default Theme;
