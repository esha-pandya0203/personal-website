import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Menu() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand className='navbar-brand ml-auto' href="#home">
            EP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto justify-content-end">
            <Nav.Link href="#home" className='menu-link'>Home</Nav.Link>
            <Nav.Link href="#about" className='menu-link'>About</Nav.Link>
            <Nav.Link href="#skills" className='menu-link'>Skills</Nav.Link>
            <Nav.Link href="#projects" className='menu-link'>Projects</Nav.Link>
            <Nav.Link href="#experience" className='menu-link'>Experience</Nav.Link>
            <Nav.Link href="#contact" className='menu-link'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}