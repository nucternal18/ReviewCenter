import React, {useContext} from 'react'
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/auth/AuthContext';

const PublicRoute = ({ component: Component, ...rest }) => {
    const authContext = useContext(AuthContext);

    const { isAuthenticated, token } = authContext;

    return (
        <Route
        {...rest}
        render={props =>
            isAuthenticated && token ? (
                <Redirect to='/dashboard' />
            ) : (
            <Component {...props} />
            )
        }
        />
    )
}

export default PublicRoute
