import Table from 'react-bootstrap/Table';
import NotFound from '../components/NotFound';
import UserMenu from '../Pages/UserMenu';
import UserHeader from '../components/UserHeader';
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import './Citas.css'
import { Link } from 'react-router-dom';
import Login from '../Pages/Login';

export default function Diagnostics(props) {
    const {isLogged, setIsLogged} = props
    return (
    <div >
        {isLogged ? (
            <div className='users-container'>
                <div className='dashboard'>
                    <UserMenu/>
                </div>
                <div className='users-content'>
                <UserHeader/>
                <p className='title'>Diagnosticos</p>
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
                        <tr><td colSpan="8">No hay diagnosticos para mostrar</td></tr>
                    </tbody>
                </Table>
                </div>
            </div>): (
        <NotFound/>
        )}
    </div>
    );
}
