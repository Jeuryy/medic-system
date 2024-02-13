import './Register.css'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import cmdm from '../assets/img/cmdm.png'
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import React, { useState, useEffect } from 'react';
import ScrollToTop from "react-scroll-to-top";
import { nanoid } from 'nanoid';

export default function Register() {
    const [showPassword, setShowPassword] = useState(false); 
    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        address: "",
        email: "",
        password1: "",
        password2: "",
        phone: "",
        sex: "",
        documenttype: "",
        document: ""
    })
    const handlePassword = () => {
        setShowPassword(prevState => !prevState)
    }
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
        <div className='register-form'>
            <div className='register-form-header'>
                <Link to="/" className='goback'><IoMdArrowBack /></Link>
            </div>
            <div className='register-form-container'>
                <img className="cmdm-logo" src={cmdm} alt='Logo de Centro Medico Divina Misericordia' />
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
                            <option>Opcion 1</option>
                            <option>Opcion 2</option>
                            <option>Opcion 2</option>
                        </select>
                        <label htmlFor='documenttype'>Tipo de documento</label>
                        <select name='documenttype' value={formData.documenttype}  onChange={handleChange} required>
                            <option>Cédula</option>
                            <option>Pasaporte</option>
                        </select>
                        <label htmlFor='document'>Número de documento</label>
                        <input name='document' placeholder='Ingrese su número de documento' value={formData.document}  onChange={handleChange} required/>
                        <p>Ya estás registrado? <Link to="/login">Inicia sesión</Link></p>
                        <div className='button'>
                            <button type='submit'>Crear</button>
                        </div>
                    </form>
                </div>
            </div>
            <ScrollToTop smooth />
        </div>
    )

}