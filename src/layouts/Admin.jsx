import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { useAuthContext } from "../context/AuthContext";    
import { Link, Navigate } from "react-router-dom";
import { useProductosContext } from '../context/ProductosContext';
import { useEffect, useState } from "react";

export default function Admin() { 
    const { user, admin, cargandoAuth } = useAuthContext();
    const {productos, obtenerProductos, eliminarProducto} = useProductosContext();
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

    if (cargandoAuth) {
        return null; // o un spinner
    }

    if (!user || user !== 'admin@admin.com') {
        return <Navigate to="/login" replace />; 
    }

    return ( 
        <section>
            <h1 className="titulo">Espacio del administrador del sitio</h1>
            <div className="contenedor__texto center contenedor__admin">
                <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '1.25em'}}> 
                    <h2>Lista de Productos</h2>
                    <Link to="/admin/agregarProducto" className="boton2" >Agregar Producto</Link>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Tipo</th> 
                            <th>Descripción</th>
                            <th>Precio</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.nombre}</td>
                                <td>{product.tipo}</td>
                                <td>{product.descripcion}</td>
                                <td>${product.precio}</td>
                                <td style={{display: 'flex', flexDirection: 'row'}}>
                                    <Link to={"/admin/editarProducto/" + product.id} className="boton__azul" title="Editar producto"><FaEdit/></Link>
                                    <button onClick={() => eliminarProducto(product.id)} className="boton__rojo" title="Eliminar producto"><FaRegTrashAlt/></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> 
        </section>
    ); 
}   