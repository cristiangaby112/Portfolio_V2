
import './App.css';
import Home from './pages/Home/Home';
import Skills from './pages/skills/Skills';
import NavBar from './components/NavBar/NavBar';
import Proyectos from './pages/Proyectos/Proyectos';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home />
      <Skills />
      <Proyectos />
    </div>
  );
}

export default App;
