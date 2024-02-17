import './UserHeader.css'
import cmdm from '../assets/img/logo-notext.png'
import { Link } from 'react-router-dom'
import { MdAccountCircle } from 'react-icons/md'
export default function UserHeader(){
    return (
        <div className='user-header'>
                <div className='user-header-first'>
                    {/*<Link to="/" className='home-img'><img className="cmdm-logo" src={cmdm} alt='Logo de Centro Medico Divina Misericordia' /></Link>*/}
                    
                </div>
                <div className='user-header-last'>
                <Link to="/Profile" className='profile-icon'><MdAccountCircle className='icon' /></Link>
                </div>
        </div>
    )
}