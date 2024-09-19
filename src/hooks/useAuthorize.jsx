import { useContext } from 'react';
import { UserContext } from '../context';

export const useAuthorize = (requiredRoles) => {
    const { user } = useContext(UserContext); // Accedemos al contexto de usuario.

    // Verificamos si el usuario está autenticado
    const isAuthenticated = !!user;// !!user es equivalente a user ? true : false

    // Verificamos si el usuario tiene los roles requeridos
    const isAuthorized = isAuthenticated && requiredRoles.some(role => user.roles.includes(role));

    return { isAuthenticated, isAuthorized };
};