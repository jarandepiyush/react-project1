import React from 'react'
import Mainnav from './Mainnav'
import Footer from './Footer'

export default function Contact() {
  return (
    <div>
      <Mainnav />

      <div className='bg1 text-center p-5'>
        <h1 className='text-light font1'>Contact <strong>Us</strong></h1>
      </div>

      <div className='bg2'>

        <form action="" className='pt-5 from1'>
          <div className='container'>
            <div className='form-row d-flex pt-5'>
              <div className="form-group col-md-6 col-lg-3 bg2">
                <label className='text-secondary pb-2' for="fname">First name</label><br />
                <input type="text" className="form-control border-0 p-1 bg2" id="fname" placeholder="" />
              </div>
              <div className="form-group col-md-6 col-lg-3">
                <label className='text-secondary pb-2' for="lname">Last name</label>
                <input type="text" className="form-control border-0 p-1 bg2" id="lname" placeholder="" />
              </div>
            </div>

            <div className='row'>
              <div className="form-group col-md-12 col-lg-6 pt-3">
                <label className='text-secondary pb-2' for="inputEmail4">Email address</label>
                <input type="email" className="form-control border-0" id="inputEmail4" placeholder="" />
              </div>
            </div>

            <div className='row pb-5'>
              <div className="form-group col-md-12 col-lg-6 pt-3">
                <label className='text-secondary pb-2' for="exampleFormControlTextarea1">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
            </div>

            <button type="button" className="btn1 border-0 rounded-pill text-light mb-5">SEND MESSAGE</button>

          </div>
        </form>


      </div>


      <Footer />

    </div>
  )
}
