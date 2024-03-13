import Table from 'react-bootstrap/Table';
import NotFound from '../components/NotFound';
import UserMenu from '../Pages/UserMenu';
import UserHeader from '../components/UserHeader';
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import './Citas.css'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaRegEye } from "react-icons/fa";
import MyModal from '../components/MyModal';
import Popup from '../components/Popup';

export default function Citas(props) {
    const [citas, setCitas] = useState([])
    const [error, setError] = useState(false)
    const {isLogged, setIsLogged} = props;
    const navigate = useNavigate();

    useEffect(()=> {
        fetch("http://localhost:5000/citas")
        .then(res => res.json())
        .then(data => setCitas(data))
        .catch(err => console.log(err))
    }, [])

    const handleYes = async (cita) => {
        const settings = {
            method: "DELETE",
            //mode: "no-cors",
            headers: {
                "Content-type": "application/json",
                'Access-Control-Allow-Origin':'*'
            },
            body: JSON.stringify(cita) 
        };
        await fetch("http://localhost:5000/citas/", settings)
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
                    <p className='title'>Citas</p>
                    <Link to="/agendar">Agendar cita</Link>
                </div>
                <Table striped bordered hover responsive="sm">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Fecha</th>
                        <th>Paciente</th>
                        <th>Tipo de consulta</th>
                        <th>Doctor</th>
                        <th>Documento</th>
                        <th>Contacto</th>
                        <th>Opciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {citas.length <= 0 ? 
                        (<tr><td colSpan="8">No hay citas para mostrar</td></tr>)
                        :
                        (
                            citas.map(cita => {
                            return <tr key={cita.id}>
                                <td> {(cita.id).substring(0,5)}</td>
                                <td style={{whiteSpace: 'pre-line'}}> {(cita.dia.substring(4)) + "\n" + cita.date}</td>
                                <td> {cita.name + " " + cita.lastname}</td>
                                <td> {cita.service}</td>
                                <td> {cita.doctor}</td>
                                <td> {cita.documenttype + ": " + cita.document}</td>
                                <td style={{whiteSpace: 'pre-line'}}> {cita.phone + "\n" + cita.email}</td>
                                <td className='options'>
                                    <Popup
                                        title="Confirmación de cita"
                                        name="Centro Médico Divina Misericordia"
                                        address="AV. CORDILLERA ESQ EL SAMAN SN, Santo Domingo Oeste Santo Domingo Oeste, Republica Dominicana 10701"
                                        openText={<FaRegEye state={cita}/>}>
                                    </Popup>
                                    <button onClick={() => navigate("/edit-appointment", {state: cita})}>
                                    <FaUserEdit/>
                                </button>
                                    <MyModal
                                            variant="danger"
                                            title={<MdDelete/>}
                                            header="Eliminando usuario"
                                            body={`Esta seguro de eliminar cita de paciente ${cita.name} ${cita.lastname}`}
                                            yes="Si"
                                            not="No"
                                            handleYes={() => handleYes(cita)}
                                        />
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
