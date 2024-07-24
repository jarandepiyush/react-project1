import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Nav() {

    return (
        <nav  className='bg1 pt-3 pb-5'>
        <section className="container d-flex justify-content-between">
            <div className='pt-1'>
                <a href="" className='text-decoration-none text-light font-weight-bold fs-3'>Justice.</a>
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
                <ul className="container nav d-none d-lg-flex  font-weight-bold justify-content-between">
                    <li className="nav-item"><Link className="nav-link btn text-secondary" to="/">Home</Link> </li>
                    <li className="dropdown">
                        <button className="btn text-secondary dropdown-toggle" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false" to="/Practice">
                            Practice Area
                        </button>
                        <ul className="dropdown-menu bg-dark">
                            <li><Link className="dropdown-item text-light" to="#">Genric</Link></li>
                            <li><Link className="dropdown-item text-light" to="#">Elements</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item"><Link className="nav-link btn text-secondary" to="/Service">Service</Link> </li>
                    <li className="nav-item"><Link className="nav-link btn text-secondary" to="/Attorneys">Attorneys</Link> </li>
                    <li className="nav-item"><Link className="nav-link btn text-secondary" to="/About">About</Link> </li>
                    <li className="nav-item"><Link className="nav-link btn text-secondary" to="/Contact">Contact</Link> </li>
                </ul>
            </div>  
        </section>
      
    </nav>

    )
}





