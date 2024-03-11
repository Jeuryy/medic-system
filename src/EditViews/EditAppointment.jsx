import './EditAppointment.css'
import React, { useState, useEffect} from 'react';
import { MdAccountCircle, MdHome } from "react-icons/md";
import cmdm from '../assets/img/cmdm.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import { nanoid } from 'nanoid';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export default function EditAppointment(props) {
    const [doctorsList, setDoctorsList] = useState([]);
    const [servicesList, setServicesList] = useState([]);
    const [formService, setFormService] = useState("");
    const [formDoctors, setFormDoctors] = useState([]);
    const [schedule, setSchedule] = useState("");
    const [doctorSchedule, setDoctorSchedule] = useState([])
    const [selected, setSelected] = useState();
    const [citaUpdated, setCitaUpdated] = useState(false)
    const [error, setError] = useState(false)
    const {isLogged, setIsLogged} = props
    const [formData, setFormData] = useState({
        id: nanoid(),
        name: "",
        lastname: "",
        address: "",
        email: "",
        phone: "",
        documenttype: "",
        document: "",
        sex: "",
        service: "",
        doctor: "",
        assurance: "",
        date: "",
        dia: "",
    });
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{
        if (location.state === null) {
            return navigate('/');
        }
        const {id, name, lastname, address, 
            email, phone, sex, 
            service, documenttype, document, doctor, 
            assurance, date, dia
        } = location.state;
        setFormData(prevState => {
            return {
                ...prevState,
                id,
                name,
                lastname,
                address,
                email,
                service,
                phone,
                sex,
                documenttype,
                document,
                doctor,
                assurance, 
                date, 
                dia
            }
        })
    }, []);
    //Get Doctors DATA from Database
    useEffect(()=> {
        fetch("http://localhost:5000/doctors")
        .then(res => res.json())
        .then(data => {
            setDoctorsList(data)
           //Creating an array with de doctors services with no repited option
            setServicesList([...new Set(data.map(doctor => doctor.service))])
        })
        .catch(err => console.log(err))
    }, [])
    

    let footer = <p>{`Seleccione el dia para la cita, con relacion al horario seleccionado. (${(formData.date)})`}</p>;
        if (selected) {
            footer = <p>Ha seleccionado {format(selected, 'PP')}.</p>;
        }

    //Function to EDIT Appointment DATA and sent to back end the request
    const updateCitas = async (data) => {
        const settings = {
            method: "PUT",
            //mode: "no-cors",
            headers: {
                "Content-type": "application/json",
                'Access-Control-Allow-Origin':'*'
            },
            body: JSON.stringify(data) 
        };
            await fetch("http://localhost:5000/citas/", settings)
            .then(res => res.json())
            .then(resData => {
                console.log(resData);
                setCitaUpdated(true)
                setError(false)
                setTimeout(() => {
                    navigate(-1);
                }, 1000)
            })
            .catch(e => {
                console.log(`Error catched: ${e}`);
                setCitaUpdated(false)
                setError(true)
            })
    }

    const handleChange = (e) => {
        setFormService(formData.service)

        //Display doctors where services are equal to selected services
        setFormDoctors(doctorsList.filter(doctor => doctor.service === formService))
        
        //Display schedule associated with the selected doctor
        setSchedule(formDoctors.filter(doctor => `${doctor.gender === "Hombre" ? "Dr" : "Dra"} ${doctor.name} ${doctor.lastname}` === formData.doctor))
        

        setFormData(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
        
        //Desestructure schedule array to get only de dates from the doctor objects
        let [arrayObject] = schedule
        if (arrayObject !== undefined) {
            let {schedule} = arrayObject;
            let scheduleArray = schedule.split(",");
            setDoctorSchedule(scheduleArray)
        }

        //DayPicker
        if (selected !== undefined) {
            setFormData(prevState => {
                return {
                    ...prevState,
                    dia: selected.toDateString()
                }
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(false)
        updateCitas(formData);
    }

    return (
        <div className='appointment'>
            <div className='appointment-header'>
                <Link to="/" className='goback'><MdHome/></Link>
                <div className='img-container'>
                    <Link to={`${isLogged ? "/Dashboard": "/Login"}`} className='login'><MdAccountCircle className='icon' />{isLogged ? JSON.parse(localStorage.getItem("currentUser")).name : "Entrar"}</Link>
                </div>
            </div>
            <div className='appointment-container'>
                <img className="cmdm-logo" src={cmdm} alt='Logo de Centro Medico Divina Misericordia' />
                <div className='form-container'>
                    <form onSubmit={handleSubmit} autoComplete='off' onChange={handleChange} onMouseUp={handleChange}>
                        <h3 className='appointment-h3'>Editar cita</h3>
                        <div className='fullname'>
                            <div>
                                <label htmlFor='name'>Nombre</label>
                                <input placeholder='Nombre de paciente' name='name' defaultValue={formData.name} onChange={handleChange} required/>
                            </div>
                            <div>
                            <label htmlFor='lastname'>Apellido</label>
                            <input placeholder='Apellido del paciente' name='lastname' defaultValue={formData.lastname} onChange={handleChange}  required/>
                            </div>
                        </div>
                        <label htmlFor='address'>Dirección</label>
                        <input placeholder='Escriba dirección del paciente' name='address' defaultValue={formData.address} onChange={handleChange}  required/>
                        <label htmlFor='sex'>Seleccione su sexo</label>
                        <select name='sex' defaultValue={formData.sex} onChange={handleChange} >
                            <option >{formData.sex}</option>
                            <option >Seleccione su sexo</option>
                            <option >Hombre</option>
                            <option >Mujer</option>
                        </select>
                        <label htmlFor='email'>Correo electrónico</label>
                        <input type='email' placeholder='Escriba su correo electrónico' name='email'  defaultValue={formData.email} onChange={handleChange}  required/>
                        <label htmlFor='phone'>Número celular</label>
                        <input type='tel' placeholder='XXX-XXX-XXXX' name='phone'  defaultValue={formData.phone}  onChange={handleChange} required/>
                        <label htmlFor='documenttype'>Tipo de documento</label>
                            <select name='documenttype' value={formData.documenttype}  onChange={handleChange} required>
                                <option >{formData.documenttype}</option>
                                <option>Seleccione tipo de documento</option>
                                <option >Cedula</option>
                                <option >Pasaporte</option>
                            </select>
                            <label htmlFor='document'>Número de documento</label>
                            <input autoComplete='off' name='document' placeholder='Ingrese su número de documento sin guiones (-)' defaultValue={formData.document}  onChange={handleChange} required/>
                        <label htmlFor='service'>Tipo de consulta</label>
                        <select name='service'  defaultValue={formData.service}  onChange={handleChange} required>
                            <option >{formData.service}</option>
                            <option>Seleccione servicio o especialidad</option>
                            {servicesList.map(el => 
                            <option key={nanoid()}>{el}</option>
                            )}
                        </select>
                        <div className='select-anidado'>
                            <label htmlFor='doctor'>Doctor</label>
                            <select name='doctor' defaultValue={formData.doctor}  onChange={handleChange} required>
                                <option >{formData.doctor}</option>
                                <option>Escoja un doctor</option>
                            {formDoctors.map(el =>
                                <option key={nanoid()}>{`${el.gender === "Hombre" ? "Dr " : "Dra"} ${el.name} ${el.lastname}`}</option>
                            )}
                            </select>
                        </div>
                        <label htmlFor='assurance'>Seguro</label>
                        <input placeholder='Seguro medico (escribir NA en caso de no poseer)' name='assurance'  defaultValue={formData.assurance}  onChange={handleChange} required/>
                        <div className='select-anidado'>
                            <label htmlFor='date'>Seleccione hora para la cita</label>
                            <select name='date' defaultValue={formData.date}  onChange={handleChange} required>
                                <option >{formData.date}</option>
                                <option>Selecciona fecha</option>
                            {doctorSchedule.map(el => 
                                <option key={nanoid()}>{el}</option>
                            )}
                            </select>
                        </div>
                        {((formData.date !== "") && (formData.date !== "Selecciona fecha")) && 
                        <DayPicker
                            
                            mode="single"
                            locale={es}
                            selected={selected}
                            onSelect={setSelected}
                            footer={footer}
                            disabled={{before: new Date()}}
                            required
                        />}
                        {<p className={citaUpdated? 'success' : 'error'}>{citaUpdated ? "Cita actualizada exitosamente!" : ""}</p>}
                        {<p className='error'>{error && "Hubo un error, por favor intente mas tarde!"}</p>}
                        <div className='button'>
                            <button type='submit'>Actualizar</button>
                        </div>
                    </form>
                    <ScrollToTop smooth />
                </div>
            </div>
        </div>
    )

}