import './Profile.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ScrollToTop from "react-scroll-to-top";
import UserMenu from '../Pages/UserMenu';
import UserHeader from '../components/UserHeader';
import NotFound from '../components/NotFound';

export default function Profile(props) {
    const [users, setUsers] = useState([]);
    const {isLogged, setIsLogged} = props;
    const currentUser = props.currentUser;
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=> {
        fetch("http://localhost:5000/users")
        .then(res => res.json())
        .then(data => {
            setUsers(data);
        })
        .catch(err => console.log(err))
    }, [])

    const handleLoggedIn = () => {
        setIsLogged(false)
        localStorage.removeItem("isLogged")
        localStorage.removeItem("currentUser")
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
                            <p>{JSON.parse(localStorage.getItem("currentUser")).username}</p>
                            <Link to="/Login" onClick={handleLoggedIn}> Cerrar cesion</Link>
                        </div>
                        <div className='profile-info'>
                            <div className='basic-information'>
                                <p className='basic-information-title'>Información básica</p>
                                <div className='basic-information-content'>
                                    <div>
                                        <p className='profile-info-title'>Nombre completo</p>
                                        <p className='profile-info-data'>{JSON.parse(localStorage.getItem("currentUser")).name + " " + 
                                            JSON.parse(localStorage.getItem("currentUser")).lastname}
                                        </p>
                                    </div>
                                    <div>
                                        <p className='profile-info-title'>Correo</p>
                                        <p className='profile-info-data'>{JSON.parse(localStorage.getItem("currentUser")).email}</p>
                                    </div>
                                    <div>
                                        <p className='profile-info-title'>Usuario</p>
                                        <p className='profile-info-data'>{JSON.parse(localStorage.getItem("currentUser")).username}</p>
                                    </div>
                                    <div>
                                        <p className='profile-info-title'>Contraseña</p>
                                        <button  
                                            className='profile-info-data button-password'
                                            onClick={() => navigate("/users")}>Administrar contraseña</button>
                                    </div>
                                </div>
                            </div>
                            <div className='basic-information'>
                            <p className='basic-information-title'>Información adicional</p>
                            <div className='basic-information-content'>
                                <div>
                                    <p className='profile-info-title'>Género</p>
                                    <p className='profile-info-data'>{JSON.parse(localStorage.getItem("currentUser")).gender}</p>
                                </div>
                                <div>
                                    <p className='profile-info-title'>Tipo de documento</p>
                                    <p className='profile-info-data'>{JSON.parse(localStorage.getItem("currentUser")).documenttype}</p>
                                </div>
                                <div>
                                    <p className='profile-info-title'>Documento</p>
                                    <p className='profile-info-data'>{JSON.parse(localStorage.getItem("currentUser")).document}</p>
                                </div>
                                <div>
                                    <p className='profile-info-title'>Dirección</p>
                                    <p className='profile-info-data'>{JSON.parse(localStorage.getItem("currentUser")).address}</p>
                                </div>
                                <div>
                                    <p className='profile-info-title'>Teléfono</p>
                                    <p className='profile-info-data'>{JSON.parse(localStorage.getItem("currentUser")).phone}</p>
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
                <div>
                    <NotFound/>
                </div>
            )
            }
            <ScrollToTop smooth />
        
        </div>
    )

}