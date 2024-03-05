import Table from 'react-bootstrap/Table';
import NotFound from '../components/NotFound';
import UserMenu from '../Pages/UserMenu';
import UserHeader from '../components/UserHeader';
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import './Users.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MyModal from '../components/MyModal';


export default function Doctors(props) {
    const [doctors, setDoctors] = useState([])
    const [error, setError] = useState(false)
    const {isLogged, setIsLogged} = props;
    const navigate = useNavigate();


    useEffect(()=> {
        fetch("http://localhost:5000/doctors")
        .then(res => res.json())
        .then(data => {
            setDoctors(data)
        })
        .catch(err => console.log(err))
    }, [])

    const handleYes = async (doctor) => {
        const settings = {
            method: "DELETE",
            //mode: "no-cors",
            headers: {
                "Content-type": "application/json",
                'Access-Control-Allow-Origin':'*'
            },
            body: JSON.stringify(doctor) 
        };
        await fetch("http://localhost:5000/doctors/", settings)
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
                    <p className='title'>Doctores</p>
                    <Link to="/addDoctor">Agregar doctor</Link>
                </div>
                <Table striped bordered hover responsive="sm">
                    <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Especialidad</th>
                        <th>Horarios</th>
                        <th>Contacto</th>
                        <th>Opciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {doctors ? (
                        doctors.map(doctor => {
                        return <tr key={doctor.id}>
                            <td>{`${doctor.gender === "Hombre" ? "Dr " : "Dra "} ${doctor.name} ${doctor.lastname}`}</td>
                            <td> {doctor.service}</td>
                            <td style={{whiteSpace: "pre-line"}}> {(doctor.schedule).replaceAll(",", "\n")}</td>
                            <td> {doctor.phone + " " + doctor.email}</td>
                            <td className='options'>
                                <button onClick={() => navigate("/edit-doctor", {state: doctor})}>
                                    <FaUserEdit/>
                                </button>
                                <MyModal
                                variant="danger"
                                title={<MdDelete/>}
                                header="Eliminando doctor"
                                body={`Esta seguro que desea eliminar al ${doctor.gender === "Hombre" ? "Dr " : "Dra "} ${doctor.name} ${doctor.lastname}`}
                                yes="Si"
                                not="No"
                                handleYes={() => handleYes(doctor)}
                            />
                            </td>
                        </tr>})) 
                        : (<tr><td colSpan="8">No hay doctores para mostrar</td></tr>)
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
