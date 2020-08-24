import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from './img/sources-homepage/logo/logo-white.png';

const App = () => {

  return(
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
            <img
              src={Logo}
              className="d-inline-block align-top"
              alt="logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#save">Save</Nav.Link>
            <Nav.Link href="#reset">Reset</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default App;
