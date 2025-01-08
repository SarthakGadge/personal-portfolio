import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark" || false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <>
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`flex justify-start ${
          isDarkMode ? "text-white" : "text-white"
        } `}
      >
        {isDarkMode ? (
          <FaMoon className="w-5 h-5" />
        ) : (
          <FaSun className="w-5 h-5" />
        )}
      </button>
    </>
  );
};
