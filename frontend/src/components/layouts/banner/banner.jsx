import React from 'react'
import Container from 'react-bootstrap/Container';
import Style from './style.module.css';

const banner = () => {
  return (
    <Container className={Style["container-items"]}> 
    <center>
        <div className={Style["cta-tagline"]}>
          <h1>Sewa Mobil di Sidoarjo Sekarang</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            totam minima magnam ea qui nihil fugiat in numquam impedit quasi.
          </p>
          <button className={Style["btn-sewa"]}>Mulai Sewa Mobil</button>
        </div>
      </center>
    </Container>
    
  )
}

export default banner