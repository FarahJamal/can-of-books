import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import '../css/BestBooks.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from "axios";
import MyFavBooks from './MyFavBooks';
import AddBooksFormModal from './AddBooksFormModal';
import Button from 'react-bootstrap/Button';


class BestBooks extends React.Component {
  constructor(props){
    super(props);
    this.state={
      booksArr:[],
      showModal:false,
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
    booksArr:data.data[0]
  })
console.log(this.state.booksArr[0].books);
}
     catch (e) {
      if (e.response && e.response.data) {
       
          console.log('error');
          alert(e);
          <h1>error happened</h1>


      }
  }

}
addBooks=(event) => {
  event.preventDefault();
const URL=`http://localhost:4444/addbooks`

const bookTitle=event.target.bookT.value;
const description=event.target.description.value;
const imageUrl=event.target.imageUrl.value;
const status=event.target.status.value;
const { user } = this.props.auth0;

const bookData={
  email:user.email,
  title:bookTitle,
  description:description,
  imageUrl:imageUrl,
  status:status

}
console.log(bookData);
axios
.post(URL,bookData)
.then((data) => {
  try{
this.setState({
  booksArr:data.data[0]
})
  }
  catch (e) {
    <>
      <h1>error happened</h1>
    </>
  }
console.log('from best book function',this.state.booksArr);

})
.catch((err)=>{
  console.log(err);
  alert(err);
  <h1>error happened</h1>

})
}


deleteBook=(index)=>{
  const { user } = this.props.auth0;

  const Data={
    email:user.email,
  }
  axios
  .delete(`http://localhost:4444/deleteBook/${index}`,{params:Data})
  .then((data)=>{
    this.setState({ 
      booksArr:data.data
        })
        console.log('hello inside delete func',this.state.booksArr);
  })
  .catch((err)=>{
    console.log(err);
    alert(err);
    <h1>error happened</h1>


  })
}

showModal = () => {
  this.setState({ showModal: true });
};
hideModal =()=>{
  this.setState({ showModal:false, updateShow: false });
}

componentDidMount=()=>{
  this.RenderBestBooks();
}
render() {


    return(
      <div style={{'text-align':'center'}}>
        <Button onClick={this.showModal}>add book</Button>

       <h1>My Favorite Books</h1>
                <p>
          This is a collection of my favorite books
        </p>
      
  <AddBooksFormModal
          addBook={this.addBooks}
          show={this.state.showModal}
          hide={this.hideModal} />

        <MyFavBooks 

        arr={this.state.booksArr!==undefined ? this.state.booksArr.books : null}

       

          deleteBook={this.deleteBook}
        />
          
        
        </div>

    )
  }
}

export default withAuth0(BestBooks);