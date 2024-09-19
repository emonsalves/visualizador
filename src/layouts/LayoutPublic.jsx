import { Outlet } from "react-router-dom";

export const LayoutPublic = () => {
    return (
        <>
            <h1>Layout Public</h1>
            <Outlet />
        </>
    )
}