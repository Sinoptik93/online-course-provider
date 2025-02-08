import {Link} from "react-router-dom";
import {useTheme} from "shared/config/theme";
import {classNames} from "shared/lib/classNames";

import "./styles/index.scss"
import {AppRouter} from "app/providers/router";


export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <Link to="/">Главная</Link>
            <Link to="/about">О сайте</Link>
            <button onClick={toggleTheme}>Toggle theme</button>
            <AppRouter />
        </div>
    );
};

