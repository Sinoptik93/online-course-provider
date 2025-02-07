import {defaultTheme, Theme, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

interface UseThemeResult {
    theme: Theme,
    toggleTheme: () => void;
}

const useTheme = (): UseThemeResult => {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        if (setTheme) {
            const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
            setTheme(newTheme);
            localStorage.setItem("theme", newTheme);
        }
    }

    return {
        theme: theme ?? defaultTheme,
        toggleTheme
    }
}

export default useTheme;
