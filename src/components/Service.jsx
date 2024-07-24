import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Mainnav from './Mainnav'
import Footer from './Footer'
import Commonimg from './Commonimg'

export default function Service() {
  return (
    <div>
      <Mainnav /> 
      <div className='bg1 text-center p-5'>
        <h1 className='text-light font1'>Our <strong>Services</strong></h1>
      </div>

<Commonimg />
      <Footer />
    </div>
  )
}
