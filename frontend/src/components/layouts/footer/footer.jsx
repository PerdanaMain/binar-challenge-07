import React from 'react'
import "./style.module.css"
import {Container} from 'react-bootstrap'
const footer = () => {
  return (
    <footer>
      <Container>
        <div className="row">
          <div className="col-3">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div className="col-3">
            <p><a href="#service" style={{ textDecoration:"none", color:"black", }}>Our Service</a></p>
            <p><a href="#why" style={{ textDecoration:"none", color:"black", }}>Why Us</a></p>
            <p><a href="#testimonial" style={{ textDecoration:"none", color:"black", }}>Testimonial</a></p>
            <p><a href="#FAQ" style={{ textDecoration:"none", color:"black", }}>FAQ</a></p>
          </div>
          <div className="col-3">
            <p>Connect with us</p>
            <div className="row">
              <img src="assets/images/icon/icon_facebook.png" alt="" style={{ width:"50px" }}/>
              <img src="assets/images/icon/icon_instagram.png" alt="" style={{ width:"50px" }}/>
              <img src="assets/images/icon/icon_twitter.png" alt="" style={{ width:"50px" }}/>
              <img src="assets/images/icon/icon_mail.png" alt="" style={{ width:"50px" }}/>
              <img src="assets/images/icon/icon_twitch.png" alt="" style={{ width:"50px" }}/>
            </div>
          </div>
          <div className="col-3">
            <p>Copyright Binar 2022</p>
            <img src="assets/images/img_logo.png" alt="" />
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default footer