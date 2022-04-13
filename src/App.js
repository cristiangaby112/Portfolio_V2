
import './App.css';
import Home from './components/Home/Home';
import Skills from './components/skills/Skills';
import NavBar from './components/NavBar/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home />
      <Skills />
    </div>
  );
}

export default App;
