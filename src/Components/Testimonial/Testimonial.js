import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Testimonial.css';
const Testimonial = () => {
    return (
        <div className='testimonial-container'>
            <Container>
                <h1 className='section-title'>TESTIMONIALS</h1>
                <div className='card-container'>
                    <Card style={{ width: '24rem' }} className='card bg-transparent'>
                        <Card.Img className='profile-img' variant="top" src="https://i.ibb.co/PcfzkMw/testimonial-1.png" />
                        <Card.Body>
                            <Card.Text className='feedback'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eaque dolor odit ad eligendi aspernatur illum aperiam alias eveniet labore!</p>
                            </Card.Text>
                            <Card.Title className='card-title'>Laila Kabir</Card.Title>
                            <Card.Subtitle className='card-subtitle'>Student, United Kingdom</Card.Subtitle>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '24rem' }}  className='card bg-transparent'>
                        <Card.Img className='profile-img' variant="top" src="https://i.ibb.co/NpjS5cK/testimonial-2.png" />
                        <Card.Body>
                            <Card.Text className='feedback'>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi deleniti esse aspernatur animi consequatur iste eligendi nesciunt at necessitatibus architecto optio ex  commodi illo odio, quas quod? Amet!</p>
                        </Card.Text>
                            <Card.Title className='card-title'>Mahbub Alam</Card.Title>
                            <Card.Subtitle className='card-subtitle'>Businessman, Canada</Card.Subtitle>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '24rem' }} className='card bg-transparent'>
                        <Card.Img className='profile-img' variant="top" src="https://i.ibb.co/kKLrHHK/testimonial-3.png" />
                        <Card.Body>
                            <Card.Text className='feedback'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ut saepe, quo ducimus architecto nobis!</p>
                        </Card.Text>
                            <Card.Title className='card-title'>Raihan Kabir</Card.Title>
                            <Card.Subtitle className='card-subtitle'>Freelancer, Dhaka</Card.Subtitle>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '24rem' }}  className='card bg-transparent'>
                        <Card.Img className='profile-img' variant="top" src="https://i.ibb.co/FsJdQvQ/testimonial-4.png" />
                        <Card.Body>
                            <Card.Text className='feedback'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, beatae, voluptatem recusandae quasi sed veritatis nam soluta, quam vel exercitationem odit voluptates! Non, repudiandae maxime?</p>
                        </Card.Text>
                            <Card.Title className='card-title'>Mashrur Rahman</Card.Title>
                            <Card.Subtitle className='card-subtitle'>Student, USA</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div>

    );
};

export default Testimonial;