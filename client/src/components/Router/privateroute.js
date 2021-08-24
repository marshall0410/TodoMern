import authservice from '../../services/authentication'
import { Redirect, Route } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Timeout from '../../components/Timeout';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            authservice.getAuth() ? (
            <>
                <Timeout />
                <Navbar />
                {console.log('Authenticated Page')}
                <Component {...props} />  
            </>     
        ) : (
            <Redirect
            to={{
                pathname: "/"
            }}
            />
        )
        }
    />  
);
