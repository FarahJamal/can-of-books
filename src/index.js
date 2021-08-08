import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// TODO: wrap everything in Auth0
ReactDOM.render(
  <Auth0Provider domain={process.env.REACT_APP_DOMAIN}
   clientId={process.env.REACT_APP_ID} 
   redirectUri={window.location.origin}> 
  <App/>
</Auth0Provider>,
  document.getElementById('root')
);
