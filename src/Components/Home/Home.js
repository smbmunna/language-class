import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Carousel from '../Carousel/Carousel';
import FreeCourse from '../FreeCourse/FreeCourse';
import Testimonial from '../Testimonial/Testimonial';
import Subscribe from '../Subscribe/Subscribe';
import CourseSummary from '../CourseSummary/CourseSummary';
import Welcome from '../Welcome/Welcome';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Carousel></Carousel>

            {/*---------------------------------- Welcome Section -----------------------*/}
            <Welcome></Welcome>
            
            {/*---------------------------------- Course Summary -----------------------*/}           
            <CourseSummary></CourseSummary>
            
            {/*---------------------------------- Free courses -----------------------*/}
            <FreeCourse></FreeCourse>

            {/*---------------------------------- Testimonials -----------------------*/}
            <Testimonial></Testimonial>

            {/*---------------------------------- Subscription section -----------------------*/}
            <Subscribe></Subscribe>

            {/*---------------------------------- Footer section -----------------------*/}
            <Footer></Footer>
        </div>
    );
};

export default Home;