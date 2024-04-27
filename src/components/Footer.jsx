import './Footer.css'
import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


export default function Footer(){
    return (
        <section className='footer'>
            <div className='footer-container'>
                {/*<img src={logo} alt='Logo Centro Médico Divina Misericordia'/>*/}
                <div className='footer-links-container'>
                    <p>© {new Date().getFullYear()} Centro Médico Divina Misericordia™</p>
                    <div className='footer-links'>
                        <a href="https://wa.me/18099178183" target='_blank' className='footer-link'><FaWhatsapp className='contact-icon'/></a>
                        <a href='mailto:cmdivinamisericordia01@hotmail.com' target='_blank' className='footer-link'><IoMdMail className='email'/></a> 
                        <a href='https://www.facebook.com/CentroMedicoDivinaMisericordia/?locale=es_LA' target='_blank' className='facebook'><FaFacebook /></a>
                        <a href='https://twitter.com/Cmdmisericordia' target='_blank' className='twitter'><FaTwitter /></a> 
                        <a href='https://www.instagram.com/cmdmisericordia/?hl=es' target='_blank' className='instagram'><FaInstagram/></a>
                    </div>
                </div>
                <hr/>
                <a href='https://github.com/Jeuryy/medic-system' target='_blank' className='developer'>Desarrollador</a>
            </div>
        </section>
    )
}