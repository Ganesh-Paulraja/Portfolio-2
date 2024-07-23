import Sidebar from '../Sidebar/Sidebar'
import './Navbar.scss'
import {motion} from 'framer-motion'

export default function Navbar() {
  return (
    <div className='navBar'>
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
        initial={{opacity:0, scale:0.5}}
        animate={{opacity:1, scale:1}}
        transition={{duration:0.5}}
        ><a href="/">Dev Ganesh</a></motion.span>
        <div className="social">
        <a href="https://github.com/Ganesh-Paulraja">
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
  )
}
