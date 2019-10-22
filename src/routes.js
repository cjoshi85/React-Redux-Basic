import React from 'react';
import { Router, Switch, Route,Redirect } from 'react-router-dom';
import App from './App';
import Login from './Login';
import Dashboard from './Dashboard';
import history from './history';
import { isLogin } from './utils';
const Main = () => {
    return(
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/login" component={Login}/>
                <PrivateRoute exact path="/dashboard" component={Dashboard}/>
            </Switch>
        </Router>
    )
}

const PrivateRoute = ({component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default Main;
