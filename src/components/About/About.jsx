import React from 'react'
import './about.scss'

export default function About() {
  return (
    <div className='gg-about'>
      <div className="content-wrap">
      <h1>About me</h1>
      <p className="gg-content">
      I am a software developer at ConvertCart, a Bangalore-based software company, specializing in the MERN stack. I adore designing user-friendly websites that are both simple and elegant. My work involves developing conversion rate optimized components using React.js, ensuring that every part of the website enhances user experience and drives results. I consider myself to be a lifelong learner, always eager to explore new technologies and improve my skills.
      </p>
      <p className="gg-content">
        In my projects, I use MongoDB for efficient data storage, Express.js for creating robust server-side applications, and Node.js for building scalable backend services. By leveraging the full potential of the MERN stack, I can create seamless and dynamic web applications. My goal is to develop solutions that not only meet user needs but also enhance the overall web experience.
      </p>
      <div className="res-btn">
        <a href="">
          Download Resume
        </a>
      </div>
      </div>
      <div className="developer">
        <img src="./aboutmeprofile.png" alt="developer" />
      </div>
    </div>
  )
}
