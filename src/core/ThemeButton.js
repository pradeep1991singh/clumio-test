import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="transition duration-500 ease-in-out py-2">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="dark:text-gray-500 cursor-pointer rounded px-3 py-1 border"
      >
        Switch to {theme === "dark" ? "light" : "dark"}
      </button>
    </div>
  );
};

export default ThemeButton;
