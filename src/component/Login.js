import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import '../css/Login.css';
import { withAuth0 } from '@auth0/auth0-react';

class Login extends React.Component {

  render() {
    const {
      isAuthenticated,
      loginWithPopup,
    } = this.props.auth0;
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
         
          { !isAuthenticated && (
          <Button variant="outline-warning" onClick={loginWithPopup}>LOGIN</Button>
  )}
        </Card.Body>
      </Card>
    )
  }
}

export default withAuth0(Login);
