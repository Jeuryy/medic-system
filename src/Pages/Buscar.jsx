import './Buscar.css'
import React, { useState, useEffect } from 'react';
import { MdAccountCircle, MdHome } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";

export default function Buscar(props) {
    const [search, setSearch] = useState(true)
    const [citas, setCitas] = useState([]);
    const [placeholder, setPlaceholder] = useState("No. de documento sin guiones (-)")
    const {isLogged, setIsLogged} = props
    const [formData, setFormData] = useState({
        email: "",
        document: "",
        documenttype: ""
    })
    const navigate = useNavigate();

    useEffect(()=> {
        fetch("http://localhost:5000/citas")
        .then(res => res.json())
        .then(data => {
            setCitas(data)
        })
        .catch(err => console.log(err))
    }, [])


const handleChange = (e) => {
    setFormData(prevState => {
        return {
            ...prevState,
            [e.target.name]: e.target.value
        }
    })
}

const handlePlaceholder = () => {
    if (formData.documenttype === "Cedula") {
        setPlaceholder("XXXXXXXXXXX")
    } else {
        setPlaceholder("No. de documento sin guiones (-)")
    }
}
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(formData)
        citas.map(cita => {
            if (cita.email === formData.email) {
                if (cita.documenttype === formData.documenttype) {
                    if (cita.document === formData.document) {
                        console.log(cita)
                        setSearch(true)
                    } else {
                        console.log(`Cita doesn't exist yet`)
                        setSearch(false)
                    }
                } else {
                    console.log(`Cita doesn't exist yet`)
                    setSearch(false)
                }
            }
        })
        //navigate("/", {state: formData})
        //setCitaAdded(false);
        //addCitas(formData);
    }

    return (
        <div className='buscar'>
            <div className='buscar-header'>
                <Link to="/" className='goback'><MdHome/></Link>
                <div className='img-container'>
                    <Link to={`${isLogged ? "/Dashboard": "/Login"}`} className='login'><MdAccountCircle className='icon' />{isLogged ? JSON.parse(localStorage.getItem("currentUser")).name : "Entrar"}</Link>
                </div>
            </div>
            <div className='buscar-container'>
                <h2>CONSULTAR HISTÓRICO</h2>
                <div className='buscar-form-container'>
                    <form onSubmit={handleSubmit} autoComplete='true'>
                        <label htmlFor='email'>Correo electrónico</label>
                        <input 
                            type='email' 
                            placeholder='Escriba su correo electrónico' 
                            name='email'  
                            defaultValue={formData.email} 
                            onChange={handleChange}
                            autoComplete='true'
                            required
                        />
                        <label htmlFor='documenttype'>Tipo de documento</label>
                        <select name='documenttype' 
                            value={formData.documenttype}  
                            onChange={handleChange} 
                            onMouseUp={handlePlaceholder} 
                            required>
                            <option defaultValue="...">...</option>
                            <option >Cedula</option>
                            <option >Pasaporte</option>
                        </select>
                        <label htmlFor='document'>Documento</label>
                        <input 
                            placeholder={placeholder}
                            maxLength={11}
                            name='document'  
                            defaultValue={formData.document}  
                            onChange={handleChange} 
                            autoComplete='true'
                            required
                        />
                        {<p className={search ? 'success' : 'error'}>{!search ? "Informacion incorrecta, intente nuevamente!" : ""}</p>}
                        <div className='button'>
                            <button type='submit'>Confirmar</button>
                        </div>
                    </form>
                    <ScrollToTop smooth />
                </div>
            </div>
        </div>
    )

}