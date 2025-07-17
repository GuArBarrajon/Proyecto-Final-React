import { useContext, useEffect, useState } from "react";
import Card2 from './Card2';
import '../styles/producto.css'
import { CarritoContext } from "../context/CarritoContext.jsx";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext.jsx";
import { dispararAlert } from "../assets/SweetAlert2.js";

export default function Carrito () {
    const { user, cargandoAuth } = useAuthContext();
    const { productosCarrito, vaciarCarrito, borrarProductoCarrito } = useContext(CarritoContext);
    const total = productosCarrito.reduce(
        (acumulador, producto) => acumulador + (producto.precio * producto.cantidad), 0
    );

    function funcionDisparadora(id){
        borrarProductoCarrito(id)
    }

    if (cargandoAuth) {
        return null; // o un spinner
    }

    if (!user){
        return (
            <Navigate to="/login" replace />
        )
    }

    function realizarCompra(){
        dispararAlert('Compra realizada con éxito', 'Gracias por su compra', 'success', 'Aceptar');
        vaciarCarrito();
    }
    
    return (
        <div className='productos-container' >
            {productosCarrito.length > 0 ? productosCarrito.map((producto) => (
                <div key={producto.id}>
                    <Card2 product = {producto} funcionDisparadora={funcionDisparadora}/>
                </div>
            )) 
            : <p className="contenedor__texto titulo center" >Carrito Vacío</p>}
            {total === 0 ? <></> : <div><p className="total__carrito">Total: ${total.toFixed(2)}</p></div>}             
            {productosCarrito.length > 0 &&
                <div>
                    <button className="boton2" onClick={realizarCompra} style={{backgroundColor: "#342474ff", fontSize:'1.25em' , color:"white", marginRight: '1em' }} title="Volver">Comprar</button>
                    <button className="boton2" onClick={vaciarCarrito} style={{backgroundColor: "#c53211", fontSize:'1.25em' , color:"white"}} title="Vaciar carrito">Vaciar carrito</button>
                </div>
            }
        </div>
    )
    
}