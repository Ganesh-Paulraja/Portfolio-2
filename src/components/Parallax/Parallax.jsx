import React, { useRef } from 'react'
import './Parallax.scss'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Parallax({ type }) {
  
  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  const yAxisText = useTransform(scrollYProgress, [0, 1], ['0%', '500%'])
  const yAxisScroll = useTransform(scrollYProgress, [0, 1], ['0%', '900%'])
  const yAxisBackground = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const textVariants = {
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      }
    }
  }
  return (
    <div ref={ref} className='parallax' style={{ background: type === 'About' ? 
      "linear-gradient(180deg, #111132, #0c0c1d)"
      : 'linear-gradient(180deg, #111132, #505064)' }}>
<motion.h1  style={{ y: yAxisText }}>{type === "About" ? "About Me" : "Projects"}</motion.h1>
<motion.div className="gg-scroll" style={{ y: yAxisScroll }}>
<motion.img variants = {textVariants} animate='scrollButton' src="/scroll.png" alt="scroll"  className='scroll'/>
</motion.div>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{y: yAxisBackground , backgroundImage: `url(${type==='About' ? '/planets.png' : '/sun.png'})`}} className="planets"></motion.div>
      {/* <motion.div style={{x: yAxisBackground}} className="stars"></motion.div> */}
      <div  className="stars"></div>
    </div>
  )
}