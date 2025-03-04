import { useEffect } from "react";

const HtmlTemplate = ({ title, children }) => {
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
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <title>{title}</title>
        <style>
          {`
            html {
              scroll-behavior: smooth;
            }
            body {
              min-height: 100vh;
            }
          `}
        </style>
      </head>
      <body className="bg-pink-light dark:bg-darkPink-dark text-gray-800 dark:text-pink-light transition-colors duration-300">
        {children}
      </body>
    </html>
  );
};

export default HtmlTemplate;
