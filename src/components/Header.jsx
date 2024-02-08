import './Header.css'
import cmdm from '../assets/img/cmdm.svg'
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import { IoMenu } from "react-icons/io5";

export default function Header(){
    const [responsive, setResponsive] = useState(true)
    
        const isResponsive = useMediaQuery({
            query: '(max-width: 850px)'
        })

        const handleResponsive = () => {
            setResponsive(prevState => !prevState)
        }

    return(
        <header>
            <div className='img-container'>
                <a href='#'><img src={cmdm}/></a>
            </div>
            <nav className='nav-container'>
                <ul style={{display: isResponsive && (responsive ? "none" : "block")}}>
                    <li><a href='#'>Quienes somos</a></li>
                    <li><a href='#'>Servicios</a></li>
                    <li><a href='#'>Noticias</a></li>
                    <li><a href='#'>Contacto</a></li>
                </ul>
            </nav>
            <div className="login" style={{display: isResponsive && (responsive ? "none" : "block")}}>
                <a href='#'>Entrar</a>
            </div>
            {isResponsive && <IoMenu className='menuIcon' onClick={handleResponsive} style={{top: responsive ? "35%" : "15%"}}/>}
        </header>
    )
}