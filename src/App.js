import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menu from './components/Menu'; 
import Home from './pages/Home'; 

function App() {
  return (
    <div className='app-container'>
      <Menu />
      <Home />
    </div>
  );
}

export default App;
