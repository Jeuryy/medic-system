import UserMenu from '../Pages/UserMenu';
import NotFound from '../components/NotFound';
import UserHeader from '../components/UserHeader';
import './EditDiagnostic.css'
import { useState, useEffect } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { useLocation, useNavigate } from 'react-router-dom';
import MyModal from '../components/MyModal';
import { nanoid } from 'nanoid';

export default function EditDiagnostic (props) {
    const {isLogged, setIsLogged} = props;
    const [citaExist, setCitaExist] = useState(false)
    const [diagnosticUpdated, setDiagnosticUpdated] = useState(false)
    const [diagnosticAlreadyExist, setDiagnosticAlreadyExist] = useState(false);
    const [error, setError] = useState(false)
    const [formData, setFormData] = useState({
        id: nanoid(),
        citaId: "",
        patient: "",
        doctor: "",
        service: "",
        resume: "",
        medicine: "",
        documenttype: "",
        document: ""
    })
    const navigate = useNavigate();
    const location = useLocation();

//DESESTRUCTURE NAVIGATE STATE WITH THE DIAGNOSTIC INFO AND ASSIGN VALUES TO FORM
    useEffect(()=>{
        if (location.state === null) {
            return navigate('/');
        }
        const {id, citaId, patient, doctor, service, 
            resume, medicine, documenttype, document
        } = location.state;
        setFormData(prevState => {
            return {
                ...prevState,
                id, 
                citaId,
                patient, 
                doctor, 
                service, 
                resume, 
                medicine,
                documenttype,
                document
            }
        })
    }, []);

//ADD DIAGNOSTIC
    const updateDiagnostic = async (data) => {
        const settings = {
            method: "PUT",
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
                setDiagnosticUpdated(true)
                setError(false)
                setTimeout(() => {
                    navigate("/diagnostics")
                }, 1000)
            })
            .catch(e => {
                console.log(`Error catched: ${e}`);
                setDiagnosticUpdated(false)
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
        setDiagnosticAlreadyExist(false)
        setError(false)
        updateDiagnostic(formData);
    }

    const handleCancel = (e) => {
        e.preventDefault();
        navigate("/diagnostics")
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
                    <h3>ACTUALIZAR DIAGNOSTICO</h3>
                <form onSubmit={handleSubmit} autoComplete='off'>
                    <label htmlFor='name'>Codigo de la cita</label>
                    <div className='cita-id' disabled>
                        <input 
                            autoComplete='off' 
                            placeholder='Escribe el codigo de confirmacion de la cita' 
                            name='citaId'
                            disabled
                            defaultValue={formData.citaId}
                            onChange={handleChange} 
                            required maxLength="5"/>
                    </div>
                    {<div className='add-diagnostic-form-content'>
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
                            defaultValue={formData.resume}  
                            onChange={handleChange}
                            required={citaExist}/>
                        <label htmlFor='medicine'>Medicamentos</label>
                        <textarea 
                            autoComplete='off' 
                            placeholder='Medicamentos indicados al paciente' 
                            name='medicine' 
                            defaultValue={formData.medicine}  
                            onChange={handleChange} 
                            required={citaExist}/>
                            {<p className={diagnosticUpdated? 'success' : 'error'}>{diagnosticUpdated ? "Diagnostico actualizada exitosamente!" : ""}</p>}
                        <div className='button'>
                            <button type='submit'>Agregar</button>
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