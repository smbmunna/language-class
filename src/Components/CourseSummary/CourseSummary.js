import React from 'react';
import courseList from '../../data/CourseData';
import { Container } from 'react-bootstrap';
import CoruseInfo from '../CourseInfo/CoruseInfo';
import Row from 'react-bootstrap/Row';
import './CourseSummary.css';

const CourseSummary = () => {
    const courses = courseList;         //Loading Course Data
    const first3Courses= courses.slice(0,3);    // Taking 3 courses from total course array
    
    return (
        <div>
            <Container>
                <h1 className='summary-title'>Available Courses</h1>
                <Row>
                    {
                       first3Courses.map(course => <CoruseInfo course={course}></CoruseInfo>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default CourseSummary;