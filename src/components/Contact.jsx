import './Contact.css'
import { FaPhoneAlt, FaWhatsapp, FaFacebook, FaTwitter, FaInstagram, FaWaze } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

export default function Contact(){
    return (
        <section id="contact">
            <h3 className='contact-h3'>Contacto</h3>
            <p className='contact-p'>¡Tú salud es nuestra prioridad! Visítanos hoy mismo
            y toma el control de tu bienestar. Contáctanos al 
            <b> 809-564-7130</b> ext <b>0</b> para más información.</p>
            <div className='infos'>
                <div className='contact-1'>
                    <FaPhoneAlt className='contact-icon'/>
                    <p>809-564-7130</p>
                </div>
                <div className='contact-1'>
                    <FaWhatsapp className='contact-icon'/>
                    <p>809-917-8183</p>
                </div>
                <div className='contact-1'>
                    <IoMdMail className='contact-icon'/>
                    <p>cmdivinamisericordia01@hotmail.com</p>
                </div>
                <div className='contact-1'>
                    <IoLocationSharp className='contact-icon'/>
                    <p>Av. Cordillera, Esq. El Saman, Arroyo Bonito, Manoguayabo, Distrito Nacional, República Dominicana 10902</p>
                </div>
            </div>
            <div className='networks'>
                <p>Siguenos en nuestras redes sociales!</p>
                <div >
                    <a href='https://www.facebook.com/CentroMedicoDivinaMisericordia/?locale=es_LA' target='_blank' className='facebook'><FaFacebook /></a>
                    <a href='https://twitter.com/Cmdmisericordia' target='_blank' className='twitter'><FaTwitter /></a>
                    <a href='https://www.instagram.com/cmdmisericordia/?hl=es' target='_blank' className='instagram'><FaInstagram/></a>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.5382774960467!2d-70.01398341500287!3d18.484214599717586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf8a8f7dde9527%3A0x5a9bb84d47a92a30!2sCentro%20M%C3%A9dico%20Divina%20Misericordia!5e0!3m2!1ses-419!2sdo!4v1707704775483!5m2!1ses-419!2sdo" className="map"></iframe>
        </section>
    )
}