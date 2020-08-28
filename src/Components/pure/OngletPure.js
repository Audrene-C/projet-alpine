import React from 'react';
import Nav from 'react-bootstrap/Nav';
import SetMarque from '../../tools/SetMarque';
import MyCarousel from '../MyCarousel';
import Recap from '../Recap';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import CouleurPure from './CouleurPure';
import JantesPure from './JantesPure';
import SelleriePure from './SelleriePure';
import Accessoires from '../accessoires/Accessoires';
import Equipements from '../equipements/Equipements';

const OngletPure = () => {
    let match = useRouteMatch();
    SetMarque('Pure')
    
    return (
      <div>
        <Nav fill variant="tabs" defaultActiveKey="/couleur">
          <Nav.Item>
            <Link to={`${match.url}/couleur`}>Couleur</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to={`${match.url}/jantes`}>Jantes</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to={`${match.url}/sellerie`}>Sellerie</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to={`${match.url}/equipements`}>Equipements</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to={`${match.url}/accessoires`}>Accessoires</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to={`${match.url}/recap`}>Recap</Link>
          </Nav.Item>
        </Nav>
  
        {/* The Topics page has its own <Switch> with more routes
            that build on the /topics URL path. You can think of the
            2nd <Route> here as an "index" page for all topics, or
            the page that is shown when no topic is selected */}
        <Switch>
          <Route path={`${match.path}/couleur`}>
            <CouleurPure />
          </Route>
          <Route path={`${match.path}/jantes`}>
            <JantesPure />
          </Route>
          <Route path={`${match.path}/sellerie`}>
            <SelleriePure />
          </Route>
          <Route path={`${match.path}/equipements`}>
            <Equipements />
          </Route>
          <Route path={`${match.path}/accessoires`}>
            <Accessoires />
          </Route>
          <Route path={`${match.path}/recap`}>
            <Recap />
          </Route>
        </Switch>

        <MyCarousel/>
      </div>
    );
}

export default OngletPure;