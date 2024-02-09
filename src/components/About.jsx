import './About.css'
import dr from '../assets/img/dr1.png'

export default function About(){
    return(
        <section id='about'>
            <div className='about-1'>
                <div>
                    <h2>SOBRE NOSOTROS</h2>
                    <p>¿Quiénes Somos?</p>    
                </div>
                <img src={dr} alt='Doctor crossed hands smiling'/>    
            </div>
            <div className='about-2'>
                
            </div>
        </section>
    )
}