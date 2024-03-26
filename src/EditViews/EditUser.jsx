import UserMenu from '../Pages/UserMenu';
import NotFound from '../components/NotFound';
import UserHeader from '../components/UserHeader';
import './EditUser.css'
import { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import ScrollToTop from 'react-scroll-to-top';
import { useLocation, useNavigate } from 'react-router-dom';
import MyModal from '../components/MyModal';
import Login from '../Pages/Login';

export default function EditUser (props) {
    const {isLogged, setIsLogged} = props;
    const [showPassword, setShowPassword] = useState(false); 
    const [passwordMatches, setPasswordMatches] = useState(true)
    const [disableSend, setDisableSend] = useState(false)
    const [userUpdated, setUserUpdated] = useState(false)
    const [error, setError] = useState(false)
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        lastname: "",
        address: "",
        email: "",
        password1: "",
        password2: "",
        phone: "",
        gender: "",
        documenttype: "",
        document: "",
        roll: "",
        username: ""
    })
    const navigate = useNavigate();
    const location = useLocation();


    useEffect(()=>{
        if (location.state === null) {
            return navigate('/users');
        }
        const {id, name, lastname, address, 
            email, password, phone, 
            gender, documenttype, document, roll, username
        } = location.state;
        setFormData(prevState => {
            return {
                ...prevState,
                id,
                name,
                lastname,
                address,
                email,
                password1: password,
                password2: password,
                phone,
                gender,
                documenttype,
                document,
                roll,
                username
            }
        })
    }, []);

    const updateUsers = async (data) => {
        const settings = {
            method: "PUT",
            //mode: "no-cors",
            headers: {
                "Content-type": "application/json",
                'Access-Control-Allow-Origin':'*'
            },
            body: JSON.stringify(data) 
        };
            await fetch("http://localhost:5000/users", settings)
            .then(res => res.json())
            .then(resData => {
                console.log(resData);
                setUserUpdated(true)
                setError(false)
                setTimeout(() => {
                    navigate("/users")
                }, 1000)
            })
            .catch(e => {
                console.log(`Error catched: ${e}`);
                setUserUpdated(false)
                setError(true)
            })
    }
    
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

    const handleUserChanges = (e) => {
        if (formData.password1 !== formData.password2) {
            setDisableSend(true)
            setPasswordMatches(false)
        } else {
            setDisableSend(false)
            setPasswordMatches(true)
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(false)
        updateUsers(formData);
    }

    const handleCancel = (e) => {
        e.preventDefault();
        navigate("/users")
    }

    const myStyle = {
        backgroundColor: disableSend && "grey"
    }

    return (
        <div>
        {isLogged ? (
            <div className='profile-edit-user-container'>
                <div className='dashboard'>
                    <UserMenu/>
                </div>
                <div className='edit-user-form'>
                <UserHeader/>
                <div className='edit-user-form-container'>
                <div className='edit-user-form-form-container'>
                    <h3>EDITAR USUARIO</h3>
                    <form onSubmit={handleSubmit} onChange={handleUserChanges} onMouseDown={handleUserChanges} autoComplete='off'>
                        <label htmlFor='name'>Nombre</label>
                        <input 
                            autoComplete='off' 
                            placeholder='Escriba su nombre' 
                            name='name' 
                            defaultValue={formData.name}  
                            onChange={handleChange} 
                            required maxLength="32" 
                            pattern="[A-Za-z]{1,32}"/>
                        <label htmlFor='lastname'>Apellido</label>
                        <input 
                            autoComplete='off' 
                            placeholder='Escriba su apellido(s)' 
                            name='lastname' 
                            defaultValue={formData.lastname}  
                            onChange={handleChange} 
                            maxLength="50" required/>
                        <label htmlFor='address'>Dirección</label>
                        <input 
                            autoComplete='off' 
                            placeholder='Escriba dirección aqui' 
                            name='address' 
                            defaultValue={formData.address}  
                            onChange={handleChange} 
                            maxLength="150" required/>
                        <label htmlFor='email'>Correo electrónico</label>
                        <input  
                            disabled autoComplete='off' 
                            type='email' 
                            placeholder='Escriba su correo electrónico' 
                            name='email' 
                            defaultValue={formData.email}  
                            onChange={handleChange} required/>
                        <label htmlFor='password1' style={{marginTop: "30px"}}>Escriba su contraseña</label>
                        <div className='edit-user-password'>
                            <input 
                                type={showPassword? "text" : "password"} 
                                name='password1' 
                                placeholder='Clave' 
                                defaultValue={formData.password1}  
                                onChange={handleChange} 
                                minLength="8" required/>
                            {showPassword ? <FaEye onClick={() => handlePassword()}/> : <FaEyeSlash onClick={handlePassword}/>}
                        </div>
                        <label htmlFor='password2'>Repita la contraseña</label>
                        <div className='edit-user-password'>
                            <input 
                                type={showPassword? "text" : "password"} 
                                name='password2' 
                                placeholder='Confirme clave' 
                                defaultValue={formData.password2}  
                                onChange={handleChange} 
                                minLength="8" required/>
                        </div>
                        {!passwordMatches && <p className='error'>Las contraseñas no coinciden</p>}
                        <label htmlFor='phone' style={{marginTop: "30px"}}>Número celular</label>
                        <input 
                            autoComplete='off' 
                            type='tel' 
                            placeholder='XXX-XXX-XXXX' 
                            name='phone' 
                            defaultValue={formData.phone}  
                            onChange={handleChange} required/>
                        <label htmlFor='gender'>Seleccione su sexo</label>
                        <select name='gender' defaultValue={formData.gender} onChange={handleChange} required>
                            <option >{formData.gender}</option>
                            <option >Hombre</option>
                            <option >Mujer</option>
                        </select>
                        <label htmlFor='documenttype'>Tipo de documento</label>
                        <select disabled name='documenttype' defaultValue={formData.documenttype} onChange={handleChange} required>
                            <option >Cedula</option>
                            <option >Pasaporte</option>
                        </select>
                        <label htmlFor='document'>Número de documento</label>
                        <input  
                            disabled 
                            name='document' 
                            placeholder='Ingrese su número de documento' 
                            defaultValue={formData.document}  
                            onChange={handleChange} required/>
                        <label htmlFor='roll'>Roll</label>
                        <select name='roll' defaultValue={formData.roll} onChange={handleChange} required>
                            <option >{formData.roll}</option>
                            <option >1</option>
                            <option >2</option>
                            <option >3</option>
                        </select>
                        {<p className='success'>{(userUpdated) ? "Usuario actualizado exitosamente!" : ""}</p>}
                        {<p className='error'>{error && "Hubo un error, por favor intente mas tarde!"}</p>}
                        <div className='button'>
                            <button type='submit' disabled={disableSend} style={myStyle}>Actualizar</button>
                            <MyModal     
                                title="Cancelar"
                                body="No se guardaran los cambios. Desea cancelar?"
                                yes="Si"
                                not="No"
                                handleYes={handleCancel}>
                            Cancelar
                            </MyModal>
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