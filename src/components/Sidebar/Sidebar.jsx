import './Sidebar.scss'
import { useState } from 'react'
import Links from './SidebarComponents/Links'
import ToggleButton from './SidebarComponents/ToggleButton'
import { motion } from 'framer-motion'

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: 'spring',
        stiffness: 20,
      }
    },
    closed: {  // corrected the typo here
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      }
    }
  }

  return (
    <div className='side'>
      <motion.div className='sidebar' animate={open ? 'open' : 'closed'} variants={variants}>
        <div className="bg">
          <Links />
        </div>
        <div>
          <ToggleButton setOpen={setOpen} />
        </div>
      </motion.div>
    </div>
  )
}