import Table from 'react-bootstrap/Table';
import NotFound from '../components/NotFound';
import UserMenu from '../Pages/UserMenu';
import UserHeader from '../components/UserHeader';
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import './Citas.css'
import { Link } from 'react-router-dom';

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
                <p>Diagnosticos</p>
                <Table striped bordered hover responsive="sm">
                    <thead>
                    <tr>
                        <th>Id</th>
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
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>Maria Perez</td>
                        <td>Dr Jeury Pierre</td>
                        <td>Ginecologia</td>
                        <td>Se realizo chequeo rutinario de sus partes. Todo en orden</td>
                        <td>Acetaminofen</td>
                        <td>Lunes 05/03/2024 11:35AM</td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>Maria Perez</td>
                        <td>Dr Jeury Pierre</td>
                        <td>Ginecologia</td>
                        <td>Se realizo chequeo rutinario de sus partes. Todo en orden</td>
                        <td>Acetaminofen</td>
                        <td>Lunes 05/03/2024 11:35AM</td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>Maria Perez</td>
                        <td>Dr Jeury Pierre</td>
                        <td>Ginecologia</td>
                        <td>Se realizo chequeo rutinario de sus partes. Todo en orden</td>
                        <td>Acetaminofen</td>
                        <td>Lunes 05/03/2024 11:35AM</td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>Maria Perez</td>
                        <td>Dr Jeury Pierre</td>
                        <td>Ginecologia</td>
                        <td>Se realizo chequeo rutinario de sus partes. Todo en orden</td>
                        <td>Acetaminofen</td>
                        <td>Lunes 05/03/2024 11:35AM</td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>Maria Perez</td>
                        <td>Dr Jeury Pierre</td>
                        <td>Ginecologia</td>
                        <td>Se realizo chequeo rutinario de sus partes. Todo en orden</td>
                        <td>Acetaminofen</td>
                        <td>Lunes 05/03/2024 11:35AM</td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>Maria Perez</td>
                        <td>Dr Jeury Pierre</td>
                        <td>Ginecologia</td>
                        <td>Se realizo chequeo rutinario de sus partes. Todo en orden</td>
                        <td>Acetaminofen</td>
                        <td>Lunes 05/03/2024 11:35AM</td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>Maria Perez</td>
                        <td>Dr Jeury Pierre</td>
                        <td>Ginecologia</td>
                        <td>Se realizo chequeo rutinario de sus partes. Todo en orden</td>
                        <td>Acetaminofen</td>
                        <td>Lunes 05/03/2024 11:35AM</td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>Maria Perez</td>
                        <td>Dr Jeury Pierre</td>
                        <td>Ginecologia</td>
                        <td>Se realizo chequeo rutinario de sus partes. Todo en orden</td>
                        <td>Acetaminofen</td>
                        <td>Lunes 05/03/2024 11:35AM</td>
                        <td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                        </td>
                    </tr>
                    </tbody>
                </Table>
                </div>
            </div>): (
        <NotFound/>
        )}
    </div>
    );
}
