import './Services.css'
import '../button.css'
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid';

export default function Services(){

    const services = ([{
        id:nanoid(), 
        name: "Ginecología y obstetricia",
        description: "atención de las mujeres durante el embarazo y el parto, y en el diagnóstico y tratamiento de enfermedades de los órganos reproductivos femeninos."
    },
    {
        id: nanoid(),
        name: "Ginecología y oncológica",
        description: "Indicada para cualquier mujer que tenga síntomas o preocupaciones relacionados con cánceres ginecológicos, como sangrado vaginal anormal, dolor pélvico, masas o tumores en la pelvis y lesiones de mama, entre otros."
    },
    {
        id: nanoid(),
        name: "Pediatría",
        description: "Atención de los niños desde su nacimiento hasta la adolescencia."
    },
    {
        id: nanoid(),
        name: "Cirugía",
        description: "Procedimiento para extirpar o reparar una parte del cuerpo, o para determinar si hay una enfermedad."
    },
    {
        id: nanoid(),
        name: "Ortopedia y traumatología",
        description: "Cuidado de trastornos de los huesos, músculos, tendones y ligamentos."
    },
    {
        id: nanoid(),
        name: "Psiquiatría",
        description: "Los psiquiatras evalúan, diagnostican y tratan a pacientes con problemas de salud mental."
    },
    {
        id: nanoid(),
        name: "Neumología",
        description: "Enfermedades y problemas del aparato respiratorio"
    },
    {
        id: nanoid(),
        name: "Otorrinolaringología",
        description: "Diagnóstico y tratamiento de las enfermedades del oído, la nariz y la garganta."
    },
    {
        id: nanoid(),
        name: "Cardiología",
        description: "Diagnóstico y tratamiento de enfermedades del corazón, los vasos sanguíneos y el sistema circulatorio."
    },
    {
        id: nanoid(),
        name: "Medicina interna",
        description: "Atención integral del adulto enfermo, enfocada al diagnóstico y el tratamiento no quirúrgico de las enfermedades que afectan a sus órganos y sistemas internos, y a su prevención»."
    },
    {
        id: nanoid(),
        name: "Medicina familiar",
        description: "Brinda atención médica continua e integral para el individuo y la familia."
    },
    {
        id: nanoid(),
        name: "Medicina intensiva",
        description: "Atención médica para personas que tienen lesiones y enfermedades que pueden ser mortales."
    },
    {
        id: nanoid(),
        name: "Diabetología",
        description: "Tratar a pacientes adultos afectados de Diabetes,"
    },
    {
        id: nanoid(),
        name: "Urología",
        description: "Diagnóstico y el tratamiento de las enfermedades de los órganos del aparato urinario en las mujeres y de los órganos del aparato urinario y reproductor en los hombres. "
    },
    {
        id: nanoid(),
        name: "Anestesiología",
        description: "Atención y cuidados especiales e intensivos de los pacientes durante las intervenciones quirúrgicas u otros procesos que puedan resultar molestos o dolorosos. Asimismo, tiene a su cargo el tratamiento del dolor agudo o crónico de causa extraquirúrgica."
    },
    {
        id: nanoid(),
        name: "Odontología",
        description: "Prevención, el diagnóstico y tratamiento de las enfermedades que afectan a cualquier parte de la estructura mandibular: Dientes. Encías."
    },
    {
        id: nanoid(),
        name: "Cirugía oral y maxilofacial",
        description: "se diagnostican y tratan una amplia gama de trastornos que afectan al complejo facial y al esqueleto, incluyendo los maxilares y la cavidad oral."
    },
    {
        id: nanoid(),
        name: "Psicología",
        description: "Estudio y el análisis de la conducta y los procesos mentales de las personas."
    }])


    return (
        <section id='services'>
            <div className='services-container'>
                <h3>Servicios</h3>
                <p>Brindamos una amplia cantidad de servicios y
                especialidades médicas, velando por tu salud, con 
                precios asequibles a toda la población.</p>
                <div className='services-list'>
                    <ul>
                        {services.map(service => {
                            return <li id={service.id} key={service.id}>
                                {service.name}
                            </li>
                        })}
                    </ul>
                </div>
                <div className='button'>
                <Link to="/agendar" className="button-48" role="button"><span className="text">Agendar cita</span></Link>
                </div>
            </div>
        </section>
    )
}