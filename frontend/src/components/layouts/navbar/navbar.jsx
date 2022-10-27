import {Navbar, Nav, Container} from 'react-bootstrap'
import style from './navbar.module.css'


function ColorSchemesExample() {
  return (
    <>
      <Navbar  style={{ backgroundColor:"#F1F3FF" }}>
        <Container>
          <Navbar.Brand href="#hero">
            <img src="./assets/images/img_logo.png" alt="Logo" />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#service" className={style["nav-link"]}>Our Service</Nav.Link>
            <Nav.Link href="#whyus" className={style["nav-link"]}>Why Us</Nav.Link>
            <Nav.Link href="#testimonial" className={style["nav-link"]}>Testimonial</Nav.Link>
            <Nav.Link href="#question" className={style["nav-link"]}>FAQ</Nav.Link>
            <button className={style["btn-register"]}>Register</button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;