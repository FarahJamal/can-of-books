import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import axios from "axios";
import '../css/profile.css'

class Profile extends React.Component {

    render() {
        const { user } = this.props.auth0;

      


        
        return (
            <div className="card-container">
			<header>
				<img className="proImg"src={user.picture} />
			</header>
			<h1 className="bold-text">
				{user.name}<span className="normal-text">{user.birthday}</span>
			</h1>
			<h2 className="normal-text">Amman</h2>
			<div className="social-container">
				<div className="followers">
					<h1 className="bold-text">120</h1>
					<h2 className="smaller-text">Followers</h2>
				</div>
				<div className="likes">
					<h1 className="bold-text">35</h1>
					<h2 className="smaller-text">Likes</h2>
				</div>
				<div className="photos">
					<h1 className="bold-text">12</h1>
					<h2 className="smaller-text">Photos</h2>
				</div>
			</div>
		</div>
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