import './Register.css'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ScrollToTop from "react-scroll-to-top";
import { nanoid } from 'nanoid';
import NotFound from '../components/NotFound';
import UserMenu from './UserMenu';
import UserHeader from '../components/UserHeader';
import Login from './Login';

export default function Register(props) {
    const {isLogged, setIsLogged} = props;
    const [showPassword, setShowPassword] = useState(false); 
    const [passwordMatches, setPasswordMatches] = useState(true)
    const [users, setUsers] = useState([]);
    const [userExists, setUserExists] = useState(false);
    const [disableSend, setDisableSend] = useState(true)
    const [userAdded, setUserAdded] = useState(false)
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
    const navigate = useNavigate();

    useEffect(()=> {
        fetch("http://localhost:5000/users")
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(err => console.log(err))
    }, [])

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
            await fetch("http://localhost:5000/users/", settings)
            .then(res => res.json())
            .then(resData => {
                setPasswordMatches(true);
                setUserAdded(true)
                console.log(resData);
                setTimeout(() => {
                    navigate("/users")
                }, 1000)
            })
            .catch(e => {
                console.log(`Error catched: ${e}`);
                setUserAdded(false)
            })
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
    const handleUserExist = () => {
        if (formData.password1 !== formData.password2) {
            setPasswordMatches(false);
            setDisableSend(true)
        } else {
            users.map(user => {
                if (user.email === (formData.email).toLowerCase()) {
                    setDisableSend(true)
                    setUserExists(true)
                } else {
                    setDisableSend(false)
                    setUserExists(false)
                    setPasswordMatches(true)
                }
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserAdded(false);
        addUsers(formData);
    }

    const clearValues = () => {
        setFormData({
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
        });
        setUserAdded(false);
        setUserExists(false)
    }

    const myStyle = {
        backgroundColor: disableSend && "grey"
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
                        <form onSubmit={handleSubmit} onChange={handleUserExist} onMouseDown={handleUserExist} autoComplete='off'>
                            <label htmlFor='name'>Nombre</label>
                            <input autoComplete='off' placeholder='Escriba su nombre' name='name' defaultValue={formData.name}  onChange={handleChange} required maxLength="32" pattern="[A-Za-z]{1,32}"/>
                            <label htmlFor='lastname'>Apellido</label>
                            <input autoComplete='off' placeholder='Escriba su apellido(s)' name='lastname' defaultValue={formData.lastname}  onChange={handleChange} maxLength="50" required/>
                            <label htmlFor='address'>Dirección</label>
                            <input autoComplete='off' placeholder='Escriba dirección aqui' name='address' defaultValue={formData.address}  onChange={handleChange} maxLength="150" required/>
                            <label htmlFor='email'>Correo electrónico</label>
                            <input autoComplete='off' type='email' placeholder='Escriba su correo electrónico' name='email' defaultValue={formData.email}  onChange={handleChange} required/>
                            {userExists && <p className='error' style={{marginBottom: 0}}>Usuario ya registrado, intente con otro correo</p>}
                            <label htmlFor='password1' style={{marginTop: "30px"}}>Escriba su contraseña</label>
                            <div className='register-password'>
                                <input type={showPassword? "text" : "password"} name='password1' placeholder='Clave' defaultValue={formData.password1}  onChange={handleChange} minLength="8" required/>
                                {showPassword ? <FaEye onClick={() => handlePassword()}/> : <FaEyeSlash onClick={handlePassword}/>}
                            </div>
                            <label htmlFor='password2'>Repita la contraseña</label>
                            <div className='register-password'>
                                <input type={showPassword? "text" : "password"} name='password2' placeholder='Confirme clave' defaultValue={formData.password2}  onChange={handleChange} minLength="8" required/>
                            </div>
                            {!passwordMatches && <p className='error'>Las contraseñas no coinciden</p>}
                            <label htmlFor='phone' style={{marginTop: "30px"}}>Número celular</label>
                            <input autoComplete='off' type='tel' placeholder='XXX-XXX-XXXX' name='phone'value={formData.phone}  onChange={handleChange} required/>
                            <label htmlFor='sex'>Seleccione su sexo</label>
                            <select name='sex' value={formData.sex}  onChange={handleChange} required>
                                <option defaultValue="...">...</option>
                                <option >Hombre</option>
                                <option >Mujer</option>
                            </select>
                            <label htmlFor='documenttype'>Tipo de documento</label>
                            <select name='documenttype' value={formData.documenttype}  onChange={handleChange} required>
                                <option defaultValue="...">...</option>
                                <option >Cedula</option>
                                <option >Pasaporte</option>
                            </select>
                            <label htmlFor='document'>Número de documento</label>
                            <input autoComplete='off' name='document' placeholder='Ingrese su número de documento' defaultValue={formData.document}  onChange={handleChange} required/>
                            {<p className={userAdded? 'success' : 'error'}>{(userAdded && !userExists) ? "Usuario agregado exitosamente!" : ""}</p>}
                            <div className='button'>
                                <button type='submit' disabled={disableSend} style={myStyle}>Crear</button>
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