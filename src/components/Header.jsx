import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
function Header({ user, admin}) {
    const { productosCarrito } = useContext(CarritoContext);

    return (

        <header id="header1">
            <img src="/src/assets/images/diamante.png" className="logo__img" alt="Logo_presentación" height="70px" width="70px"></img>
            <h1 className="logo">Gemas y joyas</h1>
            <div className="header__links">
                
                {admin ? <Link to="/admin" className="header__link">Administrador</Link> : null}
                <Link to="/login" className="header__link">Login</Link>
                {user || admin ? <Link to="/carrito" className="header__link"><FaCartPlus/><span style={{marginLeft: "0.5em"}}>{productosCarrito.length > 0 ? productosCarrito.length : ""}</span></Link>: null}
            
            </div>
        </header>
    );
}

export default Header;