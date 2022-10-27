import React from 'react'
import Navbar from '../layouts/navbar/navbar'
import Hero from '../layouts/hero/hero';
import Service from '../layouts/service/service'
import Whyus from '../layouts/whyus/whyus';
import Testimonial from '../layouts/testimonial/testimonial';
import Banner from '../layouts/banner/banner';
import Question from '../layouts/question/question'
import Footer from '../layouts/footer/footer'

const landing = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Service/>
      <Whyus/> 
      <Testimonial/>
      <Banner/>
      <Question/>
      <Footer/>
    </div>
  )
}

export default landing