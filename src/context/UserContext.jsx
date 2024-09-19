import { createContext, useState, useEffect } from 'react';

// Creamos el UserContext
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Simulamos una autenticación con roles al cargar la aplicación
    useEffect(() => {
        // Supongamos que hacemos un fetch o alguna verificación de autenticación aquí
        const fetchUser = async () => {
            // Aquí simulas una llamada API o puedes integrar alguna librería de autenticación.
            const fakeUser = {
                username: 'john.doe',
                roles: ['admin', 'editor'], // Los roles del usuario
            };
            // Simular retardo de carga
            setTimeout(() => {
                setUser(fakeUser); // Establecemos el usuario después de "autenticarse"
            }, 1000); // Simulamos una demora en la carga de datos
        };

        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    );
};