import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="container" id="error-page">
            <h1>Oops!</h1>
            <p>Parece que algo salió mal.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <p>
                <a href="/">Volver al inicio</a>
            </p>
        </div>
    );
}