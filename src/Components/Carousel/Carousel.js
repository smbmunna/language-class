import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://themazine.com/html/edu/images/home/slide-2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className='carousel-title'><h1>Learn Language in The Most Convenient Way</h1></div>
          <p >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src="http://themazine.com/html/edu/images/home/slide-1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <div className='carousel-title'><h1 >Live Online Lectures and Free Learning Materials</h1></div>
          <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>



      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://themazine.com/html/edu/images/home/slide-5.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <div className='carousel-title'><h1 >Hundres of Students and Free Online Problem Solving Sessions</h1></div>
          <p >Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;