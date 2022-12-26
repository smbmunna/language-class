import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

function ColorSchemesExample() {
  return (
    <div className='header-container'>
      <Navbar className='nav-bar-container fixed-top'>
        <Container>
          <Navbar.Brand  href="#"><img className='site-logo' src={logo}/></Navbar.Brand>
          <Nav className="me-auto">
            <Link className="navigation-items" to='/home'>Home</Link>
            <Link className="navigation-items" to='/course'>Courses</Link>
            <Link className="navigation-items" to='/events'>Events</Link>
            <Link className="navigation-items" to='/contact'>Contact</Link>
            <Link className="navigation-items" to='/about'>About</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default ColorSchemesExample;