import Table from 'react-bootstrap/Table';
import NotFound from '../components/NotFound';
import UserMenu from '../Pages/UserMenu';
import UserHeader from '../components/UserHeader';
import './UserServices.css'
import { useState, useEffect } from 'react';


export default function UserServices(props) {
    const [doctors, setDoctors] = useState([]);
    const [activeItemId, setActiveItemId] = useState(null);
    const {isLogged, setIsLogged} = props

    useEffect(()=> {
        fetch("http://localhost:5000/doctors")
        .then(res => res.json())
        .then(data => setDoctors(data))
        .catch(err => console.log(err))
    }, [])

    const handleShowMore = (id) => {
            if (activeItemId === id) {
                setActiveItemId(null)
            }else{
                setActiveItemId(id)
            }
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
                <p className='title'>Servicios</p>
                <Table striped bordered hover responsive="sm">
                    <thead>
                    <tr>
                        <th>Servicio</th>
                        <th>Descripcion</th>
                        <th>Doctor</th>
                        <th>Horarios</th>
                        {/*<th>Opciones</th>*/}
                    </tr>
                    </thead>
                    <tbody>
                    {doctors ?
                        ( doctors.map(doctor => {
                        return <tr key={doctor.id}>
                            <td> {doctor.service}</td>
                            <td className='service-description' id={doctor.id}> 
                                {(activeItemId === doctor.id) ? doctor.description : `${(doctor.description).substring(0, 75)}`}
                                <button onClick={() => {handleShowMore(doctor.id)}} id={doctor.id}>{(activeItemId === doctor.id) ? "Show less" : "Show more"}</button>
                            </td>
                            <td>{`${doctor.gender === "Hombre" ? "Dr " : "Dra "} ${doctor.name} ${doctor.lastname}`}</td>
                            <td style={{whiteSpace: "pre-line"}}> {(doctor.schedule).replaceAll(",", "\n")}</td>
                            {/*<td className='options'><button><FaUserEdit/></button>
                            <button><MdDelete/></button>
                            </td>*/}
                        </tr>}))
                        : <tr><td colSpan="8">No hay servicios para mostrar</td></tr>
                    }
                    </tbody>
                </Table>
                {/*<div className='create-user'>
                    <Link to="/addServices">Agregar servicio</Link>
                </div>*/}
                </div>
            </div>): (
        <NotFound/>
        )}
    </div>
    );
}
