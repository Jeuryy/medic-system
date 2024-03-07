import UserMenu from '../Pages/UserMenu';
import NotFound from '../components/NotFound';
import UserHeader from '../components/UserHeader';
import './EditDoctor.css'
import { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import ScrollToTop from 'react-scroll-to-top';
import { useLocation, useNavigate } from 'react-router-dom';
import MyModal from '../components/MyModal';
import Login from '../Pages/Login';

export default function EditDoctor (props) {
    const {isLogged, setIsLogged} = props;
    const [disableSend, setDisableSend] = useState(false)
    const [doctorUpdated, setDoctorUpdated] = useState(false)
    const [error, setError] = useState(false)
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        lastname: "",
        service: "",
        schedule: "",
        email: "",
        description: "",
        phone: "",
        gender: ""
    })
    const navigate = useNavigate();
    const location = useLocation();


    useEffect(()=>{
        if (location.state === null) {
            return navigate('/doctors');
        }
        const {id, name, lastname, service, 
            email, schedule, phone, 
            gender, description
        } = location.state;
        setFormData(prevState => {
            return {
                ...prevState,
                id,
                name,
                lastname,
                service,
                schedule,
                email,
                phone,
                gender,
                description,
            }
        })
    }, []);

    const updateDoctors = async (data) => {
        const settings = {
            method: "PUT",
            //mode: "no-cors",
            headers: {
                "Content-type": "application/json",
                'Access-Control-Allow-Origin':'*'
            },
            body: JSON.stringify(data) 
        };
            await fetch("http://localhost:5000/doctors", settings)
            .then(res => res.json())
            .then(resData => {
                console.log(resData);
                setError(false)
                setDoctorUpdated(true)
                setTimeout(() => {
                    navigate("/doctors")
                }, 1000)
            })
            .catch(e => {
                console.log(`Error catched: ${e}`);
                setDoctorUpdated(false)
                setError(true)
            })
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
        setError(false)
        updateDoctors(formData);
    }

    const handleCancel = (e) => {
        e.preventDefault();
        navigate("/doctors")
    }

    const myStyle = {
        backgroundColor: disableSend && "grey"
    }

    return (
        <div>
        {isLogged ? (
            <div className='profile-edit-doctor-container'>
                <div className='dashboard'>
                    <UserMenu/>
                </div>
                <div className='edit-doctor-form'>
                <UserHeader/>
                <div className='edit-doctor-form-container'>
                <div className='edit-doctor-form-form-container'>
                    <h3>EDITAR DOCTOR</h3>
                    <form onSubmit={handleSubmit} /*onChange={handleUserChanges} onMouseDown={handleUserChanges}*/ autoComplete='off'>
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
                        <label htmlFor='address'>Servicio o especialidad</label>
                        <input 
                            autoComplete='off' 
                            placeholder='Escriba especialidad del doctor' 
                            name='service' 
                            defaultValue={formData.service}  
                            onChange={handleChange} 
                            maxLength="150" required/>
                            <label htmlFor='description'>Descripcion del servicio</label>
                            <textarea 
                                autoComplete='off' 
                                placeholder='Breve descripcion del servicio o especialidad' 
                                name='description' 
                                defaultValue={formData.description}  
                                onChange={handleChange}/>
                        <label htmlFor='schedule'>Horarios de disponibilidad</label>
                        <p className='format'>Formato: Lun: 1:00pm-2:00pm, Mar: 2:00pm-3:00pm,Mie: 3:00pm-4:00pm,Jue: 4:00p,-5:00pm (Horario diario dividido por coma)</p>
                        <textarea 
                            autoComplete='off' 
                            placeholder='Horario diario del doctor, por favor guiarse del formato arriba' 
                            name='schedule' 
                            defaultValue={formData.schedule}  
                            onChange={handleChange} required/>
                        <label htmlFor='phone' style={{marginTop: "30px"}}>Número celular</label>
                        <input 
                            autoComplete='off' 
                            type='tel' 
                            placeholder='XXX-XXX-XXXX' 
                            name='phone' 
                            defaultValue={formData.phone}  
                            onChange={handleChange}/>
                        <label htmlFor='sex'>Seleccione su sexo</label>
                        <select name='sex' defaultValue={formData.gender} onChange={handleChange} required>
                            <option >{formData.gender}</option>
                            <option >Hombre</option>
                            <option >Mujer</option>
                        </select>
                        <label htmlFor='email'>Correo electrónico</label>
                        <input 
                            autoComplete='off' 
                            placeholder='Escriba su correo electronico' 
                            name='email' 
                            defaultValue={formData.email}  
                            onChange={handleChange} 
                            />
                        {<p className={'success'}>{(doctorUpdated) ? "Doctor actualizado exitosamente!" : ""}</p>}
                        {<p className={'error'}>{error &&  "Hubo un error, por favor intente mas tarde!"}</p>}
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