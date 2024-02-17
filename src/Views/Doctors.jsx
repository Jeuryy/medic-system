import Table from 'react-bootstrap/Table';
import NotFound from '../components/NotFound';
import UserMenu from '../Pages/UserMenu';
import UserHeader from '../components/UserHeader';
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import './Users.css'
import { Link } from 'react-router-dom';

export default function Doctors(props) {
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
                <p>Doctores</p>
                <Table striped bordered hover responsive="sm">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Especialidad</th>
                        <th>Horarios</th>
                        <th>Contacto</th>
                        <th>Opciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Jeury Pierre</td>
                        <td>Ginecologia</td>
                        <td>Lunes-Viernes 8:00AM-12:00PM </td>
                        <td>8299851200 | elyruej.102004@gmail.com</td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Jeury Pierre</td>
                        <td>Ginecologia</td>
                        <td>Lunes-Viernes 8:00AM-12:00PM </td>
                        <td>8299851200 | elyruej.102004@gmail.com</td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Jeury Pierre</td>
                        <td>Ginecologia</td>
                        <td>Lunes-Viernes 8:00AM-12:00PM </td>
                        <td>8299851200 | elyruej.102004@gmail.com</td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Jeury Pierre</td>
                        <td>Ginecologia</td>
                        <td>Lunes-Viernes 8:00AM-12:00PM </td>
                        <td>8299851200 | elyruej.102004@gmail.com</td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    <tr>
                    <td>1</td>
                        <td>Jeury Pierre</td>
                        <td>Ginecologia</td>
                        <td>Lunes-Viernes 8:00AM-12:00PM </td>
                        <td>8299851200 | elyruej.102004@gmail.com</td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Jeury Pierre</td>
                        <td>Ginecologia</td>
                        <td>Lunes-Viernes 8:00AM-12:00PM </td>
                        <td>8299851200 | elyruej.102004@gmail.com</td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Jeury Pierre</td>
                        <td>Ginecologia</td>
                        <td>Lunes-Viernes 8:00AM-12:00PM </td>
                        <td>8299851200 | elyruej.102004@gmail.com</td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Jeury Pierre</td>
                        <td>Ginecologia</td>
                        <td>Lunes-Viernes 8:00AM-12:00PM </td>
                        <td>8299851200 | elyruej.102004@gmail.com</td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    </tbody>
                </Table>
                <div className='create-user'>
                    <Link to="/addDoctor">Agregar doctor</Link>
                </div>
                </div>
            </div>): (
        <NotFound/>
        )}
    </div>
    );
}
