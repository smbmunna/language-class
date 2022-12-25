import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import addressList from '../../data/AddressData';
import AddressDetail from '../AddressDetail/AddressDetail';
import './Contact.css';
const Contact = () => {
    const addresses = addressList;
    return (
        <div>
            <Header></Header>

            <Container>
                <div className='section-title'><h1>Visit Our Offices</h1></div>
                <Row>
                    {
                        addresses.map(address => <AddressDetail address={address}></AddressDetail>)
                    }
                </Row>

                <div className='input-container'>
                    <Form>
                        <h1>Send A Message</h1>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Your Email</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Your Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </Container>

            <Footer></Footer>
        </div>
    );
};

export default Contact;