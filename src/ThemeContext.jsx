import { createContext } from "react";

const initialState = {
    button: {
        primary: 'blue',
        secondary: 'white',
    },
    text: {
        primary: 'red',
        secondary: 'white',
    }
}

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    return (
        <ThemeContext.Provider value={initialState}>
            { children }
        </ThemeContext.Provider>
    )
}