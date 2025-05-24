import { useContext, useEffect, useState } from "react";
import Card2 from './Card2';
import '../styles/producto.css'
import { CarritoContext } from "../context/CarritoContext.jsx";

export default function Carrito () {

    const { productosCarrito, vaciarCarrito, borrarProductoCarrito } = useContext(CarritoContext);
    const total = productosCarrito.reduce(
        (acumulador, producto) => acumulador + (producto.precio * producto.cantidad), 0
    );

    function funcionDisparadora(id){
        borrarProductoCarrito(id)
    }
    
    return (
        <div className='productos-container'>
            {productosCarrito.length > 0 ? productosCarrito.map((producto) => (
                <div key={producto.id}>
                    <Card2 product = {producto} funcionDisparadora={funcionDisparadora}/>
                </div>
            )) 
            : <p className="contenedor__texto titulo center">Carrito Vacío</p>}
            {total === 0 ? <></> : <div><p className="total__carrito">Total: ${total.toFixed(2)}</p></div>}             
            {productosCarrito.length > 0 && <div><button onClick={vaciarCarrito} style={{backgroundColor: "#c53211", fontSize:'1.25em' , color:"white"}} title="Vaciar carrito">Vaciar carrito</button></div>}
        </div>
    )
    
}