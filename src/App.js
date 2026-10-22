import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react'; 
import './App.css';

import Menu from './components/Menu'; 
import Home from './pages/Home'; 
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import WorkExperience from './pages/WorkExperience';
import Contact from './pages/Contact';

const pages = {
  '/': Home, 
  '/about': About, 
  '/skills': Skills, 
  '/projects': Projects, 
  '/experience': WorkExperience, 
  '/contact': Contact 
}; 

export default function App() {
  const getPath = () => window.location.pathname.replace(/\/$/, '') || '/'; 

  const [path, setPath] = useState(getPath); 

  useEffect(() => {
    const onPopState = () => setPath(getPath()); 
    window.addEventListener('popstate', onPopState); 
    return () => {
      window.removeEventListener('popstate', onPopState); 
    }; 
  }, []); 

  function navigate(to) {
    if (window.location.pathname !== to) {
      window.history.pushState({}, '', to); 
    }

    setPath(to); 
    window.scrollTo(0, 0); 
  }

  const Page = pages[path]; 

  return (
    <div className='app-container'>
      <Menu path={path} navigate={navigate} /> 

      <main className={path === '/' ? 'home-layout' : 'inner-layout'}>
        {Page ? (
            <Page navigate={navigate}/> 
         ) : (
            <section className='not-found'>
              <h1>Page not found</h1>
              <button onClick={() => navigate('/')}>
                Back home 
              </button>
            </section>
         )}
      </main>
    </div>
  ); 
}

// function App() {
//   return (
//     <div className='app-container'>
//       <Menu />
//       <Home />
//       <About />
//       <Skills />
//       <Projects />
//       <WorkExperience />
//       <Contact />
//     </div>
//   );
// }