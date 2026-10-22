import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const menuItems = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/skills', 'Skills'],
  ['/projects', 'Projects'],
  ['/experience', 'Experience'],
  ['/contact', 'Contact'],
];

export default function Menu({ path, navigate }) {
  return (
    <Navbar expand="lg" variant='dark' className="navbar">
      <Container fluid='lg'>
        <Navbar.Brand className='navbar-brand ml-auto' href="/"
          onClick={(e) => {
            e.preventDefault(); 
            navigate('/')
          }}>
            EP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto justify-content-end">
            {menuItems.map(([url, label]) => (
              <Nav.Link key={url} 
              href={url} 
              active={path === url} 
              onClick={(e) => {
                e.preventDefault(); 
                navigate(url); 
              }}>
                {label} 
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}