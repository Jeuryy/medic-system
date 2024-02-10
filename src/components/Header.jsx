import './Header.css'
import cmdm from '../assets/img/cmdm.png'
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import { IoMenu } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";


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
                    <li><a href='#about'>Quienes somos</a></li>
                    <li><a href='#'>Servicios</a></li>
                    <li><a href='#'>Noticias</a></li>
                    <li><a href='#'>Contacto</a></li>
                </ul>
            </nav>
            <div className="login" style={{display: isResponsive && (responsive ? "none" : "block")}}>
                <a href='#'>                <MdAccountCircle className='icon' /> Entrar</a>
            </div>
            {isResponsive && <IoMenu className='menuIcon' onClick={handleResponsive} style={{top: "3%"}}/>}
        </header>
    )
}