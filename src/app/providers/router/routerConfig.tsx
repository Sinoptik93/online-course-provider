import { RouteProps } from 'react-router-dom';
import { routePaths, AppRoutes } from 'shared/config/route';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: routePaths.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: routePaths.about,
        element: <AboutPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: routePaths.notFound,
        element: <NotFoundPage />,
    },
};
