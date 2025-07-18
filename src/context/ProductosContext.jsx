import React, { createContext, useState, useContext } from 'react';
import { dispararAlert, eliminarAlert } from '../assets/SweetAlert2';

// Crear el contexto de de los productos
const ProductosContext = createContext();
export function ProductosProvider({ children }) {
    const [productos, setProductos] = useState([])
    const [productosOriginales, setProductosOriginales] = useState([])
    const [productoEncontrado, setProductoEncontrado] = useState([])

    function obtenerProductos() {
        return(
            new Promise((res, rej) => {
                fetch('https://68173ac526a599ae7c39b345.mockapi.io/productos')
                    .then((respuesta) =>
                        respuesta.json()
                    )
                    .then((datos) => {
                        setProductos(datos)
                        setProductosOriginales(datos)
                        res(datos)
                    })
                    .catch((error) => {
                        console.log("Error", error)
                        rej(error)
                    })
                ;
            })
        )
    }

    const agregarProducto = (producto) => {
        return(
            new Promise(async (res, rej) => {
                try {
                    const respuesta = await fetch('https://68173ac526a599ae7c39b345.mockapi.io/productos', {
                        method: 'POST',
                        headers: {
                        'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(producto),
                    });

                    if (!respuesta.ok) {
                            throw new Error('Error al agregar el producto.');
                    }
                    const data = await respuesta.json();
                            console.log('Producto agregado:', data);
                            res(data)
                            dispararAlert('Producto agregado correctamente', 'El producto se ha agregado correctamente', 'success', 'Continuar');
                            window.history.back();
                    } catch (error) {
                        console.error(error.message);
                        dispararAlert('Error al agregar el producto', 'Hubo un problema al agregar el producto', 'error', 'Aceptar');
                        rej(error.message)
                    }
            })
        )
    };

    function obtenerProducto(id){
        return(
            new Promise((res, rej) => {
                fetch("https://68173ac526a599ae7c39b345.mockapi.io/productos")
                .then((res) => res.json())
                .then((datos) => {
                    const productoEncontrado = datos.find((item) => item.id === id);
                    if (productoEncontrado) {
                    setProductoEncontrado(productoEncontrado);
                    res(datos)
                    } else {
                        rej("Producto no encontrado")
                    }
                })
                .catch((err) => {
                    console.log("Error:", err);
                    rej("Hubo un error al obtener el producto.");
                }); 
            })
        )
    }

    function editarProducto(producto){
        return(
            new Promise(async(res, rej) => {
            try {
                const respuesta = await fetch(`https://68173ac526a599ae7c39b345.mockapi.io/productos/${producto.id}`, {
                    method: 'PUT',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(producto),
                });
                if (!respuesta.ok) {
                    throw new Error('Error al actualizar el producto.');
                }
                const data = await respuesta.json();
                res(data)
                dispararAlert('Producto editado correctamente', 'El producto se ha editado correctamente', 'success', 'Continuar');
                window.history.back();
            } catch (error) {
                console.error(error.message);
                dispararAlert('Error al editar el producto', 'Hubo un problema al editar el producto', 'error', 'Aceptar');
                rej(error)
            }
            })
        )
    }

    const eliminarProducto = (id) => {
    return new Promise((res, rej) => {
            eliminarAlert(
                'Eliminar producto',
                '¿Está seguro de eliminar el producto?',
                'warning',
                'Eliminar',
                'Cancelar'
            ).then(async (result) => {
                // Si el usuario confirma (ajusta según cómo responde tu dispararAlert)
                if (result === 'Eliminar' || result?.isConfirmed) {
                    try {
                        const respuesta = await fetch(`https://68173ac526a599ae7c39b345.mockapi.io/productos/${id}`, {
                            method: 'DELETE',
                        });
                        if (!respuesta.ok) throw new Error('Error al eliminar');
                        dispararAlert('Producto eliminado correctamente', 'El producto se ha eliminado correctamente', 'success', 'Continuar');
                        res();
                        // Actualizar el estado local de productos sin recargar la página
                        setProductos(prev => prev.filter(producto => producto.id !== id));
                    } catch (error) {
                        console.error(error.message);
                        dispararAlert('Error al eliminar el producto', 'Hubo un problema al eliminar el producto', 'error', 'Aceptar');
                        rej(error);
                    }
                } else {
                    // Usuario canceló
                    rej('Operación cancelada por el usuario');
                }
            });
        });
    }

    function filtrarProductos(filtro){
        if(filtro.length < 0){
            setProductos(productosOriginales)
            return;
        }

        const productosFiltrados = productosOriginales.filter((producto) =>
            producto.nombre.toLowerCase().includes(filtro.toLowerCase())
        );
        setProductos(productosFiltrados)
    }

    return (
        <ProductosContext.Provider value={{ filtrarProductos, obtenerProductos, productos, agregarProducto, obtenerProducto, productoEncontrado, editarProducto, eliminarProducto }}>
        {children}
        </ProductosContext.Provider> 
    );
}
export const useProductosContext = () => useContext(ProductosContext);