
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const{loading,user}=useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }
    else if(user?.email){
        return children
    }
    
    else{
        return (
            <Navigate state={location.pathname} to={'/login'}>
                
            </Navigate>
        );
    }
};

PrivateRoute.propTypes = {
    children:PropTypes.any
};

export default PrivateRoute;