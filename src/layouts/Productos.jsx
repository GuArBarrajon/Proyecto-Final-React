import { useState } from "react";
import ProductosContainer from "../components/ProductosContainer";
import "../styles/styles.css";

function Productos() {
    const [categoria, setCategoria] = useState("todos");

    const categorias = [
        { value: "todos", label: "Todos" },
        { value: "reloj", label: "Relojes" },
        { value: "lingote", label: "Lingotes" },
        { value: "alianza", label: "Alianzas" },
        { value: "anillo", label: "Anillos" },
        { value: "cadena", label: "Cadenas y Collares" },
        { value: "Pulsera", label: "Pulseras" },
        { value: "Aro", label: "Aros" },
        { value: "Prendedor", label: "Prendedores" },
        { value: "Gemelo", label: "Gemelos" }
    ];

    return (
        <>
            <div className="titulo" >
                <label htmlFor="categoria">Filtrar por categoría:  </label>
                <select value={categoria} onChange={e => setCategoria(e.target.value)}  id="categoria">
                    {categorias.map(cat => (
                        <option key={cat.value} value={cat.value}>{cat.label}</option>
                    ))}
                </select>
            </div>
            <section>
                {categoria === "todos"
                    ? categorias.filter(cat => cat.value !== "todos").map(cat => (
                        <div key={cat.value}>
                            <div className="titulo">
                                <h2>{cat.label}</h2>
                            </div>
                            <ProductosContainer tipo={cat.value} />
                        </div>
                    ))
                    : (
                        <div>
                            <div className="titulo" style={{ marginTop: "0" }}>
                                <h2>{categorias.find(cat => cat.value === categoria)?.label}</h2>
                            </div>
                            <ProductosContainer tipo={categoria} />
                        </div>
                    )
                }
            </section>
        </>
    );
}

export default Productos;