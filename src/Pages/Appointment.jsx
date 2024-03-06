import './Appointment.css'
import React, { useState, useEffect, useId } from 'react';
import { MdAccountCircle, MdHome } from "react-icons/md";
import cmdm from '../assets/img/cmdm.png'
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import ScrollToTop from "react-scroll-to-top";
import { nanoid } from 'nanoid';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export default function Appointment(props) {
    const [citaAdded, setCitaAdded] = useState(false)
    const [doctors, setDoctors] = useState([]);
    const [service, setService] = useState("");
    const [doctor, setDoctor] = useState([]);
    const [schedule, setSchedule] = useState("");
    const [doctorSchedule, setDoctorSchedule] = useState([])
    const [selected, setSelected] = useState();
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
    })

    useEffect(()=> {
        fetch("http://localhost:5000/doctors")
        .then(res => res.json())
        .then(data => {
            setDoctors(data)
        })
        .catch(err => console.log(err))
    }, [])

    let footer = <p>{`Seleccione el dia para la cita, con relacion al horario seleccionado. (${(formData.date)})`}</p>;
        if (selected) {
            footer = <p>Ha seleccionado {format(selected, 'PP')}.</p>;
        }

    //Function to POST Appointment DATA to the db
    const addCitas = async (data) => {
        const settings = {
            method: "POST",
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
                setCitaAdded(true);
                console.log(resData);
            })
            .catch(e => {
                console.log(`Error catched: ${e}`);
                setCitaAdded(false)
            })
    }


    const handleChange = (e) => {
        setService(formData.service)
        setDoctor(doctors.filter(doctor => doctor.service === service))
        setSchedule(doctor.filter(doctor => doctor.service === service))
        let [arrayObject] = schedule
        setFormData(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
        if (arrayObject !== undefined) {
            let {schedule} = arrayObject;
            let scheduleArray = schedule.split(",");
            setDoctorSchedule(scheduleArray)
        }
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
        console.log(formData)
        //setCitaAdded(false);
        //addCitas(formData);
    }
    const clearValues = (e) => {
        e.preventDefault();
        setFormData({
            id: "",
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
            assurane: "",
            date: "",
            dia: "",
        });
        setCitaAdded(false);
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
                        <h3 className='appointment-h3'>Agendar cita</h3>
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
                        <select name='sex' value={formData.sex} onChange={handleChange} >
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
                                <option defaultValue="...">...</option>
                                <option >Cedula</option>
                                <option >Pasaporte</option>
                            </select>
                            <label htmlFor='document'>Número de documento</label>
                            <input autoComplete='off' name='document' placeholder='Ingrese su número de documento sin guiones (-)' defaultValue={formData.document}  onChange={handleChange} required/>
                        <label htmlFor='service'>Tipo de consulta</label>
                        <select name='service'  value={formData.service}  onChange={handleChange} required>
                            <option>Seleccione servicio o especialidad</option>
                            {doctors.map(el => 
                            <option key={nanoid()}>{el.service}</option>
                            )}
                        </select>
                        <div className='select-anidado'>
                            <label htmlFor='doctor'>Doctor</label>
                            <select name='doctor' value={formData.doctor}  onChange={handleChange} required>
                                <option>Escoja un doctor</option>
                            {doctor.map(el =>
                                <option key={nanoid()}>{`${el.gender === "Hombre" ? "Dr " : "Dra"} ${el.name} ${el.lastname}`}</option>
                            )}
                            </select>
                        </div>
                        <label htmlFor='assurance'>Seguro</label>
                        <input placeholder='Seguro medico (escribir NA en caso de no poseer)' name='assurance'  defaultValue={formData.assurance}  onChange={handleChange} required/>
                        <div className='select-anidado'>
                            <label htmlFor='date'>Seleccione hora para la cita</label>
                            <select name='date' value={formData.date}  onChange={handleChange} required>
                                <option>Selecciona fecha</option>
                            {doctorSchedule.map(el => 
                                <option key={nanoid()}>{el}</option>
                            )}
                            </select>
                        </div>
                        {((formData.date !== "") && (formData.date !== "Selecciona fecha")) && <DayPicker
                            mode="single"
                            locale={es}
                            selected={selected}
                            onSelect={setSelected}
                            footer={footer}
                        />}
                        {<p className={citaAdded? 'success' : 'error'}>{citaAdded ? "Cita agendada exitosamente!" : ""}</p>}
                        <div className='button'>
                            <button type='submit'>Confirmar</button>
                            <button onClick={clearValues}>Borrar todo</button>
                        </div>
                    </form>
                    <ScrollToTop smooth />
                </div>
            </div>
        </div>
    )

}