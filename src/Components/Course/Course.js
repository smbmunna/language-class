import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import courseList from '../../data/CourseData';
import CoruseInfo from '../CourseInfo/CoruseInfo';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import './Course.css';

const Course = () => {
    const courses = courseList;
    return (
        <div className='course-container'>
            <Header></Header>
            <Container>
                <div className='course-title'><h1>Available Courses</h1></div>                
                <p className='subtitle'>Our language courses. Contact us for booking. </p>
                <Row>
                    {
                       courses.map(course => <CoruseInfo course={course}></CoruseInfo>)
                    }
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Course;