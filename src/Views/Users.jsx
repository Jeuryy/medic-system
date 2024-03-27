import Table from 'react-bootstrap/Table';
import NotFound from '../components/NotFound';
import UserMenu from '../Pages/UserMenu';
import UserHeader from '../components/UserHeader';
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import './Users.css'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MyModal from '../components/MyModal';

export default function Users(props) {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(false)
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

const handleYes = async (user) => {
    const settings = {
        method: "DELETE",
        //mode: "no-cors",
        headers: {
            "Content-type": "application/json",
            'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify(user) 
    };
    await fetch("http://localhost:5000/users/", settings)
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
                        {users.length <= 0 ? 
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
                                        <MyModal
                                            variant="danger"
                                            title={<MdDelete/>}
                                            header="Eliminando usuario"
                                            body={`Esta seguro que desea eliminar a ${user.name} ${user.lastname}`}
                                            yes="Si"
                                            not="No"
                                            handleYes={() => handleYes(user)}
                                        />
                                    </td>
                                </tr>
                            }))
                        }
                    </tbody>
                </Table>
                {error && <p className='error'>Hubo un error, por favor intentar mas tarde</p>}
                </div>
            </div>): (
        <NotFound/>
        )}
    </div>
    );
}
