import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';


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
            {this.props.arr &&
             this.props.arr
            .map((book, idx)=>{
                console.log(book.books[idx].imageUrl)
                return (
                         <Carousel.Item  key={idx}>
                         <Card.Header style={{ 'font-size': '26px' }}>
                                        {book.books[idx].title}
                                    </Card.Header>
                                    <img
                                        className="d-block w-100"
                                        src={book.books[idx].imageUrl}
                                        alt={book.books[idx].title}
                                        style={{ height: '500px' }}
                                    />
                                    <Card.Footer style={{'word-wrap': 'break-word'}}>
                                    {book.books[idx].description}


                                    </Card.Footer>
                                    <Card.Text>
                                        {book.books[idx].status}📖📖
                                    </Card.Text>
                       </Carousel.Item>
                )
                
            })
            
            } </Carousel>
            </Card>
        
        );
    };
};

export default MyFavBooks;
