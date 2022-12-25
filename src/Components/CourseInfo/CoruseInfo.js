import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faMessage, faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
import './CourseInfo.css';
const CoruseInfo = (props) => {
    const { course_title, description, price, img, participant, comments, location } = props.course; //Loading Course data
    return (

        <Col className='cards'>
            <Card style={{ width: '20rem' }}>
                <Card.Img className='course-img' variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='course-lable'><h5>{course_title}</h5></Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <hr />
                    <Row>
                        <Col><FontAwesomeIcon icon={faUserGroup} /> <Card.Subtitle>{participant}</Card.Subtitle></Col>
                        <Col><FontAwesomeIcon icon={faMessage} /> <Card.Subtitle>{comments}</Card.Subtitle></Col>
                        <Col style={{ textAlign: 'center' }}><FontAwesomeIcon icon={faLocationCrosshairs} /> <Card.Subtitle style={{ textAlign: 'center' }}>{location}</Card.Subtitle></Col>
                        <Col><Button variant="warning"><Card.Subtitle>${price}</Card.Subtitle></Button></Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default CoruseInfo;