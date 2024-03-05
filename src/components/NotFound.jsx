import Login from '../Pages/Login';
import './NotFound.css'
import { Link, useNavigate } from 'react-router-dom'

export default function NotFound(props){
    const {isLogged, setIsLogged} = props
    const navigate = useNavigate();

    return (
        <div> { isLogged ? (
            <div className='notfound'>
                <div className='notfound-container'>
                    <p>Error <b>404</b></p>
                    <h1>Pagina no encontrada</h1>
                    <Link to="/" className='volver'>Volver al inicio</Link>
                </div>
            </div>) :
                (   
                <div>
                    <Login/>
                </div>
                )}
        </div>
    )
}