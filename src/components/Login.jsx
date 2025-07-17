import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useAuthContext} from "../context/AuthContext";
import { dispararAlert } from "../assets/SweetAlert2"; 
import { loginEmailPass } from "../auth/firebase";

function Login() {
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const {login} = useAuthContext();
    const navigate = useNavigate();


    const iniciarSesionEmailPass  = (e) => {
        e.preventDefault();
        loginEmailPass(usuario, password).then((user) => {
            login(usuario);
            navigate('/');
        }).catch((error) => {
            dispararAlert('Credenciales incorrectas', 'Vuelva a intentarlo', 'warning', 'Aceptar');
        })
    };
    return (
        <section>
            <div className="titulo">
                <h2>Iniciar Sesión</h2>
            </div>
            <div className="contenedor__texto" id="form_inicio">
                <form onSubmit={iniciarSesionEmailPass}>
                    <label>Usuario:</label>
                    <input
                        type="text"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                    />
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="boton2">Iniciar sesión</button>
                </form>
            </div>
        </section>
    );
}

export default Login;