import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import '../css/footer.css'
import Container from 'react-bootstrap/Container'
class Footer extends React.Component {
  render() {
    return(
      <Navbar className='hi' bg="dark" style={{background: '#43C6AC', 
      background: '-webkit-linear-gradient(to top, #191654, #43C6AC)',
      background: 'linear-gradient(to top, #191654, #43C6AC)',color:'white'}} >
          <Container style={{'margin-left': '40%','padding':'30px'}}>
              &copy; cover cove
          </Container>
      </Navbar>
    );
  }
}

export default Footer;
