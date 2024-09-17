import { createBrowserRouter } from "react-router-dom";
import { Visualizador, Home } from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/visualizador",
        element: <Visualizador />,
    },
]);