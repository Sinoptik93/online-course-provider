import "./styles/index.scss"
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.lazy";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.lazy";
import {Suspense} from "react";
import useTheme from "./theme/useTheme";


export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <Link to="/">Главная</Link>
            <Link to="/about">О сайте</Link>
            <button onClick={toggleTheme}>Toggle theme</button>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPageAsync/>}/>
                    <Route path="/about" element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

