import { useContext, useState } from "react";
import { createContext } from "vm";

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light")

    return <ThemeContext.Provider value={
        {
            theme,
            toggleTheme: () => setTheme(theme === "light" ? "dark": "light")
        }
    }>
        {children}</ThemeContext.Provider>
};

const ThemeContext = createContext(undefined);

export const useTheme = () => useContext(ThemeContext);
