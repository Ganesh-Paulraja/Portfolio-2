import React, { useRef, useEffect, useState } from 'react'
import './Projects.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation } from 'swiper';
import {motion} from 'framer-motion'

export default function Projects() {
  const elementRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  SwiperCore.use([Navigation]);
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
  const projectData = [
    {
      imgUrl: './projects/veg.png',
      projectName: 'IFruit Shop',
      description: 'Welcome to iFruit Shop, where MongoDB, Express.js, React.js, and Node.js come together to offer you a seamless shopping experience for all your fruit needs!',
      redirection: 'https://ganesh-mern-web.web.app/',
      gitRepoFrontend: 'https://github.com/Ganesh-Paulraja/MERN-Ecommerce-practice-client',
      gitRepoBackend: '',
    },
    {
      imgUrl: './projects//card.png',
      projectName: 'Card Shop',
      description: 'Experience the convenience of online card shopping with our React.js-powered demo website, offering a diverse selection of beautifully crafted cards for every occasion.',
      redirection: 'https://ganesh-paulraja.github.io/React-NAV1/#/',
      gitRepoFrontend: 'https://github.com/Ganesh-Paulraja/React-NAV1',
      gitRepoBackend: '',
    },
    {
      imgUrl: './projects//boot.png',
      projectName: 'Bootcamp',
      description: 'Discover a dynamic learning hub with our HTML, CSS, JavaScript, and Bootstrap-powered bootcamp website, designed to offer comprehensive coding education with sleek, responsive design!',
      redirection: 'https://ganesh-paulraja.github.io/bootStrap/',
      gitRepoFrontend: 'https://github.com/Ganesh-Paulraja/bootStrap/blob/main/index.htm',
      gitRepoBackend: '',
    },
    {
      imgUrl: './projects//burger.png',
      projectName: 'Burger Shop',
      description: 'Indulge in savory delights with our HTML, CSS, and JavaScript-driven burger shop website, offering a mouthwatering menu and intuitive ordering experience',
      redirection: 'https://ganesh-mern-web.web.app/',
      gitRepoFrontend: 'https://github.com/Ganesh-Paulraja/Ganesh-Burgerweb',
      gitRepoBackend: '',
    }
  ];

  return (
    <div ref={elementRef}  className='gg-project'>
      <motion.div className="" variants={animation} initial='initial' animate={isInView ? 'animate' : ''}>
      <h1>Projects</h1>
      <div className="gg-full-wrap">
        <Swiper navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}>
          {
            projectData.map(res => (
              <SwiperSlide key={res.projectName}>
                <div className="gg-box">
                  <div className="gg-img">
                    <a href={res.redirection} target='_blank' rel="noreferrer">
                      <img src={res.imgUrl} alt={res.projectName} />
                    </a>
                  </div>
                  <div className="gg-text">
                    <h2><a href={res.redirection} target='_blank' rel="noreferrer">{res.projectName}</a></h2>
                    <p>{res.description}</p>
                    <div className="gg-cta">
                      <div className="gg-git">
                        <a href={res.gitRepoFrontend} target='_blank' rel="noreferrer">
                          <img src="./github-mark-white.svg" alt="github" />
                          <span>View Code</span>
                        </a>
                      </div>
                      <div className="gg-view">
                        <a href={res.redirection} target='_blank' rel="noreferrer">
                          <img src="./projects/web.png" alt="web" />
                          <span>View Site</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
      </motion.div>
    </div>
  );
}