/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import moment from 'moment'
import './Facts.css'
import black from '../../assets/black.jpg'
import arrow from '../../assets/arrow.svg'
import 'animate.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';

const Facts = ({ information }) => {
    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 5000)

    if(loading) {
        return (
            <div className='loading animate__animated animate__fadeInLeft'>
                Loading...
            </div>
        )
    }

    function calculateYearsAgo(year) {
        const currentYear = moment().year()
        const difference = currentYear - year
        return `${difference} years ago`
    }

    return (
        <div>
            {information.map((eachInfo, index) => (
                <div className='timeline' key={index} >
                    <div className="timeline-border animate__animated animate__fadeInLeft">
                        <div className='flex'>
                            <div className="timeline-point"></div>
                            <div className="year">
                                <h1 className='poppins-light animate__animated animate__fadeInLeftBig'>
                                    {eachInfo.year < 0 ? `${Math.abs(eachInfo.year)}BCE` : eachInfo.year}
                                </h1>
                                <h2 className='poppins-light animate__animated animate__fadeInLeftBIg'>{
                                    calculateYearsAgo(eachInfo.year)
                                }</h2>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-component">
                        <Swiper
                            modules={[Navigation, Pagination, A11y, EffectFade]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            autoHeight={true}

                        >
                            <SwiperSlide key={`main-${index}`}>
                                <div className="timeline-fact">
                                    <div className="fact-information">
                                        <div>
                                            <p className='poppins-light animate__animated animate__fadeInLeftBig'>{eachInfo.text}</p>
                                            <div className="fact-image">
                                                <img className='fact-image img animate__animated animate__fadeInLeft' src={eachInfo.pages[0].originalimage ? eachInfo.pages[0].originalimage.source : black} alt="Image" />
                                                <div className="title animate__animated animate__fadeInLeft">
                                                    <h1 className='animate__animated animate__fadeInLeftBig'>{eachInfo.pages[0].titles.normalized} <br />
                                                        {eachInfo.pages[0].description}
                                                    </h1>
                                                    <a href={eachInfo.pages[0].content_urls.desktop.page} target='_blank' rel='noopener noreferrer' className='animate__animated animate__fadeInLeftBig'>
                                                        <img src={arrow} alt="Arrow" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {eachInfo.pages.slice(1).map((eachPage, pageIndex) => (
                                <SwiperSlide key={`page-${index}-${pageIndex}`}>
                                    <div className="timeline-fact">
                                        <div className="fact-information">
                                            <div>
                                                <p className='poppins-light animate__animated animate__fadeInLeftBig'>{eachPage.extract}</p>
                                                <div className="fact-image">
                                                    <img className='fact-image img animate__animated animate__fadeInLeft' src={eachPage.originalimage ? eachPage.originalimage.source : black} alt="Image" />
                                                    <div className="title animate__animated animate__fadeInLeft">
                                                        <h1 className='animate__animated animate__fadeInLeftBig'>{eachPage.titles.normalized} <br />
                                                            {eachPage.description}
                                                        </h1>
                                                        <a href={eachPage.content_urls.desktop.page} target='_blank' rel='noopener noreferrer' className='animate__animated animate__fadeInLeftBig'>
                                                            <img src={arrow} alt="Arrow" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>





                    </div>
                </div>
            ))}
        </div>


    )
}
export default Facts
