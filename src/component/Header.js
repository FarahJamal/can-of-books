import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import '../css/Header.css';
import Logout from './Logout';
import Login from './Login';
import { withAuth0 } from '@auth0/auth0-react';
import logo from '../images/logo.png'; // Tell Webpack this JS file uses this image



class Header extends React.Component {
  render() {
    const {
      isAuthenticated,
    } = this.props.auth0;
    return(
      <>

      <Navbar className="ml-auto" collapseOnSelect  bg="dark" variant="dark" style={{'margin-bottom':'100px',background: '#43C6AC', 
                        background: '-webkit-linear-gradient(to top, #191654, #43C6AC)',
                        background: 'linear-gradient(to top, #191654, #43C6AC)'}}>

        <Navbar.Brand><img src={logo} style={{'width':'220px','height':'230px'}} alt="logo"/></Navbar.Brand>
        {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
        <div style={{'margin-left': '360px','text-align': 'center','color':'white'}}>
            <h1 >cover cove <br/><h6>you best mate ever!</h6></h1>
</div>

        

        {isAuthenticated ? <><Logout/> 
</>
: <Login/>
}

      
          
        
      </Navbar>


      
      </>
    );
  
}
}

export default withAuth0(Header);
