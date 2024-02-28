import { Link } from 'react-router-dom'
import './UserMenu.css'
import { FaUser, FaUsers, FaCalendar,FaUserDoctor,   } from "react-icons/fa6";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { GiMedicinePills } from "react-icons/gi";
import { FaHome } from 'react-icons/fa';

export default function UserMenu(){
    return (
        <div className='user-menu-container'>
            <div className='user-menu'>
    {/*<p className='first'>Dashboard</p>*/}
    {<Link to="/" className='home-img'><FaHome/></Link>}

                <Link to="/dashboard"><RxDashboard/> General</Link> 
                <Link to="/profile"><FaUser/> Perfil</Link>              
                <Link to="/users"><FaUsers/> Usuarios</Link>
                <Link to="/citas"><FaCalendar/> Citas</Link>
                <Link to="/doctors"><FaUserDoctor/> Doctores</Link>
                <Link to="/services"><AiOutlineMedicineBox/> Servicios</Link>
                <Link to="/diagnostics"><GiMedicinePills /> Diagnosticos</Link>
            </div>
        </div>
    )
}