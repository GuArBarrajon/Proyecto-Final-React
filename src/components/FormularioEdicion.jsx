import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductosContext } from "../context/ProductosContext";
import { useAuthContext } from "../context/AuthContext";
import { dispararAlert } from "../assets/SweetAlert2";

function FormularioEdicion({ }) {
    const {admin, cargandoAuth} = useAuthContext();
    const { id } = useParams();
    
    const {obtenerProducto, productoEncontrado, editarProducto} = useProductosContext();
    
    const [producto, setProducto] = useState({
        nombre: '',
        precio: '',
        descripcion: '',
        tipo: '',
        imagen: ""
    });

    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        
        obtenerProducto(id).then(() => {
        
        setCargando(false);
        }).catch((error) => {
        if(error == "Producto no encontrado"){
            setError("Producto no encontrado")
        }
        if(error == "Hubo un error al obtener el producto."){
            setError("Hubo un error al obtener el producto.");
        }
        setCargando(false);
        })
    }, [id]);

    // Efecto para actualizar el estado local 'producto' cuando 'productoEncontrado' cambia 
    // porque me traía el anterior seleccionado para modificar
    useEffect(() => {
        if (productoEncontrado && Object.keys(productoEncontrado).length > 0) {
            setProducto(productoEncontrado);
        }
    }, [productoEncontrado]);  //Dependencia: productoEncontrado

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });
    };

    if (cargandoAuth) {
        return null; // o un spinner
    }
    if(!admin){
        return(
        <Navigate to="/login" replace/>
        )
    }

    const validarFormulario = () => {
        if (!producto.nombre.trim()) {
            return("El nombre es obligatorio.")
        }
        if(!producto.imagen.trim()){
            return("La url de la imagen no debe estar vacía")
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validarForm = validarFormulario()
        if(validarForm == true){
            editarProducto(producto).then((prod) => {
                dispararAlert('Producto editado correctamente', 'El producto se ha editado correctamente', 'success', 'Continuar');
            }).catch((error) => {
                console.error("Hubo un problema al actualizar el producto. " + error.message);
                dispararAlert('Error al editar el producto', error, 'error', 'Aceptar');
            })
        }else{
            dispararAlert("Error en la carga de producto", validarForm, "error", "Cerrar")
        }

    };

    let tipos = ["lingote", "Aro", "reloj", "alianza", "anillo", "Pulsera", "cadena", "Prendedor", "Gemelo"];
    return (
        <section>
            <div className="titulo">
                <h2>Editar Producto</h2>
            </div>
            <div className="contenedor__texto" id='form_editar_producto'>
                <form onSubmit={handleSubmit} className="p-4 border rounded shadow ">
                    <label>Nombre:</label>
                    <input type="text" name="nombre" value={producto.nombre || ''} onChange={handleChange} required />
                    
                    <label>Imagen URL:</label>
                    <input type="text" name="imagen" value={producto.imagen} onChange={handleChange} required />
                    
                    <label>Precio:</label>
                    <input type="number" name="precio" value={producto.precio || ''} onChange={handleChange} required min="0" />

                    <label>Tipo:</label>
                    <select name="tipo" value={producto.tipo} onChange={handleChange} required style={{ fontSize: "1.5em", borderRadius: "0.25em" }}>
                        <option value={producto.tipo} >{producto.tipo}</option>
                        {tipos.map((tipoItem) => (
                            <option key={tipoItem} value={tipoItem} >{tipoItem}</option> 
                        ))}
                    </select>
                    
                    <label>Descripción:</label>
                    <textarea name="descripcion" value={producto.descripcion || ''} onChange={handleChange} required />
                    
                    <button type="submit" className="boton2">Actualizar Producto</button>                  
                </form>
                <button className="boton2" onClick={() => window.history.back()} style={{ marginTop: "10px", width: "100%" }}>Cancelar</button>
            </div>
        </section>
    );
}

export default FormularioEdicion