import {ReactNode, useMemo, useState} from "react";
import {defaultTheme, Theme, ThemeContext} from "./ThemeContext";


const ThemeProvider = ({children}: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(() => ({theme, setTheme}), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
