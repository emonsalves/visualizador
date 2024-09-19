import { createBrowserRouter } from "react-router-dom";
import { Visualizador, Home, ErrorPage, Test } from "../pages";
import { LayoutPublic, LayoutPrivate } from "../layouts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
    {
        path: "/auth/",
        element: <LayoutPrivate />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                path: "visualizador",
                element: <Visualizador />,
            },
            {
                path: "tester/:testerId",
                element: <Test />,
            },
        ],
    },
]);