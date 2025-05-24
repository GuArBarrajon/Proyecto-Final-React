import React, { useState, useEffect } from 'react';
import ProductosContainer from "./ProductosContainer";
import VideoBanner from "./videoBanner";

function Main() {
    let tipos = ["lingote", "Aro", "reloj", "alianza", "anillo", "Pulsera", "cadena", "Prendedor", "Gemelo"];
    const [randomtype1, setRandomtype1] = useState(null); 
    const [randomtype2, setRandomtype2] = useState(null);
    //Para que se muestre distintos tipos de productos destacados y ofertas

    useEffect(() => {
        let primerInidice = Math.floor(Math.random() * tipos.length);
        let segundoIndice = Math.floor(Math.random() * tipos.length);

        while (primerInidice === segundoIndice) {
            segundoIndice = Math.floor(Math.random() * tipos.length);
        }
        setRandomtype1(tipos[primerInidice]);
        setRandomtype2(tipos[segundoIndice]);
    }, []);
    
    return ( 
        <main>
            <section>
            <img src="../src/assets/images/Banner2-1600x350-66e1dc69283dc.webp" alt="Banner" width="100%"/>
        </section>

        <section>
            <div className="titulo">
                <h2>Productos Destacados</h2>
            </div>
            <div className="contenedor"><ProductosContainer tipo={randomtype1}/></div>
        </section>

        <section className="invertir">
            <VideoBanner/>
        </section>

        <section>
            <div className="titulo">
                <h2>Ofertas Exclusivas</h2>
            </div>
            <div className="contenedor"><ProductosContainer tipo={randomtype2}/></div>
        </section>

        </main> 
    ); 
} 

export default Main;