import Table from 'react-bootstrap/Table';
import NotFound from '../components/NotFound';
import UserMenu from '../Pages/UserMenu';
import UserHeader from '../components/UserHeader';
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import './Users.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function Doctors(props) {
    const [doctors, setDoctors] = useState([])
    const {isLogged, setIsLogged} = props


    useEffect(()=> {
        fetch("http://localhost:5000/doctors")
        .then(res => res.json())
        .then(data => {
            setDoctors(data)
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
                <p>Doctores</p>
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
                    {doctors.map(doctor => {
                        return <tr key={doctor.id}>
                            <td>{`${doctor.gender === "Hombre" ? "Dr " : "Dra "} ${doctor.name} ${doctor.lastname}`}</td>
                            <td> {doctor.service}</td>
                            <td style={{whiteSpace: "pre-line"}}> {(doctor.schedule)}</td>
                            <td> {doctor.phone + " " + doctor.email}</td>
                            <td className='options'><button><FaUserEdit/></button>
                                <button><MdDelete/></button>
                            </td>
                        </tr>})
                    }
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
