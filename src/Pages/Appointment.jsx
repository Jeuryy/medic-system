import './Appointment.css'
import React, { useState, useEffect } from 'react';
import { MdAccountCircle } from "react-icons/md";
import cmdm from '../assets/img/cmdm.png'
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import ScrollToTop from "react-scroll-to-top";
import { nanoid } from 'nanoid';

export default function Appointment(props) {
    const [dbData, setdbData] = useState([])
    const {isLogged, setIsLogged} = props
    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        address: "",
        email: "",
        phone: "",
        sex: "",
        service: "",
        doctor: "",
        assurance: "",
        appttime: ""

    })

    useEffect( () => {
        const getData = async () => {
            const res = await fetch("http://localhost:8080/users")
            const data = await res.json();
            setdbData(data.users)
        }
        getData();
    },[])

    const handleChange = (e) => {
        setFormData(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }

    return (
        <div className='appointment'>
            <div className='appointment-header'>
                <Link to="/" className='goback'><IoMdArrowBack /></Link>
                <div className='img-container'>
                    <Link to={`${isLogged ? "/Dashboard": "/Login"}`} className='login'><MdAccountCircle className='icon' />{isLogged ? "Name" : "Entrar"}</Link>
                </div>
            </div>
            <div className='appointment-container'>
                <img className="cmdm-logo" src={cmdm} alt='Logo de Centro Medico Divina Misericordia' />
                <div className='form-container'>
                    <form onSubmit={handleSubmit}>
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
                            <option >Hombre</option>
                            <option >Mujer</option>
                        </select>
                        <label htmlFor='service'>Tipo de consulta</label>
                        <select name='service'  value={formData.service}  onChange={handleChange} required>
                        {dbData.map(el => 
                            <option key={nanoid()}>{el.lastname}</option>
                        )}
                        </select>
                        <label htmlFor='doctor'>Doctor</label>
                        <select name='doctor' value={formData.doctor}  onChange={handleChange} required>
                        {dbData.map(el => 
                            <option key={nanoid()}>{el.document}</option>
                        )}
                        </select>
                        <label htmlFor='assurance'>Seguro</label>
                        <input placeholder='Seguro medico' name='assurance'  value={formData.assurance}  onChange={handleChange} required/>
                        <label htmlFor='apptime'>Seleccione hora para la cita</label>
                        <select name='appttime' value={formData.appttime}  onChange={handleChange} required>
                        {dbData.map(el => 
                            <option key={nanoid()}>{el.email}</option>
                        )}
                        </select>
                        <div className='button'>
                            <button type='submit'>Confirmar</button>
                        </div>
                    </form>
                    <ScrollToTop smooth />
                </div>
            </div>
        </div>
    )

}