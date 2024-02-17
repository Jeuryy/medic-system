import { Link } from 'react-router-dom'
import './UserMenu.css'
import { FaUser, FaUsers, FaCalendar,FaUserDoctor,   } from "react-icons/fa6";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { GiMedicinePills } from "react-icons/gi";


export default function UserMenu(){
    return (
        <div className='user-menu-container'>
            <div className='user-menu'>
                <p className='first'>Dashboard</p>
                <Link to="/Dashboard"><RxDashboard/> General</Link> 
                <Link to="/Profile"><FaUser/> Perfil</Link>              
                <Link to="/Users"><FaUsers/> Usuarios</Link>
                <Link to="/Citas"><FaCalendar/> Citas</Link>
                <Link to="/Doctors"><FaUserDoctor/> Doctores</Link>
                <Link to="/Services"><AiOutlineMedicineBox/> Servicios</Link>
                <Link to="/Diagnostics"><GiMedicinePills /> Diagnosticos</Link>
            </div>
        </div>
    )
}