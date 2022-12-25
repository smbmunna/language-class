import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import './Footer.css';

import './Footer.css';
const Footer = () => {
    return (
        <div className='footer-container'>
            <div>
                <Container className='footer-links'>
                    <h3>Important Links</h3>
                    <Row>
                        <Col>
                            <a href="#">Admission Online Education</a><br />
                            <a href="#">Apply Online</a><br />
                            <a href="#">Online Assessment</a><br />
                            <a href="#">Study Abroad</a>
                        </Col>
                        <Col>
                            <a href="#">Publication </a><br />
                            <a href="#">Privacy Policy</a><br />
                            <a href="#">Rules and Regulations</a><br />
                            <a href="#">Job Opportunities </a>
                        </Col>
                        <Col>
                            <a href="#">Contact Us </a><br />
                            <a href="#">Feedback </a><br />
                            <a href="#">Sitemap </a><br />
                            <a href="#">Blog </a>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='all-right-containter'>
                <p>Copyright <FontAwesomeIcon icon={faCopyright} /> 2022-2023. All Rights Reserved by <a href='github.com/smbmunna'>Mahmud Munna</a></p>
            </div>
            <div className='icon-container'>
                <a href="#" className="icon" ><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="#" className="icon" ><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#" className="icon" ><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#" className="icon" ><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a href="#" className="icon" ><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
        </div>
    );
};

export default Footer;