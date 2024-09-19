import { Link } from 'react-router-dom';
import { useAuthorize } from '../hooks';

export const AdminPage = () => {
    const { isAuthorized, isAuthenticated } = useAuthorize(['admin']);

    if (!isAuthenticated) {
        return <div>Debes iniciar sesión para ver esta página.</div>;
    }

    if (!isAuthorized) {
        return <div>No tienes permisos para ver esta página.</div>;
    }

    return (
        <div>
            <h1>Panel de administración</h1>
            <p>Bienvenido, administrador.</p>
            <Link to="/">Volver al inicio</Link>
        </div>
    );
};