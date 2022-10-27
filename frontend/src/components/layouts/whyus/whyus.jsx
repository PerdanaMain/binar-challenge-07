import React from 'react'


const testimoni = () => {
  return (
    <section id='whyus'>
      <div className="container my-5 text-center">
        <h1>Why Us?</h1>
        <p>Mengapa Harus Pilih Binar Car Rental?</p>
        <div className="row mt-5">
          <div className="col-3">
            <div className="card">
              <div className="card-body">
                <img src="assets/images/icon_complete.png" alt="complete" className='pb-4'/>
                <h5 className='card-title'>Mobil Lengkap</h5>
                <p className='card-text'>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <div className="card-body">
                <img src="assets/images/icon_price.png" alt="complete" className='pb-4'/>
                <h5 className='card-title'>Harga Murah</h5>
                <p className='card-text'>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <div className="card-body">
                <img src="assets/images/icon_24hrs.png" alt="complete" className='pb-4'/>
                <h5 className='card-title'>Layanan 24 Jam</h5>
                <p className='card-text'>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <div className="card-body">
                <img src="assets/images/icon_professional.png" alt="complete" className='pb-4'/>
                <h5 className='card-title'>Sopir Profesional</h5>
                <p className='card-text'>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default testimoni