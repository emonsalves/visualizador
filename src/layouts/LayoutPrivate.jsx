import { Outlet } from "react-router-dom";

export const LayoutPrivate = () => {
    return (
        <>
            <h1>Layout Private</h1>
            <Outlet />
        </>
    )
}