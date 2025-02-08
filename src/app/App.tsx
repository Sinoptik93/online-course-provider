import {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {useTheme} from "shared/config/theme";
import {classNames} from "shared/lib/classNames";

import "./styles/index.scss"


export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <Link to="/">Главная</Link>
            <Link to="/about">О сайте</Link>
            <button onClick={toggleTheme}>Toggle theme</button>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

