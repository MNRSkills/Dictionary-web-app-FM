import { useContext, useState, createContext } from "react";

const ThemeContext = createContext();


export function DarkTheme({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);
  const darkThemeToggle = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };
  return (
    <ThemeContext.Provider value={{ darkTheme, darkThemeToggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
