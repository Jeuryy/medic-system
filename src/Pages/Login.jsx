import './Login.css'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import cmdm from '../assets/img/cmdm.png'
import { Link, useNavigate } from 'react-router-dom';
import { FaHome } from "react-icons/fa";import React, { useState, useEffect } from 'react';
import ScrollToTop from "react-scroll-to-top";
import NotFound from '../components/NotFound';

export default function Login(props) {
    const [users, setUsers] = useState([]);
    const [errorLogging, setErrorLoging] = useState("");
    const {isLogged, setIsLogged} = props;
    const currentUser = props.currentUser;
    const setCurrentUser = props.setCurrentUser;
    const [showPassword, setShowPassword] = useState(false); 
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    useEffect(()=> {
        fetch("http://localhost:5000/users")
        .then(res => res.json())
        .then(data => {
            setUsers(data);
        })
        .catch(err => console.log(err))
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
        //setCurrentUser(formData.email)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        users.map(user => {
            if (user.email === formData.email || user.username === formData.email || user.document === formData.email) {
                if (user.password === formData.password) {
                    setIsLogged(true);
                    localStorage.setItem("isLogged", true)
                    localStorage.setItem("currentUser", JSON.stringify(user))
                    navigate('/profile', {state:user});
                }
            } else {
                setErrorLoging("Credenciales invalidas, intenta de nuevo")
                setInterval(() => {
                    setErrorLoging("")
                }, 3000);
            }
        })
    }
    return (
        <div>
            {isLogged ? (
                <div>
                    <NotFound/>
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
                            <input type='email' placeholder='Escriba aqui' name='email' defaultValue={formData.email}  onChange={handleChange} required/>
                            <label htmlFor='password1'>Escriba su contraseña</label>
                            <div className='login-password'>
                                <input type={showPassword? "text" : "password"} name='password' placeholder='Clave' defaultValue={formData.password}  onChange={handleChange} required/>
                                {showPassword ? <FaEye onClick={() => handlePassword()}/> : <FaEyeSlash onClick={handlePassword}/>}
                            </div>
                            <p className='error'>{errorLogging}</p>
                            <div className='button'>
                                <button type='submit'>Iniciar Sesion</button>
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