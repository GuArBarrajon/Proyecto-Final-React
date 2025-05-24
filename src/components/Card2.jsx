import '../styles/producto.css'
import {dispararAlert} from '../assets/SweetAlert2.js'
import { FaRegTrashAlt } from "react-icons/fa";
export default function Card2 ({product, funcionDisparadora}){
    
    function borrarDelCarrito() {
        funcionDisparadora(product.id)
        dispararAlert('Producto eliminado', 'El producto fue quitado del carrito con éxito', 'success', 'Aceptar');
    }


    return (
        <div className='producto-card card2'>
            <div>
                <h2>{product.nombre}</h2>
                <p>{product.descripcion}</p>
                <img className='producto-image' src={product.imagen} alt={product.nombre} />
                <div>
                    <p>${product.precio}</p>
                    <span>Cantidad: {product.cantidad}</span>
                    <p>Total: ${(product.cantidad * product.precio).toFixed(2)}</p>
                </div>
                <button className="boton__rojo" onClick={borrarDelCarrito}  title="Quitar producto del carrito"><FaRegTrashAlt /></button>
            </div>
        </div>
    )
}