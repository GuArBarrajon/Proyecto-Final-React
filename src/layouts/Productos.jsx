import ProductosContainer from "../components/ProductosContainer"
import "../styles/styles.css"

function Productos ()
{
    return (
        <>
            <section>
                <div className="titulo">
                    <h2>Relojes</h2>
                </div>
                <div className="contenedor"><ProductosContainer tipo="reloj"/></div>
            </section>
            <section>
                <div className="titulo">
                    <h2>Lingotes</h2>
                </div>
                <div className="contenedor"><ProductosContainer tipo="lingote"/></div>
            </section>
                        <section>
                <div className="titulo">
                    <h2>Alianzas</h2>
                </div>
                <div className="contenedor"><ProductosContainer tipo="alianza"/></div>
            </section>
            <section>
                <div className="titulo">
                    <h2>Anillos</h2>
                </div>
                <div className="contenedor"><ProductosContainer tipo="anillo"/></div>
            </section>
            <section>
                <div className="titulo">
                    <h2>Cadenas y Collares</h2>
                </div>
                <div className="contenedor"><ProductosContainer tipo="cadena"/></div>
            </section>
            <section>
                <div className="titulo">
                    <h2>Pulseras</h2>
                </div>
                <div className="contenedor"><ProductosContainer tipo="Pulsera"/></div>
            </section>
            <section>
                <div className="titulo">
                    <h2>Aros</h2>
                </div>
                <div className="contenedor"><ProductosContainer tipo="Aro"/></div>
            </section>
            <section>
                <div className="titulo">
                    <h2>Prendedores</h2>
                </div>
                <div className="contenedor"><ProductosContainer tipo="Prendedor"/></div>
            </section>
            <section>
                <div className="titulo">
                    <h2>Gemelos</h2>
                </div>
                <div className="contenedor"><ProductosContainer tipo="Gemelo"/></div>
            </section>
        </>
    )
}

export default Productos