import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

class Logout extends React.Component {
    render() {
        const {
            isAuthenticated,
            logout,
          } = this.props.auth0;
        
          return isAuthenticated && (
            <div style={{'margin-left':'450px'}}>
            <Link to="/" >&nbsp;&nbsp;&nbsp; Home </Link> <Link to="/profile">&nbsp;&nbsp;&nbsp; Profile </Link> 
            <Button variant="outline-warning" onClick={() => {
              logout({ returnTo: window.location.origin });
            }} >LOGOUT</Button>

            </div>
          );  
    }
   
}



export default withAuth0(Logout);