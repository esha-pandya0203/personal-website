import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menu from './components/Menu'; 
import Home from './pages/Home'; 
import About from './pages/About';
import Skills from './pages/Skills';

function App() {
  return (
    <div className='app-container'>
      <Menu />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
