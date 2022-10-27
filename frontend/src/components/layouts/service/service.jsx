import React from 'react'
import style from './style.module.css';

const service = () => {
  return (
    <section id='service'>
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <img src="assets/images/img_service.png"  className={style["img-model img-fluid"]} alt="service" />
          </div>
          <div className="col service-tagline">
            <h1 className='service-tagline-h1'>Best Car Rental for any kind of trip in Sidoarjo!</h1>
            <p className='service-tagline-p'>Sewa mobil di Sidoarjo bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
            <ul className={style['service-tagline-ul']}>
              <li className={style["service-tagline-ul-li"]}>
                <img src="assets/images/img-li.png" alt="" />
                <span className={style["service-tagline-ul-li-span"]}>Sewa Mobil Dengan Supir di Bali 12 Jam</span>
              </li>
            </ul>
            <ul className={style['service-tagline-ul']}>
              <li className={style["service-tagline-ul-li"]}>
                <img src="assets/images/img-li.png" alt="" />
                <span className={style["service-tagline-ul-li-span"]}>Sewa Mobil Lepas Kunci di Bali 24 Jam</span>
              </li>
            </ul>
            <ul className={style['service-tagline-ul']}>
              <li className={style["service-tagline-ul-li"]}>
                <img src="assets/images/img-li.png" alt="" />
                <span className={style["service-tagline-ul-li-span"]}>Sewa Mobil Jangka Panjang Bulanan</span>
              </li>
            </ul>
            <ul className={style['service-tagline-ul']}>
              <li className={style["service-tagline-ul-li"]}>
                <img src="assets/images/img-li.png" alt="" />
                <span className={style["service-tagline-ul-li-span"]}>Gratis Antar - Jemput Mobil di Bandara</span>
              </li>
            </ul>
            <ul className={style['service-tagline-ul']}>
              <li className={style["service-tagline-ul-li"]}>
                <img src="assets/images/img-li.png" alt="" />
                <span className={style["service-tagline-ul-li-span"]}>Layanan Airport Transfer / Drop In Out</span>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default service