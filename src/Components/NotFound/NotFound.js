import React from 'react';
import { Container } from 'react-bootstrap';
import './NotFound.css';

const NotFound = () => {
    return (
        <Container>
            <h1 className='not-found'>Error: 404</h1>
            <h2 className='not-found'>Page Not Found</h2>
        </Container>
    );
};

export default NotFound;