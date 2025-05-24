import { useEffect, useState, useContext } from 'react';
import Card from './Card';

function ProductosContainer( {tipo} ) {


    const [productos, setProductos] = useState(false);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    {useEffect(() => {
        fetch('https://68173ac526a599ae7c39b345.mockapi.io/productos')
        .then(respuesta => respuesta.json())
        .then((datos) => {
            console.log(datos);
            setProductos(datos);
            setCargando(false);
        })
        .catch((error) => {
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