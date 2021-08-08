import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
class Logout extends React.Component {
    render() {
        const {
            isAuthenticated,
            logout,
          } = this.props.auth0;
        
          return isAuthenticated && (
            <Button variant="outline-warning" onClick={() => {
              logout({ returnTo: window.location.origin });
            }} style={{'margin-left':'450px'}}>LOGOUT</Button>

            
          );  
    }
   
}



export default withAuth0(Logout);