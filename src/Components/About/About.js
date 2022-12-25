import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Header/Header';
import './About.css';
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <h1 className='about-title'>About Us</h1>
                <Row>
                    <Col>
                        <p><span>Language Class</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat alias officiis esse eum dignissimos. Maxime natus rem aperiam, optio at odit debitis, autem perferendis nihil iste magni sunt laborum ea, ipsum consequatur illum et. Tempora sequi sit harum, tenetur saepe repudiandae. Quas voluptates sunt rem dolores, facilis incidunt voluptatibus iusto corrupti, alias ratione perspiciatis ab vel odit assumenda ipsa blanditiis nostrum excepturi ipsam et nihil dolorum. Aliquid quibusdam quis amet eveniet. Placeat nobis vel voluptates quam. Totam ex et neque dignissimos quasi quibusdam beatae sint alias dolorum aperiam porro fugiat non possimus doloremque esse perspiciatis nisi voluptate aut, provident unde odio. Dicta facere libero officia officiis unde quia quam reiciendis sunt, vitae eum velit ullam eos praesentium quod doloremque illo distinctio quasi commodi inventore sit, porro aliquam voluptatem tempora maiores. Cum esse quia incidunt dolorum commodi dicta, dolores repudiandae, debitis laudantium fugit ducimus voluptatum ea. Nisi cumque delectus aliquid. Perferendis quasi odit assumenda dolor ratione deleniti illo veniam molestiae, aliquam fugiat sed quibusdam modi vero delectus omnis tempore accusantium voluptate commodi? Doloribus aperiam ullam perferendis laudantium magnam unde aspernatur totam est explicabo omnis delectus voluptas assumenda reprehenderit nobis quibusdam velit exercitationem et, facilis, perspiciatis quis harum. Quasi id sed facilis?</p>
                    </Col>
                    <Col>
                        <p><span>Our Journey </span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum id quas ullam dolor natus. Iusto assumenda error obcaecati molestiae dolorum magni consequatur aliquid corrupti nisi libero veritatis sequi non voluptatum dolore ut praesentium similique accusamus fuga ullam delectus, ratione quas amet deserunt. Praesentium dolorum quo accusamus voluptatibus expedita laboriosam aspernatur, et eveniet dolorem repudiandae architecto. Totam tempore nobis, rem eaque architecto repudiandae maxime ea magni saepe alias ad delectus esse reiciendis animi nostrum aspernatur debitis quia exercitationem error cumque. At ab eius aperiam maiores nisi iste quas eum quos eveniet? Deleniti, quosaccusantium voluptas? Molestiae itaque nisi ducimus deleniti vel asperiores.</p>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default About;