import React, { createContext, useEffect, useState } from "react";

const getInitTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const prefs = window.localStorage.getItem("color-theme");
    if (typeof prefs === "string") {
      return prefs;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }

  return "light";
};

export const ThemeContext = createContext("light");

export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState(getInitTheme);

  const storeTheme = (rawTheme) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(rawTheme);

    localStorage.setItem("color-theme", rawTheme);
  };

  if (initialTheme) {
    storeTheme(initialTheme);
  }

  useEffect(() => {
    storeTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
