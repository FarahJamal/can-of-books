import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import { Modal, Button, Form } from 'react-bootstrap';

class BestBooks extends React.Component {
    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.hide} >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form onSubmit={this.props.addBook}>
                            <Form.Group className="mb-3" controlId="formBasicEmail"  >
                                <Form.Label>Book tiltle</Form.Label>
                                <Form.Control type="text" placeholder="Enter Book Title" name='bookT' required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword" required>
                                <Form.Label>Book description</Form.Label>
                                <Form.Control type="text" placeholder="enter breif description" name='description' required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword" required>
                                <Form.Label>cover book image</Form.Label>
                                <Form.Control type="text" placeholder="enter your cover book url" name='imageUrl' required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword" required>
                                <Form.Label>Book status</Form.Label>
                                <Form.Control type="text" placeholder="enter your book status" name='status' required />
                            </Form.Group>
                           
                            <Modal.Footer>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            <Button variant="danger" type="submit" onClick={this.props.hide}>
                                close!
                            </Button>
                        </Modal.Footer>
                        </Form>
                       
                    </Modal.Body>

                </Modal>

            </>
        )
    }
}

export default withAuth0(BestBooks);