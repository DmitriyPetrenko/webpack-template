// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// Instruments
import RouteWithSubRoutes from '../../instruments/RouteWithSubRoutes';
// Routes config
import routes from '../../config/routes';

// eslint-disable-next-line
@hot(module)
class App extends Component {
    render() {
        return (
            <div className="container">
                <Switch>
                    {routes.map((route) => (
                        <RouteWithSubRoutes key={route.path} {...route} />
                    ))}
                </Switch>
            </div>
        );
    }
}

export default withRouter(connect()(App));
