import './AddDoctor.css'
import React, { useState } from 'react';
import ScrollToTop from "react-scroll-to-top";
import { nanoid } from 'nanoid';
import NotFound from '../components/NotFound';
import UserMenu from '../Pages/UserMenu';
import UserHeader from '../components/UserHeader';

export default function AddDoctor(props) {
    const [doctorAdded, setDoctorAdded] = useState(false)
    const {isLogged, setIsLogged} = props;
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        lastname: "",
        service: "",
        email: "",
        phone: "",
        gender: "",
        schedule: "",
        description: ""
    })

    const addDoctor = async (data) => {
        const settings = {
            method: "POST",
            //mode: "no-cors",
            headers: {
                "Content-type": "application/json",
                'Access-Control-Allow-Origin':'*'
            },
            body: JSON.stringify(data) 
        };
            await fetch("http://localhost:5000/doctors", settings)
            .then(res => res.json())
            .then(resData => {console.log(resData)
                setDoctorAdded(true)
            })
            .catch(e => console.log(`Error catched: ${e}`))    
    }

    const handleChange = (e) => {
        setFormData(prevState => {
            return {
                ...prevState,
                id: nanoid(),
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setDoctorAdded(false);
        addDoctor(formData);
    }
    const clearValues = () => {
        setFormData({
            id: "",
            name: "",
            lastname: "",
            service: "",
            email: "",
            phone: "",
            gender: "",
            schedule: "",
            description: ""
        });
        setDoctorAdded(false);
    }
    return (
        <div>
            {isLogged ? (
                <div className='profile-register-container'>
                    <div className='dashboard'>
                        <UserMenu/>
                    </div>
                    <div className='register-form'>
                    <UserHeader/>
                    <div className='register-form-container'>
                    <div className='register-form-form-container'>
                        <h3>AGREGAR DOCTOR</h3>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor='name'>Nombre</label>
                            <input placeholder='Escriba su nombre' name='name'value={formData.name}  onChange={handleChange} required/>
                            <label htmlFor='lastname'>Apellido</label>
                            <input placeholder='Escriba su apellido(s)' name='lastname' value={formData.lastname}  onChange={handleChange} required/>
                            <label htmlFor='service'>Especialidad</label>
                            <input placeholder='Escriba especialidad aqui' name='service' value={formData.service}  onChange={handleChange} required/>
                            <label htmlFor='service'>Descripcion</label>
                            <textarea placeholder='Descripcion de la especialidad' name='description' value={formData.description}  onChange={handleChange} required/>
                            <label htmlFor='email'>Correo electrónico</label>
                            <input type='email' placeholder='Escriba su correo electrónico' name='email' value={formData.email}  onChange={handleChange}/>
                            <label htmlFor='phone'>Número celular</label>
                            <input type='tel' placeholder='XXX-XXX-XXXX' name='phone'value={formData.phone}  onChange={handleChange}/>
                            <label htmlFor='gender'>Seleccione su sexo</label>
                            <select name='gender' value={formData.gender}  onChange={handleChange} required>
                                <option >...</option>    
                                <option >Hombre</option>
                                <option >Mujer</option>
                            </select>
                            <label htmlFor='schedule'>Horario</label>
                            <input placeholder='Horarios de servicios' name='schedule' value={formData.schedule}  onChange={handleChange} required/>
                            {<p className={doctorAdded? 'success' : 'error'}>{doctorAdded ? "Doctor agregado exitosamente!" : ""}</p>}
                            <div className='button'>
                                <button type='submit'>Crear</button>
                                <button onClick={clearValues}>Borrar todo</button>
                            </div>
                        </form>
                    </div>        
                </div>
                </div>
            </div>
            ) : (
                <NotFound/>
            )}
            <ScrollToTop smooth />
    </div>
    )

}