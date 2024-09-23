import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div className="container">
            <h1>Home</h1>
            <p>Esta es la página de inicio de la aplicación.</p>
            <ul>
                <li>Para ver el visualizador, navega a <Link to="/auth/visualizador">Visualizador</Link></li>
                <li>Para ver el ParamPage, navega a <Link to="/auth/ParamPage/123">ParamPage</Link></li>
                <li>Para ver la página de admin, navega a <Link to="/auth/admin">Admin</Link></li>
                <li>Para ver la página de testWorker, navega a <Link to="/auth/Worker">Worker</Link></li>
            </ul>
        </div>
    )
}