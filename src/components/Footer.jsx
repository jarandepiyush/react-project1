import React from 'react'


export default function Footer() {
    return (
        <div>
            <section className="container-fluid foot1 bg1">
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-12 col-md-6 col-lg">
                            <ul>
                                <li>
                                    <h5 className="text-light pt-5">Home</h5>
                                </li>
                                <li><a className="foot1" href="">About us</a></li>
                                <li className="pt-3"><a className="foot1" href="">Practice Area</a></li>
                                <li className="pt-3"><a className="foot1" href="">Services</a></li>
                                <li className="pt-3"><a className="foot1" href="">Attorneys</a></li>
                                <li className="pt-3"><a className="foot1" href="">Terms</a></li>
                                <li className="pt-3"><a className="foot1" href="">Privacy</a></li>

                            </ul>
                        </div>

                        <div className="col-12 col-md-6 col-lg">
                            <ul>
                                <li>
                                    <h5 className="text-light pt-5">Practice Area</h5>
                                </li>
                                <li><a className="foot1" href="">Banking Law</a></li>
                                <li className="pt-3"><a className="foot1" href="">Commercial Law</a></li>
                                <li className="pt-3"><a className="foot1" href="">Corporate Law</a></li>
                                <li className="pt-3"><a className="foot1" href="">Family Law</a></li>
                                <li className="pt-3"><a className="foot1" href="">Media Law</a></li>

                            </ul>
                        </div>

                        <div className="col-12 col-md-6 col-lg">
                            <ul>
                                <li>
                                    <h5 className="text-light pt-5">Services</h5>
                                </li>
                                <li><a className="foot1" href="">Labor Law</a></li>
                                <li className="pt-3"><a className="foot1" href="">Employment</a></li>
                                <li className="pt-3"><a className="foot1" href="">Property Law</a></li>
                                <li className="pt-3"><a className="foot1" href="">Prosecution</a></li>
                            </ul>
                        </div>

                        <div className="col-12 col-md-6 col-lg">
                            <ul>
                                <li>
                                    <h5 className="text-light pt-5">Contact</h5>
                                </li>
                                <li><p className='text-secondary'>43 Raymouth Rd. Baltemoer, <br /> London 3910</p></li>
                                <li><a className="foot1" href="">+1(123)-456-7890</a></li>
                                <li className="pt-3"><a className="foot1" href="">+1(123)-456-7890</a></li>
                                <li className="pt-3"><a className="foot1" href="">info@mydomain.com</a></li>

                                <li>
                                    <h5 className="text-light pb-1 pt-5">Connect</h5>
                                    <i className="fa-brands fa-instagram text-light p-2 me-2 rounded btn1"></i>
                                    <i className="fa-brands fa-twitter text-light p-2 me-2 rounded btn1"></i>
                                    <i className="fa-brands fa-facebook-f text-light p-2 me-2 rounded btn1"></i>
                                    <i className="fa-brands fa-linkedin-in text-light p-2 me-2 rounded btn1"></i>
                                    <i className="fa-brands fa-pinterest text-light p-2 me-2 rounded btn1"></i>
                                    <i className="fa-brands fa-dribbble text-light p-2 me-2 rounded btn1"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className='text-center text-secondary mb-0 pb-5 pt-5'>Copyright ©2024 All rights reserved | This template is made with <i className="fa-solid fa-heart bg3"></i> by <a className='foot1' href="">Colorlib</a></p>
            </section>
        </div>
    )
}
