import { Link } from 'react-router-dom'
import './ProductosContainer.jsx'

export default function Card ({product}){

    return (
        <div className='producto'>
            <Link to={`/productos/${product.id}`}  title='Ver detalle del producto' >    
                <img className='imagen' src={product.imagen} alt={product.nombre} />
            </Link>
            <h3>{product.nombre}</h3>
            <p>${product.precio}</p>
        </div>
    )
}