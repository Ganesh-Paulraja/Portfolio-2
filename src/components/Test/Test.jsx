// https://www.youtube.com/watch?v=CHGHuF24Cjw&t=212s
import './Test.scss'
import {motion} from 'framer-motion'

export default function Test() {
  const variants = {
    Visible: {opacity: 1},
    hidden: {opacity: 0},
  }
  return (
    <div className='course'>
      <motion.div animate={{opacity: 1, scale: 1, y:200 }} 
      transition={{duration: 2,}} 
      initial={{opacity: 0.3, scale: 0.5}}
      whileInView={{opacity: 1, scale: 2}}
      drag
      className="box">
box
      </motion.div>
    </div>
  )
}
