import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from './img/sources-homepage/logo/logo-white.png';
import Image from './Components/Image';
import Blanc from './img/configurateur/couleurs/selection/blanc.jpg';
import Bleu from './img/configurateur/couleurs/selection/bleu.jpg';
import Noir from './img/configurateur/couleurs/selection/noir.jpg';
import MyButton from './Components/MyButton';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

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

      <Router>
        <div>
          <Nav fill variant="tabs" defaultActiveKey="/">
            <Nav.Item>
                <Link to="/">Marque</Link>
            </Nav.Item>
              <Nav.Item>
                <Link to="/couleur">Couleur</Link>
            </Nav.Item>
              <Nav.Item>
                <Link to="/jantes">Jantes</Link>
            </Nav.Item>
              <Nav.Item>
                <Link to="/sellerie">Sellerie</Link>
            </Nav.Item>
              <Nav.Item>
                <Link to="/equipement">Equipement</Link>
            </Nav.Item>
              <Nav.Item>
                <Link to="/accessoires">Accessoires</Link>
            </Nav.Item>
          </Nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/couleur">
              <Couleur />
            </Route>
            <Route path="/jantes">
              <Jantes />
            </Route>
            <Route path="/sellerie">
              <Sellerie />
            </Route>
            <Route path="/equipement">
              <Equipement />
            </Route>
            <Route path="/accessoires">
              <Accessoires />
            </Route>
            <Route path="/">
              <Marque />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

function Marque() {
  return (
    <div>
      <MyButton marque="legende" />
      <MyButton marque="pure" />

      <Image />
    </div>
  );
}

function Couleur() {
  return (
    <div>
      <img className="options" src={Blanc} alt="blanc"/>
      <MyButton couleur="blanc" />
      <img className="options" src={Bleu} alt="bleu"/>
      <MyButton couleur="bleu" />
      <img className="options" src={Noir} alt="noir"/>
      <MyButton couleur="noir" />

      <Image />
    </div>
  );
}

function Jantes() {
  return (
    <div>
      <MyButton jantes="legende" />
      <MyButton jantes="serac" />
      <MyButton jantes="standard" />

      <Image />
    </div>
  );
}

function Sellerie() {
  return (
    <div>
      <MyButton sellerie="brun" />
      <MyButton sellerie="noir" />
      <MyButton sellerie="noir-dinamica" />
      <MyButton sellerie="noir-perfore" />

      <Image />
    </div>
  );
}

function Equipement() {
  return (
    <div>
      <MyButton equipement="conduite" />
      <MyButton equipement="confort" />
      <MyButton equipement="design" />
      <MyButton equipement="media-navigation" />
      <MyButton equipement="exterieur" />
      <MyButton equipement="interieur" />
      <MyButton equipement="securite" />

      <Image />
    </div>
  );
}

function Accessoires() {
  return (
    <div>
      <MyButton accessoires="exterieur" />
      <MyButton accessoires="garage" />
      <MyButton accessoires="interieur" />
      <MyButton accessoires="multimedia" />
      <MyButton accessoires="transport-protection" />

      <Image />
    </div>
  );
}

export default App;
