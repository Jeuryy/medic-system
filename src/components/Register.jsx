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
    const handlePassword = () => {
        setShowPassword(prevState => !prevState)
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
                    <form>
                        <label htmlFor='name'>Nombre</label>
                        <input placeholder='Escriba su nombre' name='name'/>
                        <label htmlFor='lastname'>Apellido</label>
                        <input placeholder='Escriba su apellido(s)' name='lastname'/>
                        <label htmlFor='address'>Dirección</label>
                        <input placeholder='Escriba dirección aqui' name='address'/>
                        <label htmlFor='email'>Correo electrónico</label>
                        <input type='email' placeholder='Escriba su correo electrónico' name='email'/>
                        <label htmlFor='password1'>Escriba su contraseña</label>
                        <div className='register-password'>
                            <input type={showPassword? "text" : "password"} name='password1' placeholder='Clave'/>
                            {showPassword ? <FaEye onClick={() => handlePassword()}/> : <FaEyeSlash onClick={handlePassword}/>}
                        </div>
                        <label htmlFor='password2'>Repita la contraseña</label>
                        <div className='register-password'>
                            <input type={showPassword? "text" : "password"} name='password' placeholder='Confirme clave'/>
                        </div>
                        <label htmlFor='phone'>Número celular</label>
                        <input type='tel' placeholder='XXX-XXX-XXXX' name='phone'/>
                        <label htmlFor='sex'>Seleccione su sexo</label>
                        <select name='sex'>
                            <option>Opcion 1</option>
                            <option>Opcion 2</option>
                            <option>Opcion 2</option>
                        </select>
                        <label htmlFor='documenttype'>Tipo de documento</label>
                        <select name='documenttype'>
                            <option>Cédula</option>
                            <option>Pasaporte</option>
                        </select>
                        <label htmlFor='document'>Número de documento</label>
                        <input name='document' placeholder='Ingrese su número de documento'/>
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