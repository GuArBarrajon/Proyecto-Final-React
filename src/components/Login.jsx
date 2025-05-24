import "../styles/login.css"
export default function Login({setLogueadoUser, setLogueadoAdmin, user, admin}) {
    
    return ( 
        <section>
            <div class="titulo">
                <h2>Iniciar Sesión</h2>
            </div>
            <div className="login contenedor__texto"> 
                <button className="boton1" onClick={setLogueadoUser}>Usuario {!user ? "Iniciar Sesión" : "Cerrar Sesión"}</button>
                <button className="boton3" onClick={setLogueadoAdmin}>Admin {!admin ? "Iniciar Sesión" : "Cerrar Sesión"}</button>
            </div> 
        </section>
    ); 
}