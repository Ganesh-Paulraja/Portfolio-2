import React from 'react'
import './Extra.scss'

export default function Extra() {
  return (
    <div className='gg-extra'>
      <div className="cc-full-wrap">
        <div className="cc-box-wrap">
          <h2 className="head">
Experience: 
          </h2>
          <div className="date-info">
         <span>Convertcart: eCommerce Growth 
         Platform and Consulting , Bengaluru:</span> December 2021 – Present
          </div>
          <div className="text-wrap">
          I am a software developer with 2 years and 7 months of experience in frontend development, specializing in React.js. I have also accumulated 8 months of experience in backend development with Node.js. Currently, I am expanding my skills in fullstack development with a focus on the MERN stack.
          </div>
          
        </div>
        <div className="cc-box-wrap gg-two">
          <h2 className="head">
Cirtification: 
          </h2>
          <div className="text-wrap">
          Master MERN (MongoDB, Express, React.js, Node.js) with JWT, Firebase, and Google OAuth - Building a Real Estate Platform
          </div>
          <div className="gg-link">
            <a href="/mern.pdf" target='_blank' className='gg-cir'>
            View Certificate
            </a>
          </div>
        </div>
        <div className="cc-box-wrap gg-two">
          <h2 className="head">
Education: 
          </h2>
          <div className="date-info">
          12th Grade :  2015-2017
          </div>
          <div className="date-info">
          Diploma in Mechanical 
Engineering :  2017-2020
          </div>
        </div>
      </div>
    </div>
  )
}
