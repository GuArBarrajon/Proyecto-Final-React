import '../styles/producto.css'
import { useEffect, useState, useContext } from "react";
import {  useParams } from "react-router-dom";
import { dispararAlert } from "../assets/SweetAlert2";  
import { FaCartPlus } from "react-icons/fa";
import { CarritoContext } from "../context/CarritoContext";

function ProductoDetalle ({ user, admin}) {

    const { agregarAlCarrito } = useContext(CarritoContext);

    const {id} = useParams();
    const [producto, setProducto] = useState(null);
    const [cantidad, setCantidad] = useState(1);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
    fetch('https://68173ac526a599ae7c39b345.mockapi.io/productos')
        .then((res) => res.json())
        .then((datos) => {
            console.log(datos);
            const productoEncontrado = datos.find((item) => item.id === id);
            if (productoEncontrado) {
            setProducto(productoEncontrado);
            } else {
            setError("Producto no encontrado.");
            }
            setCargando(false);
        })
        .catch((err) => {
            console.log("Error:", err);
            setError("Hubo un error al obtener el producto.");
            setCargando(false);
        });
    }, [id]);

    function funcionCarrito (){
        if(!user && !admin) dispararAlert('No iniciaste sesión', 'Debes iniciar sesión para agregar productos al carrito', 'warning', 'Iniciar Sesión');
        else if(cantidad < 1) return;
        else{
            agregarAlCarrito({...producto, cantidad});
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
    if (!producto) return null;

    return (
        <div className="producto-card producto__detalle" >
            <div>    
                <button className="boton__rojo" onClick={() => window.history.back()} title="cerrar">X</button>
            
                <h3>{producto.nombre}</h3>
                <p>{producto.descripcion}</p>
                <img className="imagen imagen__detalle" src={producto.imagen} alt={producto.nombre} />
                <p>${producto.precio}</p>
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

