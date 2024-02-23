import Table from 'react-bootstrap/Table';
import NotFound from '../components/NotFound';
import UserMenu from '../Pages/UserMenu';
import UserHeader from '../components/UserHeader';
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import './Citas.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
                    <p>Citas</p>
                    <Link to="/agendar">Agendar cita</Link>
                </div>
                <Table striped bordered hover responsive="sm">
                    <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Tipo de consulta</th>
                        <th>Doctor</th>
                        <th>Paciente</th>
                        <th>Seguro</th>
                        <th>Dirección</th>
                        <th>Contacto</th>
                        <th>Opciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {citas.map(cita => {
                        return <tr key={cita.id}>
                            <td> {cita.date}</td>
                            <td> {cita.service}</td>
                            <td> {cita.doctor}</td>
                            <td> {cita.name + " " + cita.lastname}</td>
                            <td> {cita.assurance}</td>
                            <td> {cita.address}</td>
                            <td> {cita.phone + " " + cita.email}</td>
                            <td className='options'><button><FaUserEdit/></button>
                                <button><MdDelete/></button>
                            </td>
                        </tr>})
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
