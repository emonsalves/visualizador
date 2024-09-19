import { Outlet } from "react-router-dom";

export const LayoutPrivate = () => {
    return (
        <div>
            <h1>Layout Two</h1>
            <Outlet />
        </div>
    )
}