import React, { useRef, useEffect, useState } from 'react'
import './about.scss'
import { motion} from 'framer-motion';

export default function About() {
  const elementRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const animateContent = {
    initial: {
      opacity: 0,
      x: -500,
    },
    whileView: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      }
    }
  }
  const profileAnimate = {
    initial: {
      y: 500,
      opacity: 0,
    },
    whileView: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      }
    },
    animate: {
      y: [15, -15, 15], 
      x: [15, -15, 15], 
      transition: {
        duration: 2, 
        repeat: Infinity, 
        repeatType: 'loop', 
        ease: 'easeInOut', 
      },
    },
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 } 
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);
  return (
    <motion.div ref={elementRef} className='gg-about'>
      <motion.div className='content-wrap' variants={animateContent} initial='initial' animate={isInView ? 'whileView': ''}>
      <h1>About me</h1>
      <p className="gg-content gg-first">
      I am a software developer at ConvertCart, a Bangalore-based software company, specializing in the MERN stack. I develop and design user-friendly websites that are both simple and elegant, with a focus on delivering seamless, responsive user experiences. My expertise spans React.js, where I create dynamic user interfaces, and Node.js for building robust, scalable back-end services. With 3 years and 5 months of experience in frontend development and 1 year in backend development, I leverage the full potential of the MERN stack to create high-performance, conversion rate optimized web applications.
      </p>
      <p className="gg-content">
      I excel in integrating MongoDB for efficient data storage, Express.js for crafting flexible APIs, and Node.js for handling server-side logic. My goal is to architect and deploy scalable full-stack applications that not only meet user needs but also optimize performance and enhance the overall web experience.
      </p>
      {/* <p className="gg-content gg-first">
      I am a software developer at ConvertCart, a Bangalore-based software company. I specialize in React, Redux, HTML, CSS, JavaScript, and Tailwind. I adore designing user-friendly websites that are both simple and elegant. My work involves developing conversion rate optimized components using React.js, ensuring that every part of the website enhances user experience and drives results. With 2 years and 7 months of experience in software development, I consider myself to be a lifelong learner, always eager to explore new technologies and improve my skills.
      </p>
      <p className="gg-content">
In my projects, I focus on creating seamless and dynamic web applications by leveraging the full potential of these technologies. My goal is to develop solutions that not only meet user needs but also enhance the overall web experience.
      </p> */}
      <div className="res-btn">
        <motion.a href="./GANESH-MERN-STACK.pdf" target='_blank' whileTap={{scale: 1.1}}>
          Download Resume
        </motion.a>
      </div>
      </motion.div>
      <motion.div variants={profileAnimate} className="developer" initial='initial' animate={isInView ? 'whileView': ''}>
        <motion.img variants={profileAnimate} animate='animate' src="./aboutmeprofile.png" alt="developer" />
      </motion.div>
    </motion.div>
  )
}
