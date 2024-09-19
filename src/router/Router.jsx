import { createBrowserRouter, Navigate } from "react-router-dom";
import { Visualizador, Home, ErrorPage, ParamPage, AdminPage } from "../pages";
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
                element: <ErrorPage /> || <Navigate to="visualizador" />,
            },
            {
                path: "visualizador",
                element: <Visualizador />,
            },
            {
                path: "ParamPage/:paramId",
                element: <ParamPage />,
            },
            {
                path: "admin",
                element: <AdminPage />,
            },
        ],
    },
]);