import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () =>{
        setTheme((prevTheme) => (prevTheme ==="light" ? "dark" : "light"));
    };

    const themeContextValue = {
        theme,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={themeContextValue}>
            {children}
        </ThemeContext.Provider>
    );
};
