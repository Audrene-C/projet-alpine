import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Conduite from './Conduite';
import Confort from './Confort';
import Design from './Design.js';
import Media from './Media';
import PersoExt from './PersoExt';
import PersoInt from './PersoInt';
import Securite from './Securite';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

const Equipements = () => {
    let match = useRouteMatch();

    return (
      <div>
          <Nav fill variant="tabs" defaultActiveKey="/couleur">
            <Nav.Item>
                <Link to={`${match.url}/conduite`}>Conduite</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to={`${match.url}/confort`}>Confort</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to={`${match.url}/design`}>Design</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to={`${match.url}/media`}>Media et Navigation</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to={`${match.url}/persoExt`}>Personnalisation extérieur</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to={`${match.url}/persoInt`}>Personnalisation intérieur</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to={`${match.url}/securite`}>Securité</Link>
            </Nav.Item>
          </Nav>
    
            {/* The Topics page has its own <Switch> with more routes
                that build on the /topics URL path. You can think of the
                2nd <Route> here as an "index" page for all topics, or
                the page that is shown when no topic is selected */}
            <Switch>
                <Route path={`${match.path}/conduite`}>
                    <Conduite />
                </Route>
                <Route path={`${match.path}/confort`}>
                    <Confort />
                </Route>
                <Route path={`${match.path}/design`}>
                    <Design />
                </Route>
                <Route path={`${match.path}/media`}>
                    <Media />
                </Route>
                <Route path={`${match.path}/persoExt`}>
                    <PersoExt />
                </Route>
                <Route path={`${match.path}/persoInt`}>
                    <PersoInt />
                </Route>
                <Route path={`${match.path}/securite`}>
                    <Securite />
                </Route>
            </Switch>
      </div>
    );
}

export default Equipements;