import '../styles/producto.css'
import { useEffect, useState, useContext } from "react";
import {  useParams } from "react-router-dom";
import { dispararAlert } from "../assets/SweetAlert2";  
import { FaCartPlus } from "react-icons/fa";
import { CarritoContext } from "../context/CarritoContext";
import { useAuthContext } from "../context/AuthContext";
import { useProductosContext } from '../context/ProductosContext';

function ProductoDetalle () {
    const { user } = useAuthContext();
    const { agregarAlCarrito } = useContext(CarritoContext);
    const { productoEncontrado, obtenerProducto } = useProductosContext();

    const {id} = useParams();
    const [cantidad, setCantidad] = useState(1);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        obtenerProducto(id).then(() => {
        setCargando(false);
        }).catch((error) => {
        if(error == "Producto no encontrado"){
            setError("Producto no encontrado")
        }
        if(error == "Hubo un error al obtener el producto."){
            setError("Hubo un error al obtener el producto.");
        }
        setCargando(false);
        })
    }, [id]);

    function funcionCarrito (){
        if(!user) dispararAlert('No inició sesión', 'Debe iniciar sesión para agregar productos al carrito', 'warning', 'Iniciar Sesión', '/login');
        else if(cantidad < 1) return;
        else{
            agregarAlCarrito({...productoEncontrado, cantidad});
            dispararAlert('Producto agregado al carrito', 'El producto se ha agregado al carrito', 'success', 'Continuar');
        }
    }
    function sumarContador() {
        setCantidad(cantidad + 1);
    }

    function restarContador(){
        if(cantidad > 1){
            setCantidad(cantidad - 1);
        }
    }

    if (cargando) return <p>Cargando producto...</p>;
    if (error) return <p>{error}</p>;
    if (!productoEncontrado) return null;

    return (
        <div className="producto-card producto__detalle" >
            <div>    
                <button className="boton__rojo" onClick={() => window.history.back()} title="cerrar">X</button>
            
                <h3>{productoEncontrado.nombre}</h3>
                <p>{productoEncontrado.descripcion}</p>
                <img className="imagen imagen__detalle" src={productoEncontrado.imagen} alt={productoEncontrado.nombre} />
                <p>${productoEncontrado.precio}</p>
                <div>
                    <button className="boton__rojo" onClick={restarContador}>-</button>
                    <span style={{margin: '0 1em', color: 'darkblue'}}>{cantidad}</span>
                    <button className="boton__azul" onClick={sumarContador}>+</button>
                </div>
                <button 
                    onClick={funcionCarrito} 
                    className="boton__azul"
                    title='Agregar a carrito'><FaCartPlus/>
                </button>
            </div>
        </div>
    );
}

export default ProductoDetalle;

