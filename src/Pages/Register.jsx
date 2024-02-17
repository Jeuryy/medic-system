import './Register.css'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Await, Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import ScrollToTop from "react-scroll-to-top";
import { nanoid } from 'nanoid';
import { Input } from '@mui/material';
import NotFound from '../components/NotFound';
import UserMenu from './UserMenu';
import UserHeader from '../components/UserHeader';

export default function Register(props) {
    const [dbData, setdbData] = useState([])
    const {isLogged, setIsLogged} = props;
    const [showPassword, setShowPassword] = useState(false); 
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        lastname: "",
        address: "",
        email: "",
        password1: "",
        password2: "",
        phone: "",
        sex: "",
        documenttype: "",
        document: "",
        roll: 3,
        username: ""
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
                        <h3>CREAR USUARIO</h3>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor='name'>Nombre</label>
                            <input placeholder='Escriba su nombre' name='name'value={formData.name}  onChange={handleChange} required/>
                            <label htmlFor='lastname'>Apellido</label>
                            <input placeholder='Escriba su apellido(s)' name='lastname' value={formData.lastname}  onChange={handleChange} required/>
                            <label htmlFor='address'>Dirección</label>
                            <input placeholder='Escriba dirección aqui' name='address' value={formData.address}  onChange={handleChange} required/>
                            <label htmlFor='email'>Correo electrónico</label>
                            <input type='email' placeholder='Escriba su correo electrónico' name='email' value={formData.email}  onChange={handleChange} required/>
                            <label htmlFor='password1'>Escriba su contraseña</label>
                            <div className='register-password'>
                                <input type={showPassword? "text" : "password"} name='password1' placeholder='Clave' value={formData.password1}  onChange={handleChange} required/>
                                {showPassword ? <FaEye onClick={() => handlePassword()}/> : <FaEyeSlash onClick={handlePassword}/>}
                            </div>
                            <label htmlFor='password2'>Repita la contraseña</label>
                            <div className='register-password'>
                                <input type={showPassword? "text" : "password"} name='password2' placeholder='Confirme clave' value={formData.password2}  onChange={handleChange} required/>
                            </div>
                            <label htmlFor='phone'>Número celular</label>
                            <input type='tel' placeholder='XXX-XXX-XXXX' name='phone'value={formData.phone}  onChange={handleChange} required/>
                            <label htmlFor='sex'>Seleccione su sexo</label>
                            <select name='sex' value={formData.sex}  onChange={handleChange} required>
                                <option >Hombre</option>
                                <option >Mujer</option>
                            </select>
                            <label htmlFor='documenttype'>Tipo de documento</label>
                            <select name='documenttype' value={formData.documenttype}  onChange={handleChange} required>
                                <option >Cedula</option>
                                <option >Pasaporte</option>
                            </select>
                            <label htmlFor='document'>Número de documento</label>
                            <input name='document' placeholder='Ingrese su número de documento' value={formData.document}  onChange={handleChange} required/>
                            {/*<p>Ya estás registrado? <Link to="/login">Inicia sesión</Link></p>*/}
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