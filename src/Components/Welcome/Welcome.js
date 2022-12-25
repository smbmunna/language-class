import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBook, faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';
import './Welcome.css';



const Welcome = () => {
    return (
        <div className='main-container-1'>
            <Container>
                <div className='title-container'>
                    <h1 className='title-1'>Welcome to Language Class</h1>
                    <h6 className='subtitle-1'>A Wide Range of Language Courses to Fulfill Your Needs. </h6>
                </div>
                <div className='description-1'>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem</p>
                </div>

                {/* ---------------------Cards Section------------------------------ */}
                <Row className='card-container'>
                    <Col>
                        <Card className='bg-transparent'>
                            <Card.Body className='card-content'>
                                <div className='icon-area'>
                                    <FontAwesomeIcon icon={faGraduationCap} size='3x' className='main-icon-1' />
                                    <Card.Title><h3>Everything You Need</h3></Card.Title>
                                </div>
                                <div className='description'>
                                    <Card.Text>
                                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='bg-transparent'>
                            <Card.Body className='card-content'>
                                <div className='icon-area'>
                                    <FontAwesomeIcon icon={faBook} size='3x' className='main-icon-1' />
                                    <Card.Title><h3>30+ Courses Available</h3></Card.Title>
                                </div>
                                <div className='description'>
                                    <Card.Text>
                                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='bg-transparent'>
                            <Card.Body className='card-content'>
                                <div className='icon-area'>
                                    <FontAwesomeIcon icon={faPersonChalkboard} size='3x' className='main-icon-1' />
                                    <Card.Title><h3>Qualified Teachers</h3></Card.Title>
                                </div>
                                <div className='description'>
                                    <Card.Text>
                                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Welcome;