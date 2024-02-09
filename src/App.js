import './App.css';
import Carrousel from './components/Carrousel';
import Header from './components/Header';
import About from './components/About'
function App() {
  return (
    <div className="App">
      <Header/>
      <Carrousel/>
      <About/>
    </div>
  );
}

export default App;
