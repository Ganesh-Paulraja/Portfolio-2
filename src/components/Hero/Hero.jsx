import { animate, motion } from 'framer-motion'
import './Hero.scss'

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
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

export default function Hero() {
  return (
    <div className='Hero'>
      <div className="wrapper">
      <motion.div variants = {textVariants} 
      initial = 'initial' 
      animate= 'animate' 
      className="textContainer">
        <motion.h2 variants = {textVariants}>I'm Ganesh</motion.h2>
        <motion.h1 variants = {textVariants}>A Full Stack Developer</motion.h1>
        <motion.div variants = {textVariants} className="btns">
        <motion.button variants = {textVariants}>My Experience</motion.button>
        <motion.button variants = {textVariants}>Contact Me</motion.button>
        </motion.div>
        <motion.img variants = {textVariants} animate='scrollButton' src="/scroll.png" alt="scroll"  className='scroll'/>
      </motion.div>
      <motion.div className="slidingTextContainer" variants = {sliderVariants} initial='initial' animate='animate'>
        MERN Stack Developer 
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
      
      </div>
    </div>
  )
}
