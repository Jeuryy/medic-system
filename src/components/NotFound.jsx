import './NotFound.css'
import { Link } from 'react-router-dom'

export default function NotFound(){
    return (
        <div className='notfound'>
            <div className='notfound-container'>
                <p>Error <b>404</b></p>
                <h1>Pagina no encontrada</h1>
                <Link to="/" className='volver'>Volver al inicio</Link>
            </div>
        </div>
    )
}