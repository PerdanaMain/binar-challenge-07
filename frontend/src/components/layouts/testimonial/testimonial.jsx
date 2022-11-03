import React from 'react'
import './style.module.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const testimonial = () => {
  return (
    <section id='testimonial' className='py-5'>
      <div className="text-center">
        <h2>Testimonial</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod</p>
      </div>
      <OwlCarousel className='owl-theme' loop margin={1} nav>
        <div className='item ms-3' style={{ border: "1px solid", padding:"80px" }}>
            <h4>1</h4>
        </div>
        <div className='item ms-3' style={{ border: "1px solid", padding:"80px" }}>
            <h4>1</h4>
        </div>
        <div className='item ms-3' style={{ border: "1px solid", padding:"80px" }}>
            <h4>1</h4>
        </div>
        
    </OwlCarousel>;
    </section>
  )
}

export default testimonial