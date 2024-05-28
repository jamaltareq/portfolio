import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import image from "../../Assets/images/240_F_388530368_uAYCATQvclHPwtsg9fn6Af1wk70MN2r7.jpg"
import project1 from "../../Assets/images/1.jpeg"
import project2 from "../../Assets/images/2.png"
import project3 from "../../Assets/images/3.png"
import project4 from "../../Assets/images/4.png"
import project5 from "../../Assets/images/5.png"
import project6 from "../../Assets/images/6.png"
import project7 from "../../Assets/images/7.png"
import project8 from "../../Assets/images/8.png"
import project9 from "../../Assets/images/9.png"
import project10 from "../../Assets/images/10.png"
import project11 from "../../Assets/images/11.png"
import project12 from "../../Assets/images/12.png"
import project13 from "../../Assets/images/13.png"
import project14 from "../../Assets/images/14.png"
import dots from "../../Assets/images/side-dots.png"
import { Pagination, Navigation } from 'swiper/modules';
export default function Projects() {
    const [swiperRef, setSwiperRef] = useState(null);

    return (
        <>
            <div className="my-5 position-relative" >
                <span className='border-project position-absolute top-0 end-0'></span>
                <span className='border-2 position-absolute end-0 top-0'></span>
                <span className='border-project position-absolute bottom-0 start-0'></span>
                <span className='border-2 position-absolute start-0 bottom-0'></span>
                <div className="overflow-hidden hight-30 routet">

                </div>
                <div className="position-absolute top-50 start-50 translate-middle text-center">
                    <h1 className="fw-bolder display-1">Projects</h1>
                </div>
            </div>
            <Swiper
                slidesPerView={4}
                centeredSlides={false}
                spaceBetween={60}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="bg-white width-slid">
                        <img src={project1} alt="" className='w-100' />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white width-slid">
                        <img src={project2} alt="" className='w-100' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white width-slid">
                        <img src={project3} alt="" className='w-100' />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white width-slid">
                        <img src={project4} alt="" className='w-100' />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white width-slid">
                        <img src={project5} alt="" className='w-100' />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white width-slid">
                        <img src={project6} alt="" className='w-100' />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white width-slid">
                        <img src={project7} alt="" className='w-100' />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white width-slid">
                        <img src={project8} alt="" className='w-100' />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white width-slid">
                        <img src={project9} alt="" className='w-100' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white width-slid">
                        <img src={project10} alt="" className='w-100' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white width-slid">
                        <img src={project11} alt="" className='w-100' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white width-slid">
                        <img src={project12} alt="" className='w-100' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white width-slid">
                        <img src={project13} alt="" className='w-100' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white width-slid">
                        <img src={project14} alt="" className='w-100' />
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="container mt-5">
                <h2 className='text-center m-5'>My work</h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        <a href="https://jamaltareq.github.io/Fokir/" target="_blank">
                            <div className="item">
                                <img src={project1} alt="" className='w-100' />
                                <h1>Fokir</h1>
                                <span className='btn bg-white text-black m-1'>Html</span>
                                <span className='btn bg-white text-black m-1'>css</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="https://jamaltareq.github.io/Bakery/" target="_blank">
                            <div className="item">
                                <img src={project2} alt="" className='w-100' />
                                <h1>bakery</h1>
                                <span className='btn bg-white text-black m-1'>Html</span>
                                <span className='btn bg-white text-black m-1'>css</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="https://jamaltareq.github.io/mealify/" target="_blank">
                            <div className="item">
                                <img src={project3} alt="" className='w-100' />
                                <h1>mealify</h1>
                                <span className='btn bg-white text-black m-1'>Html</span>
                                <span className='btn bg-white text-black m-1'>css</span>
                                <span className='btn bg-white text-black m-1'>responsive</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="https://jamaltareq.github.io/templetOne/" target="_blank">
                            <div className="item">
                                <img src={project4} alt="" className='w-100' />
                                <h1>elzero project</h1>
                                <span className='btn bg-white text-black m-1'>Html</span>
                                <span className='btn bg-white text-black m-1'>css</span>
                                <span className='btn bg-white text-black m-1'>responsive</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="https://jamaltareq.github.io/templetTwo/" target="_blank">
                            <div className="item">
                                <img src={project5} alt="" className='w-100' />
                                <h1>elzero project</h1>
                                <span className='btn bg-white text-black m-1'>Html</span>
                                <span className='btn bg-white text-black m-1'>css</span>
                                <span className='btn bg-white text-black m-1'>responsive</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="https://jamaltareq.github.io/DevFolio/" target="_blank">
                            <div className="item">
                                <img src={project6} alt="" className='w-100' />
                                <h1>devfolio</h1>
                                <span className='btn bg-white text-black m-1'>Html</span>
                                <span className='btn bg-white text-black m-1'>css</span>
                                <span className='btn bg-white text-black m-1'>responsive</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="https://jamaltareq.github.io/Daniels1/" target="_blank">
                            <div className="item">
                                <img src={project7} alt="" className='w-100' />
                                <h1>daniels</h1>
                                <span className='btn bg-white text-black m-1'>Html</span>
                                <span className='btn bg-white text-black m-1'>css</span>
                                <span className='btn bg-white text-black m-1'>responsive</span>
                                <span className='btn bg-white text-black m-1'>bootstrap</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href=" https://jamaltareq.github.io/Assignment-10/" target="_blank">
                            <div className="item">
                                <img src={project8} alt="" className='w-100' />
                                <h1>bookmark</h1>
                                <span className='btn bg-white text-black m-1'>Html</span>
                                <span className='btn bg-white text-black m-1'>css</span>
                                <span className='btn bg-white text-black m-1'>responsive</span>
                                <span className='btn bg-white text-black m-1'>bootstrap</span>
                                <span className='btn bg-white text-black m-1'>js</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href=" https://jamaltareq.github.io/todolist/" target="_blank">
                            <div className="item">
                                <img src={project9} alt="" className='w-100' />
                                <h1>login</h1>
                                <span className='btn bg-white text-black m-1'>Html</span>
                                <span className='btn bg-white text-black m-1'>css</span>
                                <span className='btn bg-white text-black m-1'>responsive</span>
                                <span className='btn bg-white text-black m-1'>bootstrap</span>
                                <span className='btn bg-white text-black m-1'>js</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href=" https://jamaltareq.github.io/weather/" target="_blank">
                            <div className="item">
                                <img src={project10} alt="" className='w-100' />
                                <h1>weather</h1>
                                <span className='btn bg-white text-black m-1'>Html</span>
                                <span className='btn bg-white text-black m-1'>css</span>
                                <span className='btn bg-white text-black m-1'>responsive</span>
                                <span className='btn bg-white text-black m-1'>bootstrap</span>
                                <span className='btn bg-white text-black m-1'>js</span>
                                <span className='btn bg-white text-black m-1'>api</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="https://jamaltareq.github.io/GAMER_EVIEW/dist/index.html" target="_blank">
                            <div className="item">
                                <img src={project11} alt="" className='w-100' />
                                <h1>games</h1>
                                <span className='btn bg-white text-black m-1'>Html</span>
                                <span className='btn bg-white text-black m-1'>css</span>
                                <span className='btn bg-white text-black m-1'>responsive</span>
                                <span className='btn bg-white text-black m-1'>tailwind</span>
                                <span className='btn bg-white text-black m-1'>js</span>
                                <span className='btn bg-white text-black m-1'>api</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="https://jamaltareq.github.io/yummy/" target="_blank">
                            <div className="item">
                                <img src={project12} alt="" className='w-100' />
                                <h1>yammy</h1>
                                <span className='btn bg-white text-black m-1'>Html</span>
                                <span className='btn bg-white text-black m-1'>css</span>
                                <span className='btn bg-white text-black m-1'>responsive</span>
                                <span className='btn bg-white text-black m-1'>tailwind</span>
                                <span className='btn bg-white text-black m-1'>js</span>
                                <span className='btn bg-white text-black m-1'>api</span>
                            </div>
                        </a>
                    </div>

                    <div className="col-md-4">
                        <a href="#" target='_blank'>
                            <div className="item">
                                <img src={project13} alt="" className='w-100' />
                                <h1>fremwork</h1>
                                <span className='btn bg-white text-black m-1'>Html</span>
                                <span className='btn bg-white text-black m-1'>css</span>
                                <span className='btn bg-white text-black m-1'>responsive</span>
                                <span className='btn bg-white text-black m-1'>bootstrap</span>
                                <span className='btn bg-white text-black m-1'>js</span>
                                <span className='btn bg-white text-black m-1'>react</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="https://jamaltareq.github.io/ecommerce/" target='_blank'>
                            <div className="item">
                                <img src={project14} alt="" className='w-100' />
                                <h1>fremwork</h1>
                                <span className='btn bg-white text-black m-1'>Html</span>
                                <span className='btn bg-white text-black m-1'>css</span>
                                <span className='btn bg-white text-black m-1'>responsive</span>
                                <span className='btn bg-white text-black m-1'>bootstrap</span>
                                <span className='btn bg-white text-black m-1'>js</span>
                                <span className='btn bg-white text-black m-1'>react</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
