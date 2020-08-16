import React from 'react';
import { Switch } from 'react-router-dom';

//pages
import Home from '../pages/Home';
import Reviews from '../pages/Reviews';
import Login from '../pages/Login';
import MyReviews from '../pages/MyReviews';
import SignUp from '../pages/SignUp';
import MySettings from '../pages/MySettings';
import Help from "../pages/Help";
import Categories from "../pages/Categories";

// Public and private route
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoutes";

// Context
import setAuthToken from '../utils/setAuthToken';

if (localStorage.token) {
    setAuthToken(localStorage.token)
}

const Routes = () => {
    return (
        <>
            <Switch>
                <PublicRoute exact path="/" component={Home}/>
                <PublicRoute exact path="/reviews" component={Reviews} />
                <PrivateRoute exact path="/myreviews" component={MyReviews} />
                <PublicRoute exact path="/signup" component={SignUp} />
                <PrivateRoute exact path="/mysettings" component={MySettings} />
                <PrivateRoute exact path="/help" component={Help} />
                <PublicRoute exact path="/categories" component={Categories} />
                <PublicRoute exact path="/login" component={Login}/>
            </Switch>
        </>
    )
}

export default Routes;
