import './Login.css'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import cmdm from '../assets/img/cmdm.png'
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import React, { useState, useEffect } from 'react';
import ScrollToTop from "react-scroll-to-top";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false); 
    const handlePassword = () => {
        setShowPassword(prevState => !prevState)
    }

    return (
        <div className='login-form'>
            <div className='login-form-header'>
                <Link to="/" className='goback'><IoMdArrowBack /></Link>
            </div>
            <div className='login-form-container'>
                <img className="cmdm-logo" src={cmdm} alt='Logo de Centro Medico Divina Misericordia' />
                <div className='login-form-form-container'>
                    <h3>INICIAR SESION</h3>
                    <form>
                        <label htmlFor='email'>Correo electrónico, usuario o documento</label>
                        <input type='email' placeholder='Escriba aqui' name='email'/>
                        <label htmlFor='password1'>Escriba su contraseña</label>
                        <div className='login-password'>
                            <input type={showPassword? "text" : "password"} name='password' placeholder='Clave'/>
                            {showPassword ? <FaEye onClick={() => handlePassword()}/> : <FaEyeSlash onClick={handlePassword}/>}
                        </div>
                        <p>No tienes una cuenta? <Link to="/registrarme">Registrate aquí</Link></p>
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