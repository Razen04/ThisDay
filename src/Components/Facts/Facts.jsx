/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import moment from 'moment'
import './Facts.css'
import black from '../../assets/black.jpg'
import arrow from '../../assets/arrow.svg'
import 'animate.css'

const Facts = ({ information }) => {


    return (
        <div>
            {information.map((eachInfo, index) => (
                <div className='timeline' key={index} >
                    <div className="timeline-border animate__animated animate__fadeInLeft">
                        <div className='flex'>
                            <div className="timeline-point"></div>
                            <div className="year">
                                <h1 className='poppins-light animate__animated animate__fadeInLeftBig'>
                                    {eachInfo.year}
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-component">
                        {eachInfo.pages.map((eachPage, index) => (
                            <div className="timeline-fact" key={index}>
                                <div className="fact-information">
                                    <h2 className='poppins-light animate__animated animate__fadeInLeftBIg'>{
                                        moment((moment(eachInfo.year, 'YYYY')).format('YYYY-MM-DD')).fromNow()
                                    }</h2>
                                    <div key={index}>
                                        <p className='poppins-light animate__animated animate__fadeInLeftBig'>{eachPage.extract}</p>
                                        <div className="fact-image">
                                            <img className='fact-image img animate__animated animate__fadeInLeft' src={eachPage.originalimage ? eachPage.originalimage.source : black} alt="Rover" />
                                            <div className="title animate__animated animate__fadeInLeft">
                                                <h1 className='animate__animated animate__fadeInLeftBig'>{eachPage.titles.normalized} <br />
                                                    {eachPage.description}
                                                </h1>
                                                <a href={eachPage.content_urls.desktop.page} target='_blank' className='animate__animated animate__fadeInLeftBig'><img src={arrow} alt="Arrow" /></a>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}





                    </div>
                </div>
            ))}
        </div>


    )
}
export default Facts
