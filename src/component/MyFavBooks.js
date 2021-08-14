import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import {Card,Button} from 'react-bootstrap';


class MyFavBooks extends React.Component{
    
    
    render(){
       
        return(
/*background: #43C6AC; 
background: -webkit-linear-gradient(to top, #191654, #43C6AC); 
background: linear-gradient(to top, #191654, #43C6AC); 
 */

             <Card style={{
                        'width': '80%','margin-top': '50px', 'margin-bottom': "50px", background: '#43C6AC', 
                        background: '-webkit-linear-gradient(to top, #191654, #43C6AC)',
                        background: 'linear-gradient(to top, #191654, #43C6AC)', boxShadow: '2px 2px 2px black', color: 'white',margin:'auto'
                    }} >
            <Carousel fade  className="books" style={{ width: '70%', margin: 'auto' ,'carousel-indicators':'none'}}>
            { this.props.arr.books && console.log(this.props.arr.books[0].title)}

{this.props.arr.books &&

             this.props.arr.books !== null? this.props.arr.books.map((book, idx)=>{
                console.log(book)
                return (
                         <Carousel.Item  key={idx}>
                         <Card.Header style={{ 'font-size': '26px' }}>
                                    </Card.Header>
                                    <img
                                        className="d-block w-100"
                                        src={book.imageUrl}
                                        alt={book.title}
                                        style={{ height: '500px' }}
                                    />
                                    <Card.Footer style={{'word-wrap': 'break-word'}}>
                                    {book.description}


                                    </Card.Footer>
                                    <Card.Text>
                                        {book.status}📖📖
                                    </Card.Text>
                                    <Button variant='danger' onClick={this.props.deleteBook}>X</Button>
                                    <Button variant="success" value={idx} onClick={this.props.updBook} className="in">Update Data</Button>

                       </Carousel.Item>
                )
                
            })
            :<h1>nothing to show here!</h1> }
            
           
             </Carousel>
            </Card>
        
        );
    };
};

export default MyFavBooks;