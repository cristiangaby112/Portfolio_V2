
import './App.css';
import Home from './pages/Home/Home';
import Skills from './pages/skills/Skills';
import NavBar from './components/NavBar/NavBar';
import Proyectos from './pages/Proyectos/Proyectos';
import Contacto from './pages/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import Titulos from './pages/Titulos/Titulos';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home />
      <Skills />
      <Proyectos />
      <Titulos />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
