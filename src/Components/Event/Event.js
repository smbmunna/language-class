import React from 'react';
import eventList from '../../data/EventData';
import EventInfo from '../EventInfo/EventInfo';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import './Event.css';

const Event = () => {
    const events= eventList;  //Loading events form fake data
    return (
        <div>
            <Header></Header>
            
            <h1 className='section-title'>Our Nearby Events</h1>
            <p className='event-subtitle'>Our upcoming events migth interest you.</p>
                <Container>
                <Row>
                    
                    {
                    events.map(event=><EventInfo event={event}></EventInfo>) 
                    }
                </Row>
                </Container>
            
            <Footer></Footer>
        </div>
    );
};

export default Event;