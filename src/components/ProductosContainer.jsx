import { useEffect, useState, useContext } from 'react';
import Card from './Card';
import { useProductosContext } from '../context/ProductosContext';

function ProductosContainer( {tipo} ) {

    const {productos, obtenerProductos} = useProductosContext();
    //const [productosComponente, setProductosComponente] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    {useEffect(() => {
        obtenerProductos().then((productos) => {
            setCargando(false);
        }).catch((error) => {
            console.log(error);
            setError('Hubo un problema al cargar los productos');
            setCargando(false);
        });
    },[] )}
    

    if(cargando){
        return <p className='titulo'>Cargando...</p>
    }
    else if(error){
        return <p>{error}</p>
    }
    else{
        return (
            <div className='contenedor'>
                {productos.filter(producto => producto.tipo === tipo).map((producto) => (
                    <div key={producto.id}>
                        <Card product = {producto} />
                    </div>
                ))}
            </div>
        );
    }
}

export default ProductosContainer;