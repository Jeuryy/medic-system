import Login from '../Pages/Login';
import UserMenu from '../Pages/UserMenu';
import Header from './Header';
import './NotFound.css'
import { Link, useNavigate } from 'react-router-dom'
import UserHeader from './UserHeader';

export default function NotFound(props){
    const {isLogged, setIsLogged} = props
    const navigate = useNavigate();

    return (
        <div id='notfound'> 
        { isLogged ? (
            <div className='logged-notfound'>
                <UserMenu/>
                <div className='logged-notfound-right'>
                <UserHeader/>
                    <div className='back-login'>
                        <h3>Error 404 <b>Pagina no encontrada</b></h3>
                    </div>
                </div>
            </div>
            ) :
                (<div>
                    <div>
                        <Header/>
                    </div>
                    <div className='back-login'>
                    <h3>Necesitas iniciar sesion para continuar</h3>
                    <Link to="/Login" className="button-48" role="button"><span className="text">Iniciar Sesion</span></Link>
                    <Link to="/" className="button-48" role="button"><span className="text">Volver a inicio</span></Link>
                    </div>
                </div>
                )}
        </div>
    )
}