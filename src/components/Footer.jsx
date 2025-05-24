    import { Link } from 'react-router-dom';
    import { FaRegEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
    import { RiTwitterXLine } from "react-icons/ri";
    function Footer() { 
        return ( 
            <footer>
                <section className="footer__1">
                    <div className="footer__container back__azul">
                        <div>
                            <h3>Contacto</h3>
                            <p><a href="https://wa.me/5491155555555" className="boton" target="_blank"><FaWhatsapp />+54 9 11 5555-5555</a></p>
                            <p><a href="mailto:gemasyjoyas@example.com" className="boton" target="_blank"><FaRegEnvelope/> gemasyjoyas@example.com</a></p>
                        </div>
                        <div>
                            <h3>Redes Sociales</h3>
                            <a href="https://www.facebook.com/?locale=es_LA" target="_blank" title="Facebook" className="boton"><FaFacebook /></a>
                            <a href="https://www.instagram.com" target="_blank" title="Instagram" className="boton"><FaInstagram /></a>
                            <a href="https://x.com/?lang=es" target="_blank"  title="X" className="boton"><RiTwitterXLine/></a>
                        </div>
                        <div>
                            <h3>Dirección</h3>
                            <p>Cucha Cucha 123, Buenos Aires</p>
                        </div>
                    </div>

                    <div className="footer__container">
                        <li className="menu__item"><Link to="/" className="menu__link">Inicio</Link></li>
                        <li className="menu__item"><Link to="/productos" className="menu__link">Productos</Link></li>
                        <li className="menu__item"><Link to="/servicios" className="menu__link">Servicios</Link></li>
                        <li className="menu__item"><Link to="/infoAyuda" className="menu__link">Info/Ayuda </Link></li>
                        <li className="menu__item"><Link to="/contacto" className="menu__link">Contacto</Link></li>
                        <li className="menu__item"><Link to="/dondeEstamos" className="menu__link">Dónde estamos?</Link></li>
                        <li className="menu__item"><Link to="/politicasCambio" className="menu__link">Políticas de Cambio</Link></li>
                    </div>
                </section>
                <section className="footer__2">
                    <div className="footer__container">
                        <h4>Copyright © 2025 Gemas y Joyas. Todos los derechos reservados.</h4>
                        <p>El uso de este sitio web implica la aceptación de los Términos y Condiciones y de las Políticas de Privacidad de la empresa.
                            Las fotos son a modo ilustrativo. La venta de cualquiera de los productos publicados está sujeta a la verificación de stock. Precios sujeto a cambios sin previo aviso.</p>
                    </div>
                </section>
            </footer>
        ); 
    }

    export default Footer;