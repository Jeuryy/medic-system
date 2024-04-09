import './UserHeader.css'
import { Link } from 'react-router-dom'
import { MdAccountCircle } from 'react-icons/md'

export default function UserHeader(){
    return (
        <div className='user-header'>
                <div className='user-header-first'>
                    <p className='first'>Principal</p>
                </div>
                <div className='user-header-last'>
                <Link to="/Profile" className='profile-icon'><MdAccountCircle className='icon' /></Link>
                </div>
        </div>
    )
}