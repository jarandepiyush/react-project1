import React from 'react'
import Mainnav from './Mainnav'
import Footer from './Footer'
import Commonimg from './Commonimg'
// import Experience from './Experience'

export default function About() {
  return (
    <div>
      <Mainnav />
      <div className='bg1 text-center p-5'>
        <h1 className='text-light font1'>About <strong>Company</strong></h1>
      </div>

      <section className="bg2">
        <div className="container">
          <div className="row container">
            <div className="col-12 col-lg-6 pt-5 mt-5">
              <h2 className="text-light font1">Why <strong className="font2">Choose Us?</strong></h2>
              <p className="text-secondary">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

              <li className="text-secondary"><i className="fa-solid fa-check font2 pe-2"></i> Far from the countries Vokalia</li>
              <li className="text-secondary"><i className="fa-solid fa-check font2 pe-2"></i> Far far away, behind the word</li>
              <li className="text-secondary"><i className="fa-solid fa-check font2 pe-2"></i> Separated they live in Bookmarksgrove</li>

            </div>

            <div className="col-12 col-lg-6 mt-5 pt-5 border-0">
              <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed text-light border-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={{ backgroundColor: '#37373F' }}>
                      HOW TO DOWNLODE AND REGISTER?
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body bg2 text-secondary">
                      <p className="bg2">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed text-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={{ backgroundColor: '#37373F' }}>
                      HOW TO CREATE YOUR PAYPAL ACCOUNT?
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body bg2 text-secondary">
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed text-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={{ backgroundColor: '#37373F' }}>
                      HOW TO LINK YOUR PAYPAL AND BANK ACCOUNT?
                    </button>
                  </h2>
                  <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body bg2 text-secondary">
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Far far away, behind the word mountains, far from.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>


        </div>
      </section>

    {/* <Experience /> */}

      <Commonimg />
      <Footer />
    </div>
  )
}



