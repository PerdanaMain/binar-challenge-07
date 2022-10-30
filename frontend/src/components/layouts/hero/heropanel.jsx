import React from 'react'
import Style from './style.module.css'
const heropanel = () => {
  return (
    <section id='hero' className={Style["hero-section"]}>
    <div className='container-fluid'>
      <div className="row">
        <div className='col'>
          <div className={Style["hero-container"]}>
            <h1 className='fsw-bold'>
            Sewa & Rental Mobil Terbaik di kawasan Sidoarjo
            </h1>
            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
          </div>
        </div>
        <div className="col">
          <div className="row"><br /></div>
          <div className="row">
            <img src="assets/images/frame 117.png" alt="frame" />
          </div>
        </div>
      </div>
    </div>
   </section>
  )
}

export default heropanel