import Table from 'react-bootstrap/Table';
import { IoArrowBackOutline } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";
import { MdAccountCircle, MdDelete, MdHome } from "react-icons/md";
import './History.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaRegEye } from "react-icons/fa";
import MyModal from '../components/MyModal';
import Popup from '../components/Popup';

export default function History(props) {
    const location = useLocation();
    const [citas, setCitas] = useState([])
    const [error, setError] = useState(false)
    const [formData, setFormData] = useState(location.state || "Nothing")
    const {isLogged, setIsLogged} = props;
    const navigate = useNavigate();

    useEffect(()=> {
        fetch("http://localhost:5000/citas")
        .then(res => res.json())
        .then(data => {
            setCitas(data.filter(cita => ((cita.email === formData.email) && (cita.documenttype === formData.documenttype && cita.document === formData.document))))
        })    
        .catch(err => console.log(err))
    }, [])



    const handleYes = async (cita) => {
        const settings = {
            method: "DELETE",
            //mode: "no-cors",
            headers: {
                "Content-type": "application/json",
                'Access-Control-Allow-Origin':'*'
            },
            body: JSON.stringify(cita) 
        };
        await fetch("http://localhost:5000/citas/", settings)
        .then(res => res.json())
        .then(resData => {
            console.log(resData);
            setError(false)
            setTimeout(() => {
                window.location.reload();
            }, 1000)
        })
        .catch(e => {
            console.log(`Error catched: ${e}`);
            setError(true)
        })
    }

    return (
        <div className='history-container'>
                    {/*H E A D E R */}
            <div className='buscar-header'>
                <Link to="/buscar" className='goback'><IoArrowBackOutline/></Link>
                <div className='img-container'>
                    <Link to={`${isLogged ? "/Dashboard": "/Login"}`} className='login'><MdAccountCircle className='icon' />{isLogged ? JSON.parse(localStorage.getItem("currentUser")).name : "Entrar"}</Link>
                </div>
            </div>
                        {/*C I T A S*/}
            <div className='users-content history-content'>
                <h2 className='history-citas-title'>MIS CITAS</h2>
                <Table striped bordered hover responsive="sm">
                    <thead>
                    <tr className='history-citas-titles'>
                        <th>Fecha</th>
                        <th>Paciente</th>
                        <th>Tipo de consulta</th>
                        <th>Doctor</th>
                        <th>Documento</th>
                        <th>Dirección</th>
                        <th>Contacto</th>
                        <th>Opciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {citas.length <= 0 ? 
                        (<tr><td colSpan="8">No hay citas para mostrar</td></tr>)
                        :
                        (
                            citas.map(cita => {
                            return <tr key={cita.id} className='history-tr'>
                                <td style={{whiteSpace: 'pre-line'}}> {(cita.dia.substring(4)) + "\n" + cita.date}</td>
                                <td> {cita.name + " " + cita.lastname}</td>
                                <td> {cita.service}</td>
                                <td> {cita.doctor}</td>
                                <td> {cita.documenttype + ": " + cita.document}</td>
                                <td> {cita.address}</td>
                                <td style={{whiteSpace: 'pre-line'}}> {cita.phone + "\n" + cita.email}</td>
                                <td className='options'>
                                    <Popup
                                        title="Confirmación de cita"
                                        name="Centro Médico Divina Misericordia"
                                        address="AV. CORDILLERA ESQ EL SAMAN SN, Santo Domingo Oeste Santo Domingo Oeste, Republica Dominicana 10701"
                                        openText={<FaRegEye state={cita}/>}>
                                    </Popup>
                                    <button disabled={new Date(cita.dia) < new Date()} onClick={() => navigate("/edit-appointment", {state: cita})}>
                                        <FaUserEdit/>
                                    </button>
                                    <MyModal
                                            variant="danger"
                                            title={<MdDelete/>}
                                            header="Eliminando usuario"
                                            body={`Esta seguro de eliminar cita de paciente ${cita.name} ${cita.lastname}`}
                                            yes="Si"
                                            not="No"
                                            handleYes={() => handleYes(cita)}
                                        />
                                </td>
                            </tr>})
                        )
                    }
                    </tbody>
                </Table>
            </div>
            {/*D I A G N O S T I C O S*/}
            <div className='users-content history-content'>
            <h2 className='history-citas-title'>MIS DIAGNOSTICOS</h2>
            <Table striped bordered hover responsive="sm">
                    <thead>
                    <tr>
                        <th>Codigo cita</th>
                        <th>Paciente</th>
                        <th>Doctor</th>
                        <th>Servicio</th>
                        <th>Resumen</th>
                        <th>Medicamentos</th>
                        <th>Fecha</th>
                        <th>Opciones</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr><td colSpan="8">No hay diagnosticos para mostrar</td></tr>
                    </tbody>
                </Table>
        </div>
        </div>
    );
}
