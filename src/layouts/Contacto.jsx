import { FaCogs, FaRegEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

function Contacto () {

    return(
        <section>
            <div className="titulo">
                <h2>Contacto</h2>
                <p>Contacto en desarrollo  <FaCogs/></p>
            </div>
            <div className="contenedor" style={{gap: '2em'}}>
                <div className="contenedor__texto" >
                    <p>Horario del local: Lun a Sab de 10:30 a 13:30 y de 16:30 a 19hs</p>
                    <div>
                        <h4>Datos de Contacto</h4>
                        <p><a href="https://wa.me/5491155555555" className="boton2"><FaWhatsapp /> +54 9 11 5555-5555</a></p>
                        <p><a href="mailto:gemasyjoyas@example.com" className="boton2"><FaRegEnvelope/> gemasyjoyas@example.com</a></p>
            
                        <h3>Dirección</h3>
                        <p>Cucha Cucha 123, Buenos Aires</p>
                    </div>
                    <div>
                        <h4>Redes Sociales</h4>
                        <div>
                            <a href="https://www.facebook.com/?locale=es_LA" target="_blank" title="Facebook" className="boton2"><FaFacebook /></a>
                            <a href="https://www.instagram.com" target="_blank" title="Instagram" className="boton2"><FaInstagram /></a>
                            <a href="https://x.com/?lang=es" target="_blank"  title="X" className="boton2"><RiTwitterXLine/></a>
                        </div>
                    </div>
                </div>
                <div className="contenedor__texto" >
                    <h4>Formulario de Contacto</h4>
                    <div >
                        <label for="nombre">Nombre</label>
                        <p><input type="text" name="nombre" style={{width:"100%"}} placeholder="Escriba su Nombre y Apellido" required/></p>
                        <label for="correo">Correo Electrónico</label>
                        <p><input type="email" name="correo" style={{width:"100%"}} placeholder="Ingrese su Correo Electrónico" required/></p>
                        <label for="mensaje">Tu Mensaje</label>
                        <p><textarea name="mensaje" style={{width:"100%"}} placeholder="Deje su comentario" rows="5" required/></p>
                        <button type="submit" title="Enviar mensaje" style={{width:"100%"}} className="boton2">Enviar</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacto;