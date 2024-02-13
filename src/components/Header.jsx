import './Header.css'
import cmdm from '../assets/img/cmdm.png'
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import { IoMenu } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom';

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
                    <li><a href='#services'>Servicios</a></li>
                    <li><a href='#contact'>Contacto</a></li>
                    <li><a href='#assurances'>Seguros</a></li>
                    <li className='login'> <Link to='/login'><MdAccountCircle className='icon' /> Entrar</Link></li>
                </ul>
            </nav>
            {isResponsive && <IoMenu className='menuIcon' onClick={handleResponsive} style={{top: "20px"}}/>}
        </header>
    )
}