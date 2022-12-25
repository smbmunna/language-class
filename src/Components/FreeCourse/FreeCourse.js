import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonChalkboard, faBookOpenReader,faUsers } from '@fortawesome/free-solid-svg-icons';
import './FreeCourse.css';
const FreeCourse = () => {
    return (
        <div className='free-course-container'>
            <div className='test'>
                <Container>
                    <h1 className='title'>GET 10 COURSES FOR FREE! </h1>
                    <h6 className='subtitle'>Strong learning management system to enhance the student-teacher collboration. </h6>
                    <Row className='card-container'>
                        <Col>
                            <Card className='bg-transparent'>
                                <Card.Body className='card-content'>
                                    <div className='icon-area'>
                                        <FontAwesomeIcon icon={faPersonChalkboard} size='3x' className='main-icon-free' />
                                        <Card.Title className='card-title'><h4>CERTIFIED TEACHERS</h4></Card.Title>
                                    </div>
                                    <div className='description'>
                                        <Card.Text>
                                            <h1>117</h1>
                                    </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='bg-transparent'>
                                <Card.Body className='card-content'>
                                    <div className='icon-area'>
                                        <FontAwesomeIcon icon={faBookOpenReader} size='3x' className='main-icon-free' />
                                        <Card.Title  className='card-title'><h4>COURSES COMPLETE</h4></Card.Title>
                                    </div>
                                    <div className='description'>
                                        <Card.Text>
                                            <h1>1500</h1>
                                    </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='bg-transparent'>
                                <Card.Body className='card-content'>
                                    <div className='icon-area'>
                                        <FontAwesomeIcon icon={faUsers} size='3x' className='main-icon-free' />
                                        <Card.Title  className='card-title'><h4>STUDENTS ENROLLED</h4></Card.Title>
                                    </div>
                                    <div className='description'>
                                        <Card.Text>
                                            <h1>22560</h1>
                                    </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    );
};

export default FreeCourse;