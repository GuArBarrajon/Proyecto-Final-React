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
                <ProductosContainer tipo="reloj"/>
            </section>
            <section>
                <div className="titulo">
                    <h2>Lingotes</h2>
                </div>
                <ProductosContainer tipo="lingote"/>
            </section>
                        <section>
                <div className="titulo">
                    <h2>Alianzas</h2>
                </div>
                <ProductosContainer tipo="alianza"/>
            </section>
            <section>
                <div className="titulo">
                    <h2>Anillos</h2>
                </div>
                <ProductosContainer tipo="anillo"/>
            </section>
            <section>
                <div className="titulo">
                    <h2>Cadenas y Collares</h2>
                </div>
                <ProductosContainer tipo="cadena"/>
            </section>
            <section>
                <div className="titulo">
                    <h2>Pulseras</h2>
                </div>
                <ProductosContainer tipo="Pulsera"/>
            </section>
            <section>
                <div className="titulo">
                    <h2>Aros</h2>
                </div>
                <ProductosContainer tipo="Aro"/>
            </section>
            <section>
                <div className="titulo">
                    <h2>Prendedores</h2>
                </div>
                <ProductosContainer tipo="Prendedor"/>
            </section>
            <section>
                <div className="titulo">
                    <h2>Gemelos</h2>
                </div>
                <ProductosContainer tipo="Gemelo"/>
            </section>
        </>
    )
}

export default Productos