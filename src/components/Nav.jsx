import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function Nav() {
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar si el menú está abierto
    const menuRef = useRef(null); // Referencia al menú para manejar clics fuera del menú
    const toggleMenu = () => {
        setIsOpen(!isOpen); // Invierte el valor de isOpen
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <nav className="menu" ref={menuRef}>
            <div className="menu__hamburguer" onClick={toggleMenu}> {/* Añade el onClick para el ícono */}
                <GiHamburgerMenu className='menu__img'/>
            </div>
            
            <div className="menu__container">
                <ul className={`menu__links ${isOpen ? 'menu__links--show' : ''}`}> {/* Añade la clase menu__links--show si isOpen es verdadero */}
                    <li className="menu__item" onClick={toggleMenu}><Link to="/" className="menu__link">Inicio</Link></li>
                    <li className="menu__item" onClick={toggleMenu}><Link to="/productos" className="menu__link">Productos</Link></li>
                    <li className="menu__item" onClick={toggleMenu}><Link to="/servicios" className="menu__link">Servicios</Link></li>
                    <li className="menu__item" onClick={toggleMenu}><Link to="/infoAyuda" className="menu__link">Info/Ayuda </Link></li>
                    <li className="menu__item" onClick={toggleMenu}><Link to="/contacto" className="menu__link">Contacto</Link></li>
                    <li className="menu__item" onClick={toggleMenu}><Link to="/dondeEstamos" className="menu__link">Dónde estamos?</Link></li>
                    <li className="menu__item" onClick={toggleMenu}><Link to="/politicasCambio" className="menu__link">Políticas de Cambio</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;