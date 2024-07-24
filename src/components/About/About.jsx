import React, { useRef, useEffect } from 'react'
import './about.scss'
import { motion, useAnimation, useInView } from 'framer-motion';

export default function About() {
  const parentRef = useRef(null);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,
  });
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
    if (inView) {
      console.log(true);
    } else {
      console.log(false);
    }
  }, [inView, controls]);
  return (
    <motion.div ref={ref} className='gg-about'>
      <motion.div variants={animateContent} initial='initial' animate={controls}>
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
      </motion.div>
      <motion.div variants={profileAnimate} className="developer" initial='initial' whileInView="whileView">
        <motion.img variants={profileAnimate} animate='animate' src="./aboutmeprofile.png" alt="developer" />
      </motion.div>
    </motion.div>
  )
}
