import "./app.scss"
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.lazy";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.lazy";
import {Suspense} from "react";


export const App = () => {
    return (
        <div className="app">
            <Link to="/">Главная</Link>
            <Link to="/about">О сайте</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPageAsync/>}/>
                    <Route path="/about" element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

