import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { useAuthContext } from "../context/AuthContext";
function Header() {
    const { productosCarrito , vaciarCarrito} = useContext(CarritoContext);
    const { user, logout, admin } = useAuthContext();

    //funcion para manejar el cierre de sesión
    const handleLogout = () => {
        vaciarCarrito();
        logout();
    };

    return (

        <header id="header1">
            <img src="../images/diamante.png" className="logo__img" alt="Logo_presentación" height="70px" width="70px"></img>
            <h1 className="logo">Gemas y joyas</h1>
            <div className="header__links">
                
                {user ? (
                    admin ? (
                        <Link to="/admin" className="header__link">Administrador</Link>
                    ) : (
                        <span className="header__link">{user}</span> // Muestra solo el nombre del usuario
                    )
                ) : null}
                {user ? <Link to="/login" className="header__link" onClick={handleLogout}>Cerrar Sesión</Link> : null}
                {!user ? <Link to="/login" className="header__link">Iniciar Sesión</Link> : null}
                {!user ? <Link to="/registrarse" className="header__link">Registrarse</Link> : null}
                {user ? <Link to="/carrito" className="header__link"><FaCartPlus/><span style={{marginLeft: "0.5em"}}>{productosCarrito.length > 0 ? productosCarrito.length : ""}</span></Link>: null}

            </div>
        </header>
    );
}

export default Header;