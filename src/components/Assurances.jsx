import './Assurances.css'
import aps from '../assets/img/assurances/aps.png'
import metasalud from '../assets/img/assurances/metasalud.png'
import reservas from '../assets/img/assurances/reservas.png'
import cmd from '../assets/img/assurances/CMD.png'
import humano from '../assets/img/assurances/humano.png'
import senasa from '../assets/img/assurances/Senasa.png'
import semma from '../assets/img/assurances/semma.png'
import yunen from '../assets/img/assurances/yunen.png'
import renacer from '../assets/img/assurances/renaser.webp'
import asemap from '../assets/img/assurances/asemap.webp'
import mapfre from '../assets/img/assurances/mapfre.png'
import futuro from '../assets/img/assurances/futuro.png'
import simag from '../assets/img/assurances/simag.png'
import monumental from '../assets/img/assurances/monumental.png'
import gma from '../assets/img/assurances/gma.png'
import uasd from '../assets/img/assurances/uasd.png'

export default function Services(){
    return (
        <section id='assurances'>
            <div className='assurances-container'>
                <h3>Seguros</h3>
                <p className='assurance-p'>Conoce la red de seguros medicas que tenemos afiliados. Para más información llámanos al <b>809-564-7130</b></p>
                <div className='assurances-list'>
                    <ul>
                        <li><p>APS ARS</p> <img src={aps} className='assurance-logo' alt='Seguro'/></li>
                        <li><p>ARS ASEMAP</p> <img src={asemap} className='assurance-logo' alt='Seguro'/></li>
                        <li><p>ARS GMA</p> <img src={gma} className='assurance-logo' alt='Seguro'/></li>
                        <li><p>ARS METASALUD</p> <img src={metasalud} className='assurance-logo' alt='Seguro'/></li>
                        <li><p>ARS MONUMENTAL</p> <img src={monumental} className='assurance-logo' alt='Seguro'/></li>
                        <li><p>ARS RENACER</p> <img src={renacer} className='assurance-logo' alt='Seguro'/></li>
                        <li><p>ARS RESERVAS </p><img src={reservas} className='assurance-logo' alt='Seguro'/></li>
                        <li><p>ARS SIMAG</p> <img src={simag} className='assurance-logo' alt='Seguro'/></li>
                        <li><p>ARS YUNEN</p> <img src={yunen} className='assurance-logo' alt='Seguro'/></li>
                        <li><p>CMD</p> <img src={cmd} className='assurance-logo' alt='Seguro'/></li>
                        <li><p>FUTURO</p> <img src={futuro} className='assurance-logo' alt='Seguro'/></li>
                        <li><p>HOSPITAL DOCENTE SEMMA</p><img src={semma} className='assurance-logo' alt='Seguro'/></li>
                        <li><p>HUMANO</p> <img src={humano} className='assurance-logo' alt='Seguro'/></li>
                        <li><p>MAPFRE</p> <img src={mapfre} className='assurance-logo' alt='Seguro'/></li>
                        <li><p>SENASA</p> <img src={senasa} className='assurance-logo' alt='Seguro'/></li>
                        <li><p>SERVICIOS MÉDICOS UASD </p><img src={uasd} className='assurance-logo' alt='Seguro'/></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}