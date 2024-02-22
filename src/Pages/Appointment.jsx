import './Appointment.css'
import React, { useState, useEffect } from 'react';
import { MdAccountCircle } from "react-icons/md";
import cmdm from '../assets/img/cmdm.png'
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import ScrollToTop from "react-scroll-to-top";
import { nanoid } from 'nanoid';

export default function Appointment(props) {
    const [citaAdded, setCitaAdded] = useState(false)
    const [doctors, setDoctors] = useState([]);
    const [service, setService] = useState("");
    const [doctor, setDoctor] = useState([]);
    const [schedule, setSchedule] = useState("");
    const [doctorSchedule, setDoctorSchedule] = useState([])
    const {isLogged, setIsLogged} = props
    const [formData, setFormData] = useState({
        id: nanoid(),
        name: "",
        lastname: "",
        address: "",
        email: "",
        phone: "",
        sex: "",
        service: "",
        doctor: "",
        assurance: "",
        date: ""

    })


    useEffect(()=> {
        fetch("http://localhost:5000/doctors")
        .then(res => res.json())
        .then(data => {
            setDoctors(data)
        })
        .catch(err => console.log(err))
    }, [])

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
                if (formData.password1 !== formData.password2) {
                } else {
                    setCitaAdded(true);
                    console.log(resData);
                }
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
            let scheduleArray = schedule.split("\n");
            setDoctorSchedule(scheduleArray)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        //setCitaAdded(false);
        //addCitas(formData);
    }
    const clearValues = () => {
        setFormData({
            id: "",
            name: "",
            lastname: "",
            address: "",
            email: "",
            phone: "",
            sex: "",
            service: "",
            doctor: "",
            assurane: "",
            date: ""
        });
        setCitaAdded(false);
    }

    return (
        <div className='appointment'>
            <div className='appointment-header'>
                <Link to="/" className='goback'><IoMdArrowBack /></Link>
                <div className='img-container'>
                    <Link to={`${isLogged ? "/Dashboard": "/Login"}`} className='login'><MdAccountCircle className='icon' />{isLogged ? JSON.parse(localStorage.getItem("currentUser")).name : "Entrar"}</Link>
                </div>
            </div>
            <div className='appointment-container'>
                <img className="cmdm-logo" src={cmdm} alt='Logo de Centro Medico Divina Misericordia' />
                <div className='form-container'>
                    <form onSubmit={handleSubmit} autoComplete='off'>
                        <h3>Agendar cita</h3>
                        <div className='fullname'>
                            <div>
                                <label htmlFor='name'>Nombre</label>
                                <input placeholder='Nombre de paciente' name='name' value={formData.name} onChange={handleChange} required/>
                            </div>
                            <div>
                            <label htmlFor='lastname'>Apellido</label>
                            <input placeholder='Apellido del paciente' name='lastname' value={formData.lastname} onChange={handleChange}  required/>
                            </div>
                        </div>
                        <label htmlFor='address'>Dirección</label>
                        <input placeholder='Escriba dirección del paciente' name='address' value={formData.address} onChange={handleChange}  required/>
                        <label htmlFor='email'>Correo electrónico</label>
                        <input type='email' placeholder='Escriba su correo electrónico' name='email'  value={formData.email} onChange={handleChange}  required/>
                        <label htmlFor='phone'>Número celular</label>
                        <input type='tel' placeholder='XXX-XXX-XXXX' name='phone'  value={formData.phone}  onChange={handleChange} required/>
                        <label htmlFor='sex'>Seleccione su sexo</label>
                        <select name='sex' value={formData.sex} onChange={handleChange} >
                            <option >Seleccione su sexo</option>
                            <option >Hombre</option>
                            <option >Mujer</option>
                        </select>
                        <label htmlFor='service'>Tipo de consulta</label>
                        <select name='service'  value={formData.service}  onChange={handleChange} required>
                            <option>Seleccione servicio o especialidad</option>
                            {doctors.map(el => 
                            <option key={nanoid()}>{el.service}</option>
                            )}
                        </select>
                        <label htmlFor='assurance'>Seguro</label>
                        <input placeholder='Seguro medico (escribir NA en caso de no poseer)' name='assurance'  value={formData.assurance}  onChange={handleChange} required/>
                        <div className='select-anidado'>
                            <label htmlFor='doctor'>Doctor</label>
                            <select name='doctor' value={formData.doctor}  onChange={handleChange} required>
                                <option>Escoja un doctor</option>
                            {doctor.map(el =>
                                <option key={nanoid()}>{`${el.gender === "Hombre" ? "Dr " : "Dra"} ${el.name} ${el.lastname}`}</option>
                            )}
                            </select>
                        </div>
                        <div className='select-anidado'>
                            <label htmlFor='date'>Seleccione hora para la cita</label>
                            <select name='date' value={formData.date}  onChange={handleChange} required>
                                <option>Selecciona fecha</option>
                            {doctorSchedule && doctorSchedule.map(el => 
                                <option key={nanoid()}>{el}</option>
                            )}
                            </select>
                        </div>
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