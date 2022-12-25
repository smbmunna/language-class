import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import './Subscribe.css';
const Subscribe = () => {
    return (
       <div className='background-container'>
            <Container className='main-container'>
            <h2 className='title'>Subscribe now</h2>
            <p>Receive weekly newsletter with educational materials, new courses, most popular posts, popular books and much more!</p>

            <Form className='form-container'>
                <Form.Group className="mb-3 email-field" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                    <Button variant="danger" type="submit" className='subscribe-btn'>
                        Subscribe
                    </Button>
            </Form>
            </Container>
       </div>
    );
};

export default Subscribe;