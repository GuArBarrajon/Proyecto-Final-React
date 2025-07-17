import '../styles/producto.css'
import {dispararAlert} from '../assets/SweetAlert2.js'
import { FaRegTrashAlt } from "react-icons/fa";
export default function Card2 ({product, funcionDisparadora}){
    
    function borrarDelCarrito() {
        funcionDisparadora(product.id)
        dispararAlert('Producto eliminado', 'El producto fue quitado del carrito con éxito', 'success', 'Aceptar');
    }


    return (
        <div  className='carrito-item'>
                <h2>{product.nombre}</h2>
                <img className='producto-image' src={product.imagen} alt={product.nombre} />
                <p>${product.precio}</p>
                <span>Cantidad: {product.cantidad}</span>
                <p>Total: ${(product.cantidad * product.precio).toFixed(2)}</p>
                <button className="boton__rojo" onClick={borrarDelCarrito}  title="Quitar producto del carrito"><FaRegTrashAlt /></button>
        </div>
    )
}