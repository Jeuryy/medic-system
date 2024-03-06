import Table from 'react-bootstrap/Table';
import NotFound from '../components/NotFound';
import UserMenu from '../Pages/UserMenu';
import UserHeader from '../components/UserHeader';
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import './Citas.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaRegEye } from "react-icons/fa";

export default function Citas(props) {
    const [citas, setCitas] = useState([])
    const {isLogged, setIsLogged} = props;

    useEffect(()=> {
        fetch("http://localhost:5000/citas")
        .then(res => res.json())
        .then(data => setCitas(data))
        .catch(err => console.log(err))
    }, [])
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
                    <p className='title'>Citas</p>
                    <Link to="/agendar">Agendar cita</Link>
                </div>
                <Table striped bordered hover responsive="sm">
                    <thead>
                    <tr>
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
                    {!citas ? 
                        (<tr><td colSpan="8">No hay citas para mostrar</td></tr>)
                        :
                        (
                            citas.map(cita => {
                            return <tr key={cita.id}>
                                <td style={{whiteSpace: 'pre-line'}}> {(cita.dia.substring(4)) + "\n" + cita.date}</td>
                                <td> {cita.name + " " + cita.lastname}</td>
                                <td> {cita.service}</td>
                                <td> {cita.doctor}</td>
                                <td> {cita.documenttype + ": " + cita.document}</td>
                                <td> {cita.address}</td>
                                <td style={{whiteSpace: 'pre-line'}}> {cita.phone + "\n" + cita.email}</td>
                                <td className='options'>
                                    <button><FaRegEye /></button>
                                    <button><FaUserEdit/></button>
                                    <button><MdDelete/></button>
                                </td>
                            </tr>})
                        )
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
