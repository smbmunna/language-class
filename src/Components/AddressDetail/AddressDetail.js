import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import './AddressDetail.css';



const AddressDetail = (props) => {
    const { city, address, email } = props.address; //Loading Address data
    return (
        <Col>
            <Card className='card-container' style={{ width: '18rem' }}>
                <Card.Body>
                    <h1><FontAwesomeIcon icon={faLocationDot} /></h1>
                    <Card.Title className='city'>{city}</Card.Title>
                        <Col><Card.Title className='test2'> <FontAwesomeIcon icon={faLocationDot} />  Address</Card.Title></Col>
                    <Card.Text>
                        {address}
                    </Card.Text>
                    <Card.Title><FontAwesomeIcon icon={faEnvelope} /> Email</Card.Title>
                    <Card.Text>
                        {email}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default AddressDetail;