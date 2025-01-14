import { useEffect } from "react";
import { useTheme } from "./themeContext";

const ThemeManager = () => {
  const { darkTheme } = useTheme();

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkTheme === true) {
      root.classList.add("bg-darkest");
    } else {
      root.classList.remove("bg-darkest");
    }
  }, [darkTheme]);

  return null; // This component doesn't render anything
};

export default ThemeManager;
