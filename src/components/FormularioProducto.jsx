import React, { useState } from 'react';
import { dispararAlert } from '../assets/SweetAlert2';
import { useAuthContext } from "../context/AuthContext";
import { Navigate } from 'react-router-dom';
import { useProductosContext } from '../context/ProductosContext';

function FormularioProducto({}) {
    const { agregarProducto } = useProductosContext();
    const { admin, cargandoAuth } = useAuthContext();

    const [producto, setProducto] = useState({
        nombre: '',
        precio: '',
        descripcion: '',
        tipo: '',
        imagen: ""
    });

    const validarFormulario = () => {
        if (!producto.nombre.trim()) {
            return("El nombre es obligatorio.")
        }
        if(!producto.imagen.trim()){
            return("La url de la imgaen no debe estar vacía")
        }
        if (!producto.precio || producto.precio <= 0) {
            return("El precio debe ser mayor a 0.")
        }
        if (!producto.tipo) {
            return("El tipo es obligatorio.")
        }
        if (!producto.descripcion.trim() || producto.descripcion.length < 10) {
            return("La descripción debe tener al menos 10 caracteres.")
        }
        else{
            return true
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validarForm = validarFormulario()
        if (validarForm == true) {
        agregarProducto(producto).then((data) => {
            setProducto({ nombre: '', precio: '', descripcion: '', tipo: '', imagen: ""});
        }).catch((error) => {
            dispararAlert("Hubo un problema al agregar el producto", error, "error", "Cerrar")
        })
        } else{
        dispararAlert("Error en la carga de producto", validarForm, "error", "Cerrar")
        }
    }

    if (cargandoAuth) {
        return null; // o un spinner
    }

    if(!admin){
        return(
        <Navigate to="/login" replace/>
        )
    }

    function cancelar () {
        return(
            <Navigate to="/admin" replace/>
        )
    }

    let tipos = ["lingote", "Aro", "reloj", "alianza", "anillo", "Pulsera", "cadena", "Prendedor", "Gemelo"];
    return ( 
        <section>
            <div className="titulo">
                <h2>Agregar Producto</h2>
            </div>
            <div className="contenedor__texto" id='form_agregar_producto'>
                <form onSubmit={handleSubmit}>
                    <label>Nombre:</label>
                    <input type="text" name="nombre" value={producto.nombre} onChange={handleChange} required/>

                    <label>URL de la Imagen</label>
                    <input type="text" name="imagen" value={producto.imagen} onChange={handleChange} required/>

                    <label>Precio:</label>
                    <input type="number" name="precio" value={producto.precio} onChange={handleChange} required min="0"/>

                    <label>Tipo:</label>
                    <select name="tipo" value={producto.tipo} onChange={handleChange} required style={{ fontSize: "1.5em", borderRadius: "0.25em" }}>
                        <option value="" disabled>Seleccione una categoría</option>
                        {tipos.map((tipoItem) => (
                            <option key={tipoItem} value={tipoItem} >{tipoItem}</option> 
                        ))}
                    </select>
                    
                    <label>Descripción:</label>
                    <textarea name="descripcion"
                        value={producto.descripcion}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit" className="boton2">Agregar Producto</button>
                    <button className="boton2" onClick={() => window.history.back()}>Cancelar</button>
                </form>
            </div>
        </section>
    );
}

export default FormularioProducto;