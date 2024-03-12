import UserMenu from '../Pages/UserMenu';
import NotFound from '../components/NotFound';
import UserHeader from '../components/UserHeader';
import './AddDiagnostic.css'
import { useState, useEffect } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { useLocation, useNavigate } from 'react-router-dom';
import MyModal from '../components/MyModal';
import { FaSearch } from 'react-icons/fa';
import { IoCloseSharp } from "react-icons/io5";
import { nanoid } from 'nanoid';

export default function AddDiagnostic (props) {
    const {isLogged, setIsLogged} = props;
    const [disableSend, setDisableSend] = useState(false)
    const [citas, setCitas] = useState([])
    const [currentCita, setCurrentCita] = useState([])
    const [citaExist, setCitaExist] = useState(false)
    const [diagnostics, setDiagnostics] = useState([])
    const [diagnosticAlreadyExist, setDiagnosticAlreadyExist] = useState(false);
    const [error, setError] = useState(false)
    const [formData, setFormData] = useState({
        id: nanoid(),
        citaId: "",
        patient: "",
        doctor: "",
        service: "",
        resume: "",
        medicine: ""
    })
    const navigate = useNavigate();

//GET ALL CITAS DATA TO CONFIRM ID IS IN THIS LIST
    useEffect(()=> {
        fetch("http://localhost:5000/citas")
        .then(res => res.json())
        .then(data => setCitas(data))
        .catch(err => console.log(err))
    }, [])

//GET ALL DIAGNOSTICS DATA TO CONFIRM ID IS IN THIS LIST
useEffect(()=> {
    fetch("http://localhost:5000/diagnostics")
    .then(res => res.json())
    .then(data => setDiagnostics(data))
    .catch(err => console.log(err))
}, [])

//ADD DIAGNOSTIC
    const addDiagnostic = async (data) => {
        const settings = {
            method: "POST",
            //mode: "no-cors",
            headers: {
                "Content-type": "application/json",
                'Access-Control-Allow-Origin':'*'
            },
            body: JSON.stringify(data) 
        };
            await fetch("http://localhost:5000/diagnostics", settings)
            .then(res => res.json())
            .then(resData => {
                console.log(resData);
                setError(false)
                setTimeout(() => {
                    navigate("/diagnostics")
                }, 1000)
            })
            .catch(e => {
                console.log(`Error catched: ${e}`);
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

    const handleCita = (e) => {
        if (e.key === "Enter") {
            let citaMatch = citas.filter(cita => (cita.id).substring(0, 5) === formData.citaId)
            let diagnosticExist = diagnostics.some(diagnostic => diagnostic.citaId === formData.citaId)
            if ((citaMatch.length >= 1) && (!diagnosticExist)) {
                setCurrentCita(citaMatch)
                setFormData(prevState => {
                    return {
                        ...prevState,
                        patient: citaMatch[0].name + " " + citaMatch[0].lastname,
                        doctor: citaMatch[0].doctor,
                        service: citaMatch[0].service
                    }
                })
                setDiagnosticAlreadyExist(false)
                setError(false)
                setCitaExist(true)
            } else if ((citaMatch.length >= 1) && diagnosticExist) {
                setDiagnosticAlreadyExist(true)
                setError(false)
            }else {
                setError(true)
                setCitaExist(false)
            }
        }
    }

    const handleClose = () =>{
        setFormData(prevState => {
            return {
                ...prevState,
                citaId: ""
            }
        })
        setCitaExist(false)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setDiagnosticAlreadyExist(false)
        setError(false)
        if (citaExist) {
            addDiagnostic(formData);
        }
    }

    const handleCancel = (e) => {
        e.preventDefault();
        navigate("/users")
    }

    const myStyle = {
        backgroundColor: disableSend && "grey"
    }
    const showForm = {
        visibility: citaExist ? "visible" : "hidden"
    }

    return (
        <div>
        {isLogged ? (
            <div className='profile-add-diagnostic-container'>
                <div className='dashboard'>
                    <UserMenu/>
                </div>
                <div className='add-diagnostic-form'>
                <UserHeader/>
                <div className='add-diagnostic-form-container'>
                <div className='add-diagnostic-form-form-container'>
                    <h3>AGREGAR DIAGNOSTICO</h3>
                <form onSubmit={handleSubmit} autoComplete='off'>
                    <label htmlFor='name'>Codigo de la cita</label>
                    <div className='cita-id' disabled={citaExist}>
                        <input 
                            onKeyUp={handleCita}
                            autoComplete='off' 
                            placeholder='Escribe el codigo de confirmacion de la cita' 
                            name='citaId'
                            disabled={citaExist}
                            value={formData.citaId}
                            onChange={handleChange} 
                            required maxLength="5"/>
                        { citaExist ? (<IoCloseSharp onClick={handleClose}/>) : (<FaSearch/>)}
                    </div>
                    {<p className='success'>{diagnosticAlreadyExist && "Registro ya existente, si desea actualizarlo por favor dirigirse a diagnosticos"}</p>}
                    {<p className='error'>{error && "No se encontraron citas con este codigo, por favor intente nuevamente"}</p>}
                    {<div className='add-diagnostic-form-content' style={showForm}>
                        <label htmlFor='patient'>Paciente</label>
                        <input 
                            autoComplete='off' 
                            placeholder='Nombre del paciente' 
                            name='patient' 
                            defaultValue={formData.patient}
                            onChange={handleChange}
                            disabled 
                            maxLength="100" required/>
                        <label htmlFor='doctor'>Doctor</label>
                        <input 
                            autoComplete='off' 
                            placeholder='Nombre del doctor' 
                            name='doctor' 
                            defaultValue={formData.doctor}
                            onChange={handleChange} 
                            disabled
                            maxLength="50" required/>
                        <label htmlFor='service'>Servicio</label>
                        <input 
                            autoComplete='off' 
                            placeholder='Especialidad o servicio realizado' 
                            name='service' 
                            defaultValue={formData.service}
                            onChange={handleChange} 
                            disabled
                            maxLength="50" required/>
                        <label htmlFor='resume'>Resumen</label>
                        <textarea 
                            autoComplete='off' 
                            placeholder='Resumen de la consulta' 
                            name='resume' 
                            value={formData.resume}  
                            onChange={handleChange}
                            required={citaExist}/>
                        <label htmlFor='medicine'>Medicamentos</label>
                        <textarea 
                            autoComplete='off' 
                            placeholder='Medicamentos indicados al paciente' 
                            name='medicine' 
                            value={formData.medicine}  
                            onChange={handleChange} 
                            required={citaExist}/>
                        <div className='button'>
                            <button type='submit' disabled={disableSend} style={myStyle}>Agregar</button>
                            <MyModal     
                                title="Cancelar"
                                body="No se guardaran los cambios. Desea cancelar?"
                                yes="Si"
                                not="No"
                                handleYes={handleCancel}>
                            Cancelar
                            </MyModal>
                        </div>
                    </div>}
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