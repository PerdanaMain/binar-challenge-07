import React from 'react'
import './style.module.css';
import {Row} from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const testimonial = () => {
  return (
    <section id='testimonial' className='py-5'>
      <div className="text-center mb-5">
        <h2>Testimonial</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod</p>
      </div>
      <OwlCarousel className='owl-theme' loop margin={3} nav>
        <div className='item ms-3'  >
          <Row className="card-testimonial">
            <div className="col-3 align-self-center">
              <img className="author-img " src="assets/images/carousel/img_photo1.png" alt=""/>
            </div>
            <div className="col-9 review">
              <img className="rate-img" src="./images/rating.png" alt=""/>
              <p className="text-review">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                lorem ipsum
                dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod”
              </p>
              <p className="author">John Dee 32, Bromo</p>
            </div>
          </Row>
        </div>
        <div className='item ms-3'  >
          <Row className="card-testimonial">
            <div className="col-3 align-self-center">
              <img className="author-img " src="assets/images/carousel/img_photo2.png" alt=""/>
            </div>
            <div className="col-9 review">
              <img className="rate-img" src="./images/rating.png" alt=""/>
              <p className="text-review">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                lorem ipsum
                dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod”
              </p>
              <p className="author">John Dee 32, Bromo</p>
            </div>
          </Row>
        </div>
    </OwlCarousel>;
    </section>
  )
}

export default testimonial