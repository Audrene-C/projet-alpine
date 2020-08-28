import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Exterieur from './Exterieur';
import Garage from './Garage';
import Interieur from './Interieur';
import Multimedia from './Multimedia';
import Transport from './Transport';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

const Accessoires = () => {
    let match = useRouteMatch();

    return (
      <div>
          <Nav fill variant="tabs" defaultActiveKey="/couleur">
            <Nav.Item>
                <Link to={`${match.url}/exterieur`}>Exterieur</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to={`${match.url}/garage`}>Garage</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to={`${match.url}/interieur`}>Interieur</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to={`${match.url}/multimedia`}>Multimedia</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to={`${match.url}/transport`}>Transport</Link>
            </Nav.Item>
          </Nav>
    
            {/* The Topics page has its own <Switch> with more routes
                that build on the /topics URL path. You can think of the
                2nd <Route> here as an "index" page for all topics, or
                the page that is shown when no topic is selected */}
            <Switch>
                <Route path={`${match.path}/exterieur`}>
                    <Exterieur />
                </Route>
                <Route path={`${match.path}/garage`}>
                    <Garage />
                </Route>
                <Route path={`${match.path}/interieur`}>
                    <Interieur />
                </Route>
                <Route path={`${match.path}/multimedia`}>
                    <Multimedia />
                </Route>
                <Route path={`${match.path}/transport`}>
                    <Transport />
                </Route>
            </Switch>
      </div>
    );
}

export default Accessoires;