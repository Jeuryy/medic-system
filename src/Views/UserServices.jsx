import Table from 'react-bootstrap/Table';
import NotFound from '../components/NotFound';
import UserMenu from '../Pages/UserMenu';
import UserHeader from '../components/UserHeader';
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import './UserServices.css'
import { Link } from 'react-router-dom';

export default function UserServices(props) {
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
                <p>Servicios</p>
                <Table striped bordered hover responsive="sm">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Servicio</th>
                        <th>Descripcion</th>
                        <th>Doctores</th>
                        <th>Horarios</th>
                        <th>Opciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Ginecologia</td>
                        <td>Servicios de Ginecologia para mujeres</td>
                        <td>Jeury Pierre</td>
                        <td>Lunes-Viernes 8:00AM-12:00PM </td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Ginecologia</td>
                        <td>Servicios de Ginecologia para mujeres</td>
                        <td>Jeury Pierre</td>
                        <td>Lunes-Viernes 8:00AM-12:00PM </td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Ginecologia</td>
                        <td>Servicios de Ginecologia para mujeres</td>
                        <td>Jeury Pierre</td>
                        <td>Lunes-Viernes 8:00AM-12:00PM </td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Ginecologia</td>
                        <td>Servicios de Ginecologia para mujeres</td>
                        <td>Jeury Pierre</td>
                        <td>Lunes-Viernes 8:00AM-12:00PM </td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Ginecologia</td>
                        <td>Servicios de Ginecologia para mujeres</td>
                        <td>Jeury Pierre</td>
                        <td>Lunes-Viernes 8:00AM-12:00PM </td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Ginecologia</td>
                        <td>Servicios de Ginecologia para mujeres</td>
                        <td>Jeury Pierre</td>
                        <td>Lunes-Viernes 8:00AM-12:00PM </td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Ginecologia</td>
                        <td>Servicios de Ginecologia para mujeres</td>
                        <td>Jeury Pierre</td>
                        <td>Lunes-Viernes 8:00AM-12:00PM </td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Ginecologia</td>
                        <td>Servicios de Ginecologia para mujeres</td>
                        <td>Jeury Pierre</td>
                        <td>Lunes-Viernes 8:00AM-12:00PM </td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    </tbody>
                </Table>
                <div className='create-user'>
                    <Link to="/addServices">Agregar servicio</Link>
                </div>
                </div>
            </div>): (
        <NotFound/>
        )}
    </div>
    );
}
