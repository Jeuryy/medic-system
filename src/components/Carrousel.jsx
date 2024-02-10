// <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carrousel.css';
import carrusel1 from '../assets/img/carrusel1.SVG';
import carrusel2 from '../assets/img/carrusel2.SVG';
import carrusel3 from '../assets/img/carrusel3.SVG';

export default function Carrousel() {
    return (
            <Carousel>
            <Carousel.Item>
                <img className='carrousel-img w-100' src={carrusel1} alt="..." />
            </Carousel.Item>
            <Carousel.Item>
                <img className='carrousel-img w-100' src={carrusel2} alt="..." />
            </Carousel.Item>
            <Carousel.Item>
                <img className='carrousel-img w-100' src={carrusel3} alt="..." />
            </Carousel.Item>
        </Carousel>
    );
}

