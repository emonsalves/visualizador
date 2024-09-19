import { Outlet } from "react-router-dom";

export const LayoutPublic = () => {
    return (
        <div>
            <h1>Layout One</h1>
            <Outlet />
        </div>
    )
}