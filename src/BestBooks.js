import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from "axios";
import MyFavBooks from './MyFavBooks';

class BestBooks extends React.Component {
  constructor(props){
    super(props);
    this.state={
      booksArr:[],
    }
  }


RenderBestBooks = async () => {
  const { user } = this.props.auth0;

  try{

    let URL=`http://localhost:4444/books?email=${user.email}`;
    console.log(URL);
  let data = await axios.get(URL)
  //console.log(weatherData);

  await this.setState({
    booksArr:data.data
  })

}
     catch (e) {
      if (e.response && e.response.data) {
       
          console.log('error');
      }
  }

}
componentDidMount=()=>{
  this.RenderBestBooks();
}

render() {


    return(
      <div style={{'text-align':'center'}}>

       <h1>My Favorite Books</h1>
                <p>
          This is a collection of my favorite books
        </p>
        <MyFavBooks arr={this.state.booksArr}/>
        </div>

    )
  }
}

export default withAuth0(BestBooks);