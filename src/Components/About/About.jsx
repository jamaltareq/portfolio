import React from 'react'
import video from '../../Assets/Video/2.mp4'
export default function About() {
    return (
        <>
            <div className="mt-5 position-relative" >
                <div className="overflow-hidden hight-30">
                    <video width="100%" autoPlay="autoplay" loop="loop" muted="muted" playsInline="playsinline" data-responsive-video="">
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
                <div className="position-absolute top-50 start-50 translate-middle text-center">
                    <h1 className="fw-bolder display-1">About</h1>
                </div>
            </div>
            <div className="container my-5">
                <h3>Junior Web Developer specializing in front end development. Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages including HTML5, CSS, Bootstrap, JavaScript OOP, jQuery, React.</h3>
            </div>
            <div className="container mt-5">
                <h2><i className="fa-solid fa-award text-warning"></i> Education</h2>
                <div className="mt-5">
                    <div className="d-flex position-relative">
                        <span className="cricle line-hi"></span>
                        <div className="">
                            <h4>Obour Institutes</h4>
                            <p>Bachelor's degree, Management Information </p>
                            <p>Systems 2019 - 2023</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <span className="cricle"></span>
                        <div className="">
                            <h4> Route</h4>
                            <p>August 2023 - Present (8 months)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
