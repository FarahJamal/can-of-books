import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import './footer.css'
import Container from 'react-bootstrap/Container'
class Footer extends React.Component {
  render() {
    return(
      <div className="fixed-bottom">  
      <Navbar bg="dark" >
          <Container style={{'margin-left': '40%','padding':'30px'}}>
              &copy; cover cove
          </Container>
      </Navbar>
  </div>
    );
  }
}

export default Footer;
