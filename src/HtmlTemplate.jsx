import { useEffect } from "react";

const HtmlTemplate = ({ children, title }) => {
  useEffect(() => {
    const theme = (() => {
      if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
        return localStorage.getItem("theme");
      }
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
      return "light";
    })();

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    window.localStorage.setItem("theme", theme);
  }, []);

  return (
    <div className="bg-pink-light dark:bg-darkPink-dark text-gray-800 dark:text-pink-light transition-colors duration-300">
      {children}
    </div>
  );
};

export default HtmlTemplate;
