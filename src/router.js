import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import history from './history';
import App from './App';
import Login from './pages/login';
import Admin from './pages/admin';
import Order from './pages/order';
import Home from './pages/home';

export default class ERouter extends React.Component {
    render() {
        return(
            <Router history={history}>
                <Switch>
                    <Route path='/'>
                        <App>
                            <Switch>
                                {/* <Route exact path='/' component={Login}/> */}
                                <Route path='/home'>
                                    <Home>
                                        <Switch>
                                            <Route exact path='/home' component={Admin} />
                                            <Route path='/home/order' component={Order} />
                                            <Redirect to='/home' />
                                        </Switch>
                                    </Home>
                                </Route>
                                <Redirect to='/'/>
                            </Switch>
                        </App>
                    </Route>
                </Switch>
            </Router>
        )
    }
}