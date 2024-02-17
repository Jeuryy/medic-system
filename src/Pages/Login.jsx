import './Login.css'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import cmdm from '../assets/img/cmdm.png'
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";import React, { useState, useEffect } from 'react';
import ScrollToTop from "react-scroll-to-top";
import UserMenu from './UserMenu';
import UserHeader from '../components/UserHeader';

export default function Login(props) {
    const [dbData, setdbData] = useState([])
    const {isLogged, setIsLogged} = props
    const [showPassword, setShowPassword] = useState(false); 
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    useEffect( () => {
        const getData = async () => {
            const res = await fetch("http://localhost:8080/users")
            const data = await res.json();
            setdbData(data.users)
            console.log(data.users)
        }
        
        getData();
    }, [])
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

    const handleLoggedIn = () => {
        setIsLogged(prevState => !prevState)
    }

    return (
        <div>
            {isLogged ? (
                <div className='profile-container'>
                    <div className='dashboard'>
                        <UserMenu/>
                    </div>
                    <div className='profile-content'>
                        <UserHeader/>
                        <div className='profile-name'>
                            <p>jeurypierre</p>
                            <Link to="/Login" onClick={handleLoggedIn}> Cerrar cesion</Link>
                        </div>
                        <div className='profile-info'>
                            <div className='basic-information'>
                                <p className='basic-information-title'>Información básica</p>
                                <div className='basic-information-content'>
                                    <div>
                                        <p className='profile-info-title'>Nombre completo</p>
                                        <p className='profile-info-data'>Jeury Pierre Dide</p>
                                    </div>
                                    <div>
                                        <p className='profile-info-title'>Correo</p>
                                        <p className='profile-info-data'>elyruej.102004@gmail.com</p>
                                    </div>
                                    <div>
                                        <p className='profile-info-title'>Usuario</p>
                                        <p className='profile-info-data'>jeurypierre</p>
                                    </div>
                                    <div>
                                        <p className='profile-info-title'>Contraseña</p>
                                        <Link to="/Users" className='profile-info-data'>Administrar contraseña</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='basic-information'>
                            <p className='basic-information-title'>Información adicional</p>
                            <div className='basic-information-content'>
                                <div>
                                    <p className='profile-info-title'>Género</p>
                                    <p className='profile-info-data'>Hombre</p>
                                </div>
                                <div>
                                    <p className='profile-info-title'>Tipo de documento</p>
                                    <p className='profile-info-data'>Cédula</p>
                                </div>
                                <div>
                                    <p className='profile-info-title'>Documento</p>
                                    <p className='profile-info-data'>40233365150</p>
                                </div>
                                <div>
                                    <p className='profile-info-title'>Dirección</p>
                                    <p to="/Users" className='profile-info-data'>C/ Felix Abreu #17 Bienvenido Manoguayabo</p>
                                </div>
                                <div>
                                    <p className='profile-info-title'>Teléfono</p>
                                    <p to="/Users" className='profile-info-data'>8299851200</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='edit-user'>
                            <Link to="/Users">Editar usuarios</Link>
                        </div>
                    </div>
                </div>
                ) : (
                <div className='login-form'>
                <div className='login-form-header'>
                    <Link to="/" className='goback'><FaHome /></Link>
                </div>
                <div className='login-form-container'>
                    <img className="cmdm-logo" src={cmdm} alt='Logo de Centro Medico Divina Misericordia' />
                    <div className='login-form-form-container'>
                        <h3>INICIAR SESION</h3>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor='email'>Correo electrónico, usuario o documento</label>
                            <input type='email' placeholder='Escriba aqui' name='email' value={formData.email}  onChange={handleChange} required/>
                            <label htmlFor='password1'>Escriba su contraseña</label>
                            <div className='login-password'>
                                <input type={showPassword? "text" : "password"} name='password' placeholder='Clave' value={formData.password}  onChange={handleChange} required/>
                                {showPassword ? <FaEye onClick={() => handlePassword()}/> : <FaEyeSlash onClick={handlePassword}/>}
                            </div>
                    {/*<p>No tienes una cuenta? <Link to="/registrar">Registrate aquí</Link></p>*/}
                            <div className='button'>
                                <button type='submit'>Crear</button>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            )
            }
            <ScrollToTop smooth />
        
        </div>
    )

}