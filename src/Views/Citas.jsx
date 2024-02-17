import Table from 'react-bootstrap/Table';
import NotFound from '../components/NotFound';
import UserMenu from '../Pages/UserMenu';
import UserHeader from '../components/UserHeader';
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import './Citas.css'
import { Link } from 'react-router-dom';

export default function Citas(props) {
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
                <p>Citas</p>
                <Table striped bordered hover responsive="sm">
                    <thead>
                    <tr>
                        <th>Id</th>
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
                    <tr>
                        <td>1</td>
                        <td>Lunes 05/03/2024 11:00AM</td>
                        <td>Ginecologia</td>
                        <td>Dr Jeury Pierre</td>
                        <td>Maria Perez</td>
                        <td>SeNaSa</td>
                        <td>C/ Felix Abreu #17 Bienvenido Manoguayabo</td>
                        <td>8299851200 | maria123@gmail.com</td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Lunes 05/03/2024 11:00AM</td>
                        <td>Ginecologia</td>
                        <td>Dr Jeury Pierre</td>
                        <td>Maria Perez</td>
                        <td>SeNaSa</td>
                        <td>C/ Felix Abreu #17 Bienvenido Manoguayabo</td>
                        <td>8299851200 | maria123@gmail.com</td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Lunes 05/03/2024 11:00AM</td>
                        <td>Ginecologia</td>
                        <td>Dr Jeury Pierre</td>
                        <td>Maria Perez</td>
                        <td>SeNaSa</td>
                        <td>C/ Felix Abreu #17 Bienvenido Manoguayabo</td>
                        <td>8299851200 | maria123@gmail.com</td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Lunes 05/03/2024 11:00AM</td>
                        <td>Ginecologia</td>
                        <td>Dr Jeury Pierre</td>
                        <td>Maria Perez</td>
                        <td>SeNaSa</td>
                        <td>C/ Felix Abreu #17 Bienvenido Manoguayabo</td>
                        <td>8299851200 | maria123@gmail.com</td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Lunes 05/03/2024 11:00AM</td>
                        <td>Ginecologia</td>
                        <td>Dr Jeury Pierre</td>
                        <td>Maria Perez</td>
                        <td>SeNaSa</td>
                        <td>C/ Felix Abreu #17 Bienvenido Manoguayabo</td>
                        <td>8299851200 | maria123@gmail.com</td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Lunes 05/03/2024 11:00AM</td>
                        <td>Ginecologia</td>
                        <td>Dr Jeury Pierre</td>
                        <td>Maria Perez</td>
                        <td>SeNaSa</td>
                        <td>C/ Felix Abreu #17 Bienvenido Manoguayabo</td>
                        <td>8299851200 | maria123@gmail.com</td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Lunes 05/03/2024 11:00AM</td>
                        <td>Ginecologia</td>
                        <td>Dr Jeury Pierre</td>
                        <td>Maria Perez</td>
                        <td>SeNaSa</td>
                        <td>C/ Felix Abreu #17 Bienvenido Manoguayabo</td>
                        <td>8299851200 | maria123@gmail.com</td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Lunes 05/03/2024 11:00AM</td>
                        <td>Ginecologia</td>
                        <td>Dr Jeury Pierre</td>
                        <td>Maria Perez</td>
                        <td>SeNaSa</td>
                        <td>C/ Felix Abreu #17 Bienvenido Manoguayabo</td>
                        <td>8299851200 | maria123@gmail.com</td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    </tbody>
                </Table>
                <div className='create-user'>
                    <Link to="/agendar">Agendar cita</Link>
                </div>
                </div>
            </div>): (
        <NotFound/>
        )}
    </div>
    );
}
