import React from 'react';
import Nav from 'react-bootstrap/Nav';
import SetMarque from '../tools/SetMarque';
import MyCarousel from './MyCarousel';
import Preview from './Preview';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import CouleurLegende from './CouleurLegende';
import JantesLegende from './JantesLegende';
import Sellerie from './Sellerie';
import Accessoires from './Accessoires';
import Equipements from './Equipements';

const OngletLegende = () => {
    let match = useRouteMatch();
    SetMarque('Legende')
    
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
            <Link to={`${match.url}/preview`}>Preview</Link>
          </Nav.Item>
        </Nav>
  
        {/* The Topics page has its own <Switch> with more routes
            that build on the /topics URL path. You can think of the
            2nd <Route> here as an "index" page for all topics, or
            the page that is shown when no topic is selected */}
        <Switch>
          <Route path={`${match.path}/couleur`}>
            <CouleurLegende />
          </Route>
          <Route path={`${match.path}/jantes`}>
            <JantesLegende />
          </Route>
          <Route path={`${match.path}/sellerie`}>
            <Sellerie />
          </Route>
          <Route path={`${match.path}/equipements`}>
            <Equipements />
          </Route>
          <Route path={`${match.path}/accessoires`}>
            <Accessoires />
          </Route>
          <Route path={`${match.path}/preview`}>
            <Preview />
          </Route>
        </Switch>
  
        <MyCarousel />
      </div>
    );
}

export default OngletLegende;