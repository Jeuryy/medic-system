import './AddDoctor.css'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Await, Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import ScrollToTop from "react-scroll-to-top";
import { nanoid } from 'nanoid';
import { Input } from '@mui/material';
import NotFound from '../components/NotFound';
import UserMenu from '../Pages/UserMenu';
import UserHeader from '../components/UserHeader';

export default function AddServices(props) {
    const [dbData, setdbData] = useState([])
    const {isLogged, setIsLogged} = props;
    const [showPassword, setShowPassword] = useState(false); 
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        description: "",
        doctors: "",
        schedule: "",
    })
    useEffect( () => {
        const getData = async () => {
            const res = await fetch("http://localhost:8080/users")
            const data = await res.json();
            setdbData(data.users)
        }
        getData();
    },[])
    const addUsers = async (data) => {
        const settings = {
            method: "POST",
            //mode: "no-cors",
            headers: {
                "Content-type": "application/json",
                'Access-Control-Allow-Origin':'*'
            },
            body: JSON.stringify(data) 
        };
            await fetch("http://localhost:8080/users", settings)
            .then(res => res.json())
            .then(resData => console.log(resData))
            .catch(e => console.log(`Error catched: ${e}`))    
    }
    const handlePassword = () => {
        setShowPassword(prevState => !prevState)
    }
    const handleChange = (e) => {
        setFormData(prevState => {
            return {
                ...prevState,
                id: nanoid(),
                username: `${(formData.name).toLowerCase()}${(formData.lastname).toLowerCase().substring(0, formData.lastname.indexOf(" "))}`,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addUsers(formData);
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
                        <h3>AGREGAR SERVICIO</h3>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor='name'>Nombre</label>
                            <input placeholder='Nombre del servicio o especialidad' name='name'value={formData.name}  onChange={handleChange} required/>
                            <label htmlFor='description'>Descripcion</label>
                            <input placeholder='Descripcion del servicio' name='description' value={formData.lastname}  onChange={handleChange} required/>
                            <label htmlFor='doctors'>Doctores</label>
                            <input placeholder='Doctores de la especialidad' name='doctors' value={formData.service}  onChange={handleChange} required/>
                            <label htmlFor='schedule'>Schedule</label>
                            <input placeholder='Horarios de disponibilidad' name='schedule' value={formData.email}  onChange={handleChange} required/>
                            <div className='button'>
                                <button type='submit'>Crear</button>
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