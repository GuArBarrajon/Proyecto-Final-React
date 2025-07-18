import { FaEdit, FaRegTrashAlt, FaSearch } from "react-icons/fa";
import { useAuthContext } from "../context/AuthContext";    
import { Link, Navigate } from "react-router-dom";
import { useProductosContext } from '../context/ProductosContext';
import { useEffect, useState } from "react";
import '../styles/admin.css';


export default function Admin() { 
    const { user, admin, cargandoAuth } = useAuthContext();
    const {productos, obtenerProductos, eliminarProducto, filtrarProductos} = useProductosContext();

    // Paginación
    const productosPorPagina = 10;
    const [paginaActual, setPaginaActual] = useState(1);
    // Calcular el índice de los productos a mostrar en la página actual
    const indiceUltimoProducto = paginaActual * productosPorPagina;
    const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
    const productosActuales = productos.slice(indicePrimerProducto, indiceUltimoProducto);

    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [filtro, setFiltro] = useState("")

    {useEffect(() => {
        obtenerProductos().then((productos) => {
            setCargando(false);
        }).catch((error) => {
            console.log(error);
            setError('Hubo un problema al cargar los productos');
            setCargando(false);
        });
    },[] )}

    useEffect(() => {
        filtrarProductos(filtro)
        setPaginaActual(1); // Resetea la paginación al buscar
    },[filtro])  //filtro

    if (cargandoAuth) {
        return null; // o un spinner
    }

    if (!user || user !== 'admin@admin.com') {
        return <Navigate to="/login" replace />; 
    }

    const totalPaginas = Math.ceil(productos.length / productosPorPagina);
    const cambiarPagina = (numeroPagina) => setPaginaActual(numeroPagina);

    if (cargando) {
        return <p>Cargando productos...</p>;
    }else if (error){
        return <p>{error}</p>;
    }else{
        return ( 
            <section>
                <h1 className="titulo">Espacio del administrador del sitio</h1>
                <div className="contenedor__texto center contenedor__admin">
                    <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '1.25em'}}> 
                        <h2>Lista de Productos</h2>
                        <Link to="/admin/agregarProducto" className="boton2" >Agregar Producto</Link>
                    </div>
                        <div className="input-group mb-3 mt-3">
                            <span className="input-group-text">
                                <FaSearch />
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Buscar productos..."
                                value={filtro}
                                onChange={(e) => setFiltro(e.target.value)}
                            />
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
                            {productosActuales.length > 0 ? productosActuales.map((product) => (
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
                            )): <></>}
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-center my-4"> {/*Componente de paginacion*/ }
                        {Array.from({ length: totalPaginas }, (_, index) => (
                            <button
                                key={index + 1}
                                className={`btn mx-1 ${paginaActual === index + 1 ? "btn-primary" : "btn-outline-primary"}`}
                                onClick={() => cambiarPagina(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div> 
            </section>
        ); 
    }
}   