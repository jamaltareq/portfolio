import React from 'react'
import video from "../../Assets/Video/1.mp4"
import image from "../../Assets/images/240_F_388530368_uAYCATQvclHPwtsg9fn6Af1wk70MN2r7.jpg"
export default function Home() {
    return (
        <>
            <div className="mt-5 position-relative " >
                <div className="overflow-hidden hight-30">
                    <video width="100%" className='' autoPlay="autoplay" loop="loop" muted="muted" playsInline="playsinline" data-responsive-video="">
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
                <div className="position-absolute w-100 top-50 start-50 translate-middle text-center">
                    <p>Hi, my name is</p>
                    <h1 className="fw-bold display-1">Gamal Tarek</h1>
                    <span>Freelance Web Developer </span>
                </div>
            </div>
            <div className="editedd py-5  m-auto  gap-5 ">
                <div className="row">
                    <div className="col-lg-6">
                        <h2 className='fw-bold display-6'>Front-End Software Developer</h2>
                        <span className='line d-block my-2'></span>
                        <p className="fs-6">Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences.</p>
                    </div>
                    <div className="col-lg-6 ">
                        <img src={image} alt="" className="w-100" />
                    </div>
                </div>
            </div>
        </>
    )
}
