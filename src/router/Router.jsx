import { createBrowserRouter } from "react-router-dom";
import { Visualizador, Home, ErrorPage } from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/visualizador",
        element: <Visualizador />,
        errorElement: <ErrorPage />,
    },
]);