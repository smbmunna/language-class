import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';
import './EventInfo.css';

const EventInfo = (props) => {
    const { eventTitle, description, date, month } = props.event;
    return (
        
            <Card style={{ width: '18rem', margin: '20px', height: '15rem' }}>
                <Card.Body>
                    <Row>
                        <Col>
                            <Card.Title>{date}</Card.Title>
                            <Card.Subtitle>{month}</Card.Subtitle>
                        </Col>
                        <Col style={{ width: '50rem', marginLeft: '-150px' }}>
                            <Card.Title><span className='event-title'>{eventTitle}</span></Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <Row>
                                <Col><Card.Subtitle><FontAwesomeIcon icon={faLocationDot} /> Barishal</Card.Subtitle></Col>
                                <Col><Card.Subtitle><FontAwesomeIcon icon={faClock} /> 10am</Card.Subtitle></Col>

                            </Row>
                        </Col>

                    </Row>
                    <Row>

                    </Row>
                </Card.Body>
            </Card>        

    );
};

export default EventInfo;