import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col'
class Profile extends React.Component {
    render() {
        const { user } = this.props.auth0;

        return (
            <>
                <Card style={{
                    width: '18rem', border: '3px solid black', margin: 'auto', 'border-raduis': '50px',
                
                background: '#b92b27', 
                    background:' -webkit - linear - gradient(to top, #1565C0, #b92b27)',  /* Chrome 10-25, Safari 5.1-6 */
                    background: 'linear - gradient(to top, #1565C0, #b92b27)'/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

 }}>
                    <Image src={user.picture} roundedCircle style={{ width: '10rem', margin: 'auto' }} />
                    <Card.Body>
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Text>
                            {user.email}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </>
        )

        {/* <div>Hello {user.name}<br/>
        E-mail: {user.email}
        <Col xs={6} md={4}>
      <Image src={user.picture} roundedCircle />
    </Col>
        </div>; */}
    }

}

export default withAuth0(Profile);