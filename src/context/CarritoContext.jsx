import React, { createContext, useState } from "react";
//crear el contexto
export const CarritoContext = createContext();
//proveedor del contexto
export const CarritoProvider = ({ children }) => {
    const [productosCarrito, setProductosCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        const existe = productosCarrito.find((prod) => prod.id === producto.id);
        
        if(existe){
            const carritoActualizado = productosCarrito.map((prod) => {
                if(prod.id === producto.id){
                    const productoActualizado = {...prod, cantidad: prod.cantidad + cantidad};
                    return productoActualizado;
                }
                else{
                    return prod;
                }
            });
            setProductosCarrito(carritoActualizado);
        }
        else{
            //si no existe, lo agregamos con su cantidad
            const nuevoCarrito = [...productosCarrito, producto];
            setProductosCarrito(nuevoCarrito);
        }
    };

    function borrarProductoCarrito(id){
        console.log(id)
        const nuevoCarrito = productosCarrito.filter((p) => p.id !== id);
        setProductosCarrito(nuevoCarrito);
    };

    const vaciarCarrito = () => {
        setProductosCarrito([]);
    };

    return (
        <CarritoContext.Provider value={{ productosCarrito, agregarAlCarrito, borrarProductoCarrito, vaciarCarrito}}>
            {children}
        </CarritoContext.Provider>
    );
};