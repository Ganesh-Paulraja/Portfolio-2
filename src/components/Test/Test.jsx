// https://www.youtube.com/watch?v=CHGHuF24Cjw&t=212s
import { useState } from 'react'
import './Test.scss'
import {motion} from 'framer-motion'

export default function Test() {
  const [open, setOpen] = useState(false)
  console.log(open);
  const variants = {
    visible: {opacity: 1, x:-40, transition: {type: 'spring', stiffness: 100, damping: 100}},
    hidden: {opacity: 0},
  }
  return (
    <div className='course'>
      <motion.div  style={{cursor: 'pointer'}}
      // initial={{opacity: 0.3, scale: 0.5}} 
     // animate={{opacity: 1, scale: 1}}  // x:40, y:50
     variants={variants}
     animate={open ? 'visible' : 'hidden'}
      transition={{duration: 2, delay: 0}} 
      // whileInView={{opacity: 1, scale: 1}}
      // whileHover={{opacity: 1, scale: 1}}
      // whileTap={{opacity: 1, scale: 1}}
      drag
      className="box">
box
      </motion.div>
      <div className="" onClick={()=>setOpen((prev) => !prev)}>
        <button>
          Button
        </button>
      </div>
    </div>
  )
}

