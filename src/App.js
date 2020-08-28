import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import OngletLegende from './Components/legende/OngletLegende';
import OngletPure from './Components/pure/OngletPure';
import Images from './tools/Images';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css';

const App = () => { 
  
  return(
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
            <img
              src={Images.logo}
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

      <Router>
        <div>
          <Nav fill variant="tabs" defaultActiveKey="/legende">
            <Nav.Item>
              <Link to="/legende">Legende</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/pure">Pure</Link>
            </Nav.Item>
          </Nav>
            
          <Switch>
            <Route path="/legende">
              <OngletLegende />
            </Route>
            <Route path="/pure">
              <OngletPure />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;
