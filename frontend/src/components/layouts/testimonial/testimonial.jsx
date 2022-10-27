import React from 'react'
import './style.module.css';

const testimonial = () => {
  return (
    <section id='testimonial' className='py-5'>
      <div className="text-center">
        <h2>Testimonial</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod</p>
      </div>
      <div className="carousel-container swiper">
        <div className="carouse-content">
          <div className="card-wrapper swiper-wrapper">
            <div className="carousel-card swiper-slide py-4">
              <div className="row">
                <div className="col-4">
                  <img src="assets/images/img_photo1.png" alt="" />
                </div>
                <div className="col-8 carousel-tagline">
                  <img src="assets/images/carouse/rating.png" alt="" className="img-rating py-3" />
                  <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”</p>
                  <h5>John Dee 32, Bromo</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default testimonial