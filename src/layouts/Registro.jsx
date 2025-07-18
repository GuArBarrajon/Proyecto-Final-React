import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { dispararAlert } from "../assets/SweetAlert2";
import { crearUsuario } from "../auth/firebase"; 
import {useAuthContext} from "../context/AuthContext";

function Registrarse() {
  const [email, setEmail] = useState(""); // Cambiamos 'usuario' a 'email' para Firebase
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Nuevo campo para confirmar contraseña

  const navigate = useNavigate();

  const {login} = useAuthContext();

  const handleSubmit = async (e) => { // Hacemos la función asíncrona
    e.preventDefault();

    if (password !== confirmPassword) {
      dispararAlert('Las contraseñas no coinciden', 'Por favor, verifique que ambas contraseñas sean iguales.', 'error', 'Aceptar');
      return;
    }

    try {
      // Llamamos a la función crearUsuario de Firebase
      await crearUsuario(email, password);
      dispararAlert('Registro exitoso', '¡Su cuenta ha sido creada!', 'success', 'Aceptar');
      login(email);
      navigate('/'); 
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
      let errorMessage = "Ocurrió un error al intentar registrarlo.";

      // Mensajes de error específicos de Firebase 
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'El correo electrónico ya está en uso. Intente iniciar sesión o use otro correo.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'El formato del correo electrónico no es válido.';
          break;
        case 'auth/weak-password':
          errorMessage = 'La contraseña es demasiado débil. Debe tener al menos 6 caracteres.';
          break;
        default:
          errorMessage = error.message; // Muestra el mensaje de error de Firebase por defecto
      }

      dispararAlert('Error de registro', errorMessage, 'error', 'Aceptar');
    }
  };

  return (
    <section>
      <div className="titulo">
        <h2>Registrarse</h2>
      </div>
      <div className="contenedor__texto" id="form_registro"> {/* Cambié el ID */}
        <form onSubmit={handleSubmit}>
          <label>Email:</label> {/* Cambié 'Usuario' a 'Email' */}
          <input
            type="email" // Cambié a tipo email para validación básica del navegador
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required // Añadí el atributo required
          />
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="6" // Firebase requiere mínimo 6 caracteres para la contraseña
          />
          <label>Confirmar Contraseña:</label> 
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className="boton2">Registrarse</button>
        </form>
      </div>
    </section>
  );
}

export default Registrarse;