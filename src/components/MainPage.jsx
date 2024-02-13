import Carrousel from './Carrousel';
import About from './About'
import Services from './Services';
import ScrollToTop from "react-scroll-to-top";
import Contact from './Contact';
import Footer from './Footer';
import Assurances from './Assurances';
import Header from './Header';

export default function MainPage(){
    const scrollStyle = {
        backgroundColor: "#09954b",
        borderRadius: "50px",
    }
    return (
        <div>
            <Header/>
            <Carrousel/>
            <About/>
            <Services/>
            <Assurances/>
            <Contact/>
            <Footer/>
            <ScrollToTop smooth color='#FFFFFF' style={scrollStyle} />
        </div>
    )
}