import { motion } from 'framer-motion'
import React from 'react'

export default function Links() {
  const items = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact",
  ]
  const variants = {
    open: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.1
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.05, 
        staggerDirection: -1 
      }
    }
  }
  const itemVariants = {
    open: {
      y: 0,
      opacity:1,
    },
    closed: {
      y: 50,
      opacity: 0,
    }
  }
  return (
    <motion.div className='links' variants={variants} >
      {items.map(item => (
        <motion.a href={`#${item}`} key={item} variants={itemVariants}
        whileHover={{scale: 1.1}} whileTap={{scale: 1.2}}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  )
}