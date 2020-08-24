import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from './img/sources-homepage/logo/logo-white.png';
import Image from './Components/Image';
import MyButton from './Components/MyButton';
import { Button } from 'react-bootstrap';

const App = () => {

  const image = useSelector(state => state.image)

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

      <Button onClick={() => console.log(image)}/>

      <MyButton marque="legende" />
      <MyButton marque="pure" />

      <Image />
    </div>
  )
}

export default App;
