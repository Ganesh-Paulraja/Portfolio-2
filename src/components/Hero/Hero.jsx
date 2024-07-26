import { motion } from 'framer-motion';
import './Hero.scss'
import { useState } from 'react';
import TypedText from './TypedAnimation';
export default function Hero() {
  const [startAnimate, setStartAnimate] = useState(false);
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    profileInitial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      }
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      }
    }
    
  }
  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: '-220%',
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
      }
    },
  }
  const floatingVariants = {
    float: {
      y: [15, -15, 15], 
      transition: {
        duration: 2, 
        repeat: Infinity, 
        repeatType: 'loop', 
        ease: 'easeInOut', 
      },
    },
  };
  
  return (
    <div className='Hero'>
      <div className="wrapper">
      <motion.div variants = {textVariants} 
      initial = 'initial' 
      animate= 'animate' 
      className="textContainer">
        <motion.h2 variants = {textVariants}>Hi, I'm Ganesh</motion.h2>
        <motion.h1 variants = {textVariants}>
          {/* A Full Stack Developer */}
         A <TypedText texts={["Full Stack Developer", "MERN Stack Developer"]} />
          </motion.h1>
        <motion.div variants = {textVariants} className="btns">
        <motion.a href='#About' variants = {textVariants} onHoverStart={() => setStartAnimate(true)} whileTap={{scale: 1.1,}} onHoverEnd={() => setStartAnimate(false)}>About Me</motion.a>
        <motion.a href='' variants = {textVariants} onHoverStart={() => setStartAnimate(true)} whileTap={{scale: 1.1,}} onHoverEnd={() => setStartAnimate(false)}>Contact Me</motion.a>
        </motion.div>
        <motion.img variants = {textVariants} animate='scrollButton' src="/scroll.png" alt="scroll"  className='scroll'/>
      </motion.div>
      <motion.div className="slidingTextContainer" variants = {sliderVariants} initial='initial' animate='animate'>
        MERN Stack Developer 
        
      </motion.div>
      <motion.div variants = {textVariants} 
      initial = 'profileInitial' 
      animate= 'animate' className={startAnimate ? "imageContainer bg-animate": 'imageContainer'} >
        <motion.span variants = {floatingVariants} 
      animate= {startAnimate ? 'float': undefined}  
      className={startAnimate && 'gg-shadow'}
      onHoverStart={() => setStartAnimate(true)} onHoverEnd={() => setStartAnimate(false)}>
        <img src="/1663142312316-removebg-preview.png" alt="profile" />
        </motion.span>
      </motion.div>
      
      </div>
    </div>
  )
}
