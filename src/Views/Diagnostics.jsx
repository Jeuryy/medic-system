import Table from 'react-bootstrap/Table';
import NotFound from '../components/NotFound';
import UserMenu from '../Pages/UserMenu';
import UserHeader from '../components/UserHeader';
import { FaRegEye, FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import './Citas.css'
import { Link, useNavigate } from 'react-router-dom';
import Login from '../Pages/Login';
import { useEffect, useState } from 'react';
import MyModal from '../components/MyModal';
import Popup from '../components/Popup';

export default function Diagnostics(props) {
    const [diagnostics, setDiagnostics] = useState([])
    const [error, setError] = useState(false)
    const [activeItemId, setActiveItemId] = useState(null);
    const {isLogged, setIsLogged} = props
    const navigate = useNavigate()
    
    useEffect(()=> {
        fetch("http://localhost:5000/diagnostics")
        .then(res => res.json())
        .then(data => {
            setDiagnostics(data)
        })
        .catch(err => console.log(err))
    }, [])
    
    const handleShowMore = (id) => {
        if (activeItemId === id) {
            setActiveItemId(null)
        }else{
            setActiveItemId(id)
        }
    }

    const handleYes = async (diagnostic) => {
        const settings = {
            method: "DELETE",
            //mode: "no-cors",
            headers: {
                "Content-type": "application/json",
                'Access-Control-Allow-Origin':'*'
            },
            body: JSON.stringify(diagnostic) 
        };
        await fetch("http://localhost:5000/diagnostics/", settings)
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
    <div >
        {isLogged ? (
            <div className='users-container'>
                <div className='dashboard'>
                    <UserMenu/>
                </div>
                <div className='users-content'>
                <UserHeader/>
                <div className='create-user'>
                <p className='title'>DIAGNOSTICOS</p>
                <Link to="/add-diagnostic">Agregar diagnostico</Link>
            </div>
                <Table striped bordered hover responsive="sm">
                    <thead>
                    <tr>
                        <th>Cita id</th>
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
                    {diagnostics.length >= 1 ? (
                        diagnostics.map(diagnostic => {
                            let currentDate = new Date(diagnostic.createdTime)
                        return <tr key={diagnostic.id}>
                            <td>{diagnostic.citaId}</td>
                            <td> {diagnostic.patient}</td>
                            <td>{diagnostic.doctor}</td>
                            <td> {diagnostic.service}</td>
                            <td className='diagnostic-resume' id={diagnostic.id}> 
                                {(activeItemId === diagnostic.id) ? diagnostic.resume : `${(diagnostic.resume).substring(0, 75)}`}
                                <button onClick={() => {handleShowMore(diagnostic.id)}} id={diagnostic.id}>{(activeItemId === diagnostic.id) ? "Show less" : "Show more"}</button>
                            </td>
                            <td className='diagnostic-medicine' id={diagnostic.id}> 
                                {(activeItemId === diagnostic.id) ? diagnostic.medicine : `${(diagnostic.medicine).substring(0, 75)}`}
                                <button onClick={() => {handleShowMore(diagnostic.id)}} id={diagnostic.id}>{(activeItemId === diagnostic.id) ? "Show less" : "Show more"}</button>
                            </td>
                            <td> {(currentDate).toLocaleString()}</td>
                            <td className='options'>
                                <button>
                                    <FaRegEye/>
                                </button>
                                <button onClick={() => navigate("/edit-doctor", {state: diagnostic})}>
                                    <FaUserEdit/>
                                </button>
                                <MyModal
                                variant="danger"
                                title={<MdDelete/>}
                                header="Eliminando doctor"
                                body={`Esta seguro que desea eliminar diagnostico del paciente ${diagnostic.patient}?`}
                                yes="Si"
                                not="No"
                                handleYes={() => handleYes(diagnostic)}
                            />
                            </td>
                        </tr>})) 
                        : (<tr><td colSpan="8">No hay doctores para mostrar</td></tr>)
                    }
                    </tbody>
                </Table>
                </div>
            </div>): (
        <NotFound/>
        )}
    </div>
    );
}
