import './App.css';
import Carrousel from './components/Carrousel';
import Header from './components/Header';
import About from './components/About'
import Services from './components/Services';
import ScrollToTop from "react-scroll-to-top";


function App() {
  const scrollStyle = {
    backgroundColor: "#09954b",
    borderRadius: "50px"
  }

  return (
    <div className="App">
      <Header/>
      <Carrousel/>
      <About/>
      <Services/>
      <ScrollToTop smooth color='#FFFFFF' style={scrollStyle} />
    </div>
  );
}

export default App;
