import {RouteProps} from "react-router-dom";
import {RoutePaths, AppRoutes} from "shared/config/route"
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths.main,
        element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePaths.about,
        element: <AboutPage />
    }
}
