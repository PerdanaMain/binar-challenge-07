import React from 'react'
import {Container, Form, Col, InputGroup} from 'react-bootstrap'
import style from "./style.module.css";

const panel = () => {
  return (
    <Container>
      <div className="row">
        <Col lg={{ span: 10, offset:1 }}className={style.searchpanel}>
          <div className="row">
            <div className="col">
              <Form.Group >
                <label htmlFor="driver">Tipe Driver</label>
                <select className="form-select" name="driver" id="driver">
                  <option disabled selected hidden>Pilih Tipe Driver</option>
                  <option value="dengan-supir">Dengan Supir</option>
                  <option value="tanpa-supir">Tanpa Supir</option>
                </select>
              </Form.Group>
            </div>
            <div className="col">
              <Form.Group>
                <label htmlFor="date">Tanggal</label>
                <input type="date" name="date" id="date" className="form-control" />
              </Form.Group>
            </div>
            <div className="col">
              <Form.Group>
                <label htmlFor="time">
                  Waktu Jemput / Ambil
                </label>
                <select name="time" id="time" className="form-select">
                  <option disabled selected hidden>Time</option>
                  <option value="08">08.00    WIB</option>
                  <option value="09">09.00    WIB</option>
                  <option value="10">10.00    WIB</option>
                  <option value="11">11.00    WIB</option>
                  <option value="12">12.00    WIB</option>
                </select>
              </Form.Group>
            </div>
            <div className="col">
              <Form.Group>
                <label htmlFor="passenger">Jumlah Penumpang</label>
                <InputGroup> 
                  <input type="number" name="passenger" id="passenger" className="form-control" placeholder="Penumpang" />
                  <InputGroup.Text id="passenger"><i class="bi bi-people"></i></InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </div>
            <div className="col">
              <Form.Group className='mt-4'>
                  <button id="btn-search" className={style.searchpanelbutton}>Cari Mobil</button>
              </Form.Group>
            </div>
          </div>
        </Col>
      </div>
    </Container>
  )
}

export default panel