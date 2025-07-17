import React, { createContext, useState, useContext, use } from "react";
import { dispararAlert } from "../assets/SweetAlert2";


//crear el contexto
const AuthContext = createContext();
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [admin, setAdmin] = useState(false);

    const login = (userName) => {
        //simulando la creación de un token
        const token = `fake-token-${userName}`;
        if (userName === 'admin@admin.com') {
            setAdmin(true);
        }
        localStorage.setItem('authToken', token);
        setUser(userName);
    };
    const logout = () => {
        localStorage.removeItem('authToken');
        setUser(null);
        setAdmin(false);
        dispararAlert('Sesión cerrada', 'Ha finalizado la sesión con éxito', 'success', 'Aceptar');
    }

    // Verificar si hay un token en el localStorage al cargar la aplicación

    function verificacionLog() {
        const userToken = localStorage.getItem('authToken');
        console.log(userToken);
        if (userToken && userToken == 'fake-token-admin@admin.com') {
            setAdmin(true);
            setUser('admin@admin.com');
            return;
        }
        if (userToken) {
            setUser(userToken.replace('fake-token-', ''));
            setAdmin(false);
            return;
        }
    }
    
    return (
        <AuthContext.Provider value={{ user, login, logout, admin, verificacionLog }}>
            {children}
        </AuthContext.Provider>
    );
}
export const useAuthContext = () =>  useContext(AuthContext);
