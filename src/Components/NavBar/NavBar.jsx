import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import image from './../../Assets/images/code.png'
export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-black text-white py-5 justify-content-between fixed-top">
            <div className="container-fluid px-5">
                <span className='fs-2 '> gamal tarek</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-white"></span>
                </button>
                <div className="fitcontent  navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link " aria-current="page" to="portfolio">HOME</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link  " to="about">ABOUT</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link  " to="project">projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link  " to="skills">skills</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link  " to="contactus">contactus</NavLink>
                        </li>
                    </ul>
                </div>
                <div className=" navbar-collapse justify-content-end " id="navbarNav">
                    <ul className="d-flex flex-row navbar-nav gap-3 ">
                        <li className="nav-item">
                            <a href="https://www.facebook.com/profile.php?id=100009448186323" className="text-white"> <i className="fa-brands fa-facebook"></i> </a>
                        </li>
                        <li className="nav-item">
                            <a href="https://github.com/jamaltareq" className="text-white"> <i className="fa-brands fa-github"></i> </a>
                        </li>
                        <li className="nav-item">
                            <a href='Http://www.linkedin.com/in/gamal-tarek-832a712a2' target='_blank' className="text-white"> <i className="fa-brands fa-linkedin"></i> </a>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    )
}
