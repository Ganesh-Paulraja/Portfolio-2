import React from 'react'
import './Skills.scss'
import {motion} from 'framer-motion'

export default function Skills() {
  const frontendSkills = [
    {
      skillName: 'HTML',
      image: './skill/html.png',
    },
    {
      skillName: 'CSS',
      image: './skill/css.png',
    },
    {
      skillName: 'SCSS',
      image: './skill/scss.png',
    },
    {
      skillName: 'Javascript',
      image: './skill/javascript.png',
    },
    {
      skillName: 'React',
      image: './skill/react.png',
    },
    {
      skillName: 'Redux',
      image: './skill/redux.png',
    },
    {
      skillName: 'TailWind',
      image: './skill/tailwind.png',
    },
    {
      skillName: 'Framer Motion Animation',
      image: './skill/motion.png',
    },
  ]
  const frontendTools = [
    {
      skillName: 'VS Code',
      image: './skill/vs.png',
    },
    {
      skillName: 'Figma',
      image: './skill/figma.png',
    },
    {
      skillName: 'Firebase',
      image: './skill/firebase.png',
    },
    {
      skillName: 'Github',
      image: './skill/git.png',
    },
  ]
  const backendSkills = [
    {
      skillName: 'Javascript',
      image: './skill/javascript.png',
    },
    {
      skillName: 'Node Js',
      image: './skill/node.png',
    },
    {
      skillName: 'Express',
      image: './skill/express.png',
    },
    {
      skillName: 'MongoDb',
      image: './skill/mangodb.png',
    },
  ]
  const backendTools = [
    {
      skillName: 'VS Code',
      image: './skill/vs.png',
    },
    {
      skillName: 'MongoDb Compass',
      image: './skill/camboss.png',
    },
    {
      skillName: 'Postman',
      image: './skill/post.png',
    },
    {
      skillName: 'Github',
      image: './skill/git.png',
    },
  ]
  return (
    <div className='gg-skills'>
      <h1>SKILLS</h1>
      <div className="gg-box-wrap">
        <div className="gg-front">
          <h2><img src="./artist.png" alt="" /> <span>Frontend Developer</span></h2>
          <p>It's fun for me to bring new concepts to life. I consider myself fortunate to be a frontend developer because my work has a direct impact on the user's life.</p>
          <h3>Skills</h3>
          <div className="gg-skill">
            {
              frontendSkills.map(res => (
                <div className="gg-box" key={res.skillName}>
                  <div className="ggimg">
                    <img src={res.image} alt={res.skillName} />
                  </div>
                  <div className="gg-name">
                    {res.skillName}
                  </div>
                </div>
              ))
            }
            
          </div>
          <h3 className='gg-tool'>Tools</h3>
          <div className="gg-skill">
            {
              frontendTools.map(res => (
                <div className="gg-box" key={res.skillName}>
                  <div className="ggimg">
                    <img src={res.image} alt={res.skillName} />
                  </div>
                  <div className="gg-name">
                    {res.skillName}
                  </div>
                </div>
              ))
            }
            
          </div>
        </div>
        <div className="gg-front">
          <h2><img className='backImg' src="./back-3.png" alt="" /> <span>Backend Developer</span></h2>
          <p>I enjoy writing clean code and creating useful products.</p>
          <h3>I LIKE TO CODE IN</h3>
          <div className="gg-skill">
            {
              backendSkills.map(res => (
                <div className="gg-box" key={res.skillName}>
                  <div className="ggimg">
                    <img src={res.image} alt={res.skillName} />
                  </div>
                  <div className="gg-name">
                    {res.skillName}
                  </div>
                </div>
              ))
            }
            
          </div>
          <h3 className='gg-tool'>Tools</h3>
          <div className="gg-skill">
            {
              backendTools.map(res => (
                <div className="gg-box" key={res.skillName}>
                  <div className="ggimg">
                    <img src={res.image} alt={res.skillName} />
                  </div>
                  <div className="gg-name">
                    {res.skillName}
                  </div>
                </div>
              ))
            }
            
          </div>
        </div>
      </div>
    </div>
  )
}
