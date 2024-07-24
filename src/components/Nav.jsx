import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './Footer'
import Commonimg from './Commonimg'



export default function Nav() {

    return (
        <div>
        <nav className="main1">
        <section className="container d-flex justify-content-between">
            <div className='pt-4'>
                <a href="" className='text-decoration-none text-dark font-weight-bold fs-3'>Justice.</a>
            </div>

            <button type="button" className="ms-auto btn d-lg-none text-dark" data-bs-toggle="offcanvas"
                data-bs-target="#myOffCanvas">
                <i className="fa-solid fa-bars fs-3 mt-3 text-dark"></i>
            </button>

            <div id="myOffCanvas" className="offcanvas offcanvas-end w-100 h-50">
                {/* offcanvas-header */}
                <div className="offcanvas-header">
                    <button className="btn-close" data-bs-dismiss="offcanvas"></button>
                </div>
                {/* offcanvas body */}
                <div className="offcanvas-body">
                    <ul className="nav flex-column">
                        <li className="nav-item text"> <Link className="nav-link text-reset" to="/">Home</Link></li>
                        <li className="dropdown">
                            <button className="btn dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false" to="/Practice"> Practice Area
                             </button>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="#">Genric</Link></li>
                                <li><Link className="dropdown-item" to="#">Elements</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item text"><Link className="nav-link text-reset" to="/Service">Service</Link> </li>
                        <li className="nav-item text"> <Link className="nav-link text-reset" to="/Attorneys">Attorneys</Link></li>
                        <li className="nav-item text"><Link className="nav-link text-reset" to="/About">About</Link> </li>
                        <li className="nav-item text"> <Link className="nav-link text-reset" to="/Contact">Contact</Link></li>
                      
                    </ul>
                </div>
            </div>

            <div>
                <ul className="container nav d-none d-lg-flex mt-4 font-weight-bold justify-content-between">
                    <li className="nav-item"><Link className="nav-link btn text-dark" to="/Home">Home</Link> </li>
                    <li className="dropdown">
                        <button className="btn text-dark dropdown-toggle" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false" to="/Practice">
                            Practice Area
                        </button>
                        <ul className="dropdown-menu bg-dark">
                            <li><Link className="dropdown-item text-light" to="#">Genric</Link></li>
                            <li><Link className="dropdown-item text-light" to="#">Elements</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item"><Link className="nav-link btn text-dark" to="/Service">Service</Link> </li>
                    <li className="nav-item"><Link className="nav-link btn text-dark" to="/Attorneys">Attorneys</Link> </li>
                    <li className="nav-item"><Link className="nav-link btn text-dark" to="/About">About</Link> </li>
                    <li className="nav-item"><Link className="nav-link btn text-dark" to="/Contact">Contact</Link> </li>
                </ul>
            </div>  
        </section>
   {/* text center  */}
       {/* <section className="container text-light section1-child1">
            <h4 className="pt-5 mt-5 fs-4 text-uppercase"> Discover the Colorful World </h4>
            <h1 className="display-5 mt-3 mb-4 text-uppercase section1-child2">New Adventure</h1>
            <p className="section1-child3"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo.
                Praesent mattis commodo augue. Morbi fringilla congue
                libero, ac malesuada vulputate pharetra. </p>

            <button type="button"
                className="btn btn-light btn-lg mt-5 pt-2 ps-5 pe-5 pb-2 rounded-pill font-weight-bold text-uppercase">
                Discover Now </button>
        </section>  */}

        <section>
            <div className="row">
                <div className='col-lg-6 col-md-6'>

                </div>

                <div className='col-lg-6 col-md-6'>
<h2 className='section1-child1 fw-bolder'><span>We Fight </span>For <br/>Your Right</h2>
<p>Another cool free template by the fine folks at Colorlib.</p>
                </div>

            </div>
        </section>
    </nav>



<Commonimg />
<Footer />
    </div>

    )
}





