import './About.css'
import dr from '../assets/img/dr1.png'
import years from '../assets/img/16years.png'

export default function About(){
    return(
        <section id='about'>
            <div className='about-1'>
                <div>
                    <h2>SOBRE NOSOTROS</h2>
                    <p>¿Quiénes Somos?</p>    
                </div>
            </div>
            <div className='about-2'>
                <div className='left-about'>
                    <p>Somos una empresa la cual se rige en los valores 
                    cristianos, trabajando arduamente día tras día, para 
                    llevar siempre un servicio de la más alta calidad, con 
                    profesionales de la salud preparados para brindar el 
                    mejor servicio médico.</p>
                    <img src={years} alt='Years of service'/>
                </div>
                <div className='right-about'>
                    <p>Con la experiencia de nuestro equipo de médicos al cuidado de
                    la salud, nuestra dedicación y compromiso han sido elementos clave
                    para nuestro éxito y constante crecimiento.</p>
                    <div className='quote'>
                        <q>Donde el arte de la medicina es amada, también existe 
                            amor por la humanidad
                        </q>
                        <h5>Hipócrates de Cos</h5>
                    </div>
                    {/*<img src={dr} alt='Doctor crossed hands smiling'/>*/}    
                </div>           
            </div>
        </section>
    )
}