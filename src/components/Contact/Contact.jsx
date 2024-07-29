import {inView, motion} from 'framer-motion'
import React, { useRef, useEffect, useState } from 'react'
import './Contact.scss'

export default function Contact() {
  const [message, setMessage] = useState('')
  const elementRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const animation = {
    initial: {
      opacity: 0,
      x: -500,
    },
    animate: {
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.7,
        staggerChildren: 0.1,
      }
    }
  }
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
    <div ref={elementRef} className="gg-contact">
      <motion.div variants={animation} initial='initial' animate={isInView ? 'animate' : ''} className="gg-full-wrap">
        <div className="gg-left">
          <h2>Contact Me</h2>
          <div className="info-box">
            <span>Mail:</span> <a href="mailto:ganeshsgk555@gmail.com">
              ganeshsgk555@gmail.com
            </a>
          </div>
          <div className="info-box">
            <span>Phone:</span> <a href="tel:8056611391">
              8056611391
            </a>
          </div>
          <div className="gg-social">
            <div className="social">
              <a href="https://github.com/Ganesh-Paulraja" style={{marginLeft: '0px'}}>
                <img src="/github-mark-white.svg" alt="git hub" />
              </a>
              <a href="https://www.linkedin.com/in/ganesh-paulraja/">
                <img src="/linkedin.svg" alt="linked in" />
              </a>
              <a href="https://www.instagram.com/developer_ganesh/">
                <img src="/instagram.svg" alt="instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="gg-right">
          <div className='gg-frm'>
          <textarea name="message" id="message" rows="2" placeholder="Enter your message here..." className=""   onChange={e => setMessage(e.target.value)}></textarea>
          <a href={`mailto:ganeshsgk555@gmail.com?subject=DeveloperGanesh&body=${message}`}>Submit</a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
