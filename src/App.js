import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from './Components/Image';
import MyButton from './Components/MyButton';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import './App.css';

const App = () => {

  return(
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
            <img
              src="#"
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
          <h1>Choisissez une marque</h1>
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
              <Legende />
            </Route>
            <Route path="/pure">
              <Pure />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

function Legende() {
  let match = useRouteMatch();

  return (
    <div>
      <Nav fill variant="tabs" defaultActiveKey="/couleur">
        <Nav.Item>
          <Link to={`${match.url}/couleur`}>Couleur</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to={`${match.url}/jantes`}>Jantes</Link>
        </Nav.Item>
      </Nav>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/couleur`}>
          <Couleur />
        </Route>
        <Route path={`${match.path}/jantes`}>
          <Jantes />
        </Route>
      </Switch>
    </div>
  );
}

function Pure() {
  let match = useRouteMatch();

  return (
    <div>
      <Nav fill variant="tabs" defaultActiveKey="/couleur">
        <Nav.Item>
          <Link to={`${match.url}/couleur`}>Couleur</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to={`${match.url}/jantes`}>Jantes</Link>
        </Nav.Item>
      </Nav>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/couleur`}>
          <Couleur />
        </Route>
        <Route path={`${match.path}/jantes`}>
          <Jantes />
        </Route>
      </Switch>
    </div>
  );
}

function Couleur() {
  return (
    <div>
      <img className="options" src="#" alt="blanc"/>
      <MyButton couleur="Blanc" />
      <img className="options" src="#" alt="bleu"/>
      <MyButton couleur="Bleu" />
      <img className="options" src="#" alt="noir"/>
      <MyButton couleur="Noir" />

      <Image />
    </div>
  );
}

function Jantes() {
  return (
    <div>
      <MyButton jantes="JantesLegende" />
      <MyButton jantes="JantesSerac" />
      <MyButton jantes="JantesStandard" />

      <Image />
    </div>
  );
}

function Sellerie() {
  return (
    <div>
      <MyButton sellerie="Brun" />
      <MyButton sellerie="Noir" />
      <MyButton sellerie="NoirDinamica" />
      <MyButton sellerie="NoirPerfore" />

      <Image />
    </div>
  );
}

function Equipement() {
  return (
    <div>
      <MyButton equipement="Conduite" />
      <MyButton equipement="Confort" />
      <MyButton equipement="Design" />
      <MyButton equipement="MediaNavigation" />
      <MyButton equipement="Exterieur" />
      <MyButton equipement="Interieur" />
      <MyButton equipement="Securite" />

      <Image />
    </div>
  );
}

function Accessoires() {
  return (
    <div>
      <MyButton accessoires="Exterieur" />
      <MyButton accessoires="Garage" />
      <MyButton accessoires="Interieur" />
      <MyButton accessoires="Multimedia" />
      <MyButton accessoires="TransportProtection" />

      <Image />
    </div>
  );
}

export default App;
