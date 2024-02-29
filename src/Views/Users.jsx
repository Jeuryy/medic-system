import Table from 'react-bootstrap/Table';
import NotFound from '../components/NotFound';
import UserMenu from '../Pages/UserMenu';
import UserHeader from '../components/UserHeader';
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import './Users.css'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Users(props) {
    const [users, setUsers] = useState([])
    const {isLogged, setIsLogged} = props
    const navigate = useNavigate();

    useEffect(()=> {
        fetch("http://localhost:5000/users")
        .then(res => res.json())
        .then(data => {
            setUsers(data)
        })
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
                    <p className='title'>Usuarios</p>
                    <Link to="/registrar">Crear usuario</Link>
                </div>
                <Table striped bordered hover responsive="sm">
                    <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo electrónico</th>
                        <th>Dirección</th>
                        <th>Teléfono</th>
                        <th>Opciones</th>
                    </tr>
                    </thead>
                    <tbody>
                        {!users ? 
                            <tr><td colSpan="8">No hay usuarios para mostrar</td></tr> 
                            : (
                            users.map(user => {
                                return <tr key={user.id}>
                                    <td> {user.name}</td>
                                    <td> {user.lastname}</td>
                                    <td> {user.email}</td>
                                    <td> {user.address}</td>
                                    <td> {user.phone}</td>
                                    <td className='options'>
                                        <button onClick={() => navigate("/edit-user", {state: user})}>
                                            <FaUserEdit/>
                                        </button>
                                        <button>
                                            <MdDelete/>
                                        </button>
                                    </td>
                                </tr>
                            }))
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
