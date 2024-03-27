import { NavLink, useNavigate } from 'react-router-dom'
import './UserMenu.css'
import { FaUser, FaUsers, FaCalendar,FaUserDoctor,   } from "react-icons/fa6";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { GiMedicinePills } from "react-icons/gi";
import { FaHome } from 'react-icons/fa';

export default function UserMenu(){
    const navigate = useNavigate()

    return (
        <div className='user-menu-container'>
            <div className='user-menu'>
                <button className='home-img' onClick={() => navigate("/")}><FaHome/></button>
                <NavLink to="/dashboard"><RxDashboard/> General</NavLink> 
                <NavLink to="/profile"><FaUser/> Perfil</NavLink>              
                <NavLink to="/users"><FaUsers/> Usuarios</NavLink>
                <NavLink to="/citas"><FaCalendar/> Citas</NavLink>
                <NavLink to="/doctors"><FaUserDoctor/> Doctores</NavLink>
                <NavLink to="/services"><AiOutlineMedicineBox/> Servicios</NavLink>
                <NavLink to="/diagnostics"><GiMedicinePills /> Diagnosticos</NavLink>
            </div>
        </div>
    )
}