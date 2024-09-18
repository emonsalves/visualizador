import { createBrowserRouter } from "react-router-dom";
import { Visualizador1, Visualizador2, Home, ErrorPage } from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/visualizador1",
        element: <Visualizador1 />,
        errorElement: <ErrorPage />,
        redirectTo: "/",
    },
    {
        path: "/visualizador2",
        element: <Visualizador2 />,
        errorElement: <ErrorPage />,
        redirectTo: "/",
    },
]);