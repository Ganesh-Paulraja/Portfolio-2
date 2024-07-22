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
  const yAxisBackground = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  return (
    <div ref={ref} className='parallax' style={{ background: type === 'About' ? 
      "linear-gradient(180deg, #111132, #0c0c1d)"
      : 'linear-gradient(180deg, #111132, #505064)' }}>
      <motion.h1 style={{ y: yAxisText }}>{type === "About" ? "What I Do?" : "What I did"}</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{y: yAxisBackground , backgroundImage: `url(${type==='About' ? '/planets.png' : '/sun.png'})`}} className="planets"></motion.div>
      <motion.div style={{x: yAxisBackground}} className="stars"></motion.div>
    </div>
  )
}