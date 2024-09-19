import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div className="container">
            <h1>Home</h1>
            <p>Esta es la página de inicio</p>
            <p>Para ver el visualizador, navega a </p>
            <Link to="/auth/visualizador">Visualizador</Link>
            <p>Para ver el ParamPage, navega a </p>
            <Link to="/auth/ParamPage/123">ParamPage</Link>
            <p>Para ver la página de admin, navega a </p>
            <Link to="/auth/admin">Admin</Link>
        </div>
    )
}