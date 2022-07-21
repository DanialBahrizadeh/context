import { createContext, useState, useContext } from "react";

const DarkThemeContext = createContext();

export function useDarkThemeContext() {
  return useContext(DarkThemeContext);
}

export function DarkThemeContextProvider({ children }) {
  const [darkmode, setDarkmode] = useState(false);

  function toggleDark() {
    setDarkmode((preValue) => !preValue);
  }

  return (
    <DarkThemeContext.Provider value={[darkmode, toggleDark]}>
      {children}
    </DarkThemeContext.Provider>
  );
}
