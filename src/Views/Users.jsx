import Table from 'react-bootstrap/Table';
import NotFound from '../components/NotFound';
import UserMenu from '../Pages/UserMenu';
import UserHeader from '../components/UserHeader';
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import './Users.css'
import { Link } from 'react-router-dom';

export default function Users(props) {
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
                <p>Usuarios</p>
                <Table striped bordered hover responsive="sm">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo electrónico</th>
                        <th>Dirección</th>
                        <th>Teléfono</th>
                        <th>Opciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Jeury</td>
                        <td>Pierre Dide</td>
                        <td>elyruek.102004@gmail.com</td>
                        <td>C/ Felix Abreu #17 Bienvenido Manoguayabo</td>
                        <td>8299851200</td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jeury</td>
                        <td>Pierre Dide</td>
                        <td>elyruek.102004@gmail.com</td>
                        <td>C/ Felix Abreu #17 Bienvenido Manoguayabo</td>
                        <td>8299851200</td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Jeury</td>
                        <td>Pierre Dide</td>
                        <td>elyruek.102004@gmail.com</td>
                        <td>C/ Felix Abreu #17 Bienvenido Manoguayabo</td>
                        <td>8299851200</td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Jeury</td>
                        <td>Pierre Dide</td>
                        <td>elyruek.102004@gmail.com</td>
                        <td>C/ Felix Abreu #17 Bienvenido Manoguayabo</td>
                        <td>8299851200</td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Jeury</td>
                        <td>Pierre Dide</td>
                        <td>elyruek.102004@gmail.com</td>
                        <td>C/ Felix Abreu #17 Bienvenido Manoguayabo</td>
                        <td>8299851200</td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Jeury</td>
                        <td>Pierre Dide</td>
                        <td>elyruek.102004@gmail.com</td>
                        <td>C/ Felix Abreu #17 Bienvenido Manoguayabo</td>
                        <td>8299851200</td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Jeury</td>
                        <td>Pierre Dide</td>
                        <td>elyruek.102004@gmail.com</td>
                        <td>C/ Felix Abreu #17 Bienvenido Manoguayabo</td>
                        <td>8299851200</td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Jeury</td>
                        <td>Pierre Dide</td>
                        <td>elyruek.102004@gmail.com</td>
                        <td>C/ Felix Abreu #17 Bienvenido Manoguayabo</td>
                        <td>8299851200</td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    </tbody>
                </Table>
                <div className='create-user'>
                    <Link to="/registrar">Crear usuario</Link>
                </div>
                </div>
            </div>): (
        <NotFound/>
        )}
    </div>
    );
}
