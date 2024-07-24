import React from 'react'
import Mainnav from './Mainnav'
import Footer from './Footer'
import Commonimg from './Commonimg'

export default function Attorneys() {
  return (
    <div>
      <Mainnav />
      <div className='bg1 text-center p-5'>
        <h1 className='text-light font1'>Our Expert <strong>Attorneys</strong></h1>
      </div>

      <Commonimg />
      <Footer />
    </div>
  )
}
