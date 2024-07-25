import React from 'react'
import './Projects.scss'

export default function Projects() {
  const projectData = [
    {
      imgUrl: './projects/veg.png',
      projectName: 'IFruit Shop',
      description: 'Welcome to iFruit Shop, where MongoDB, Express.js, React.js, and Node.js come together to offer you a seamless shopping experience for all your fruit needs!',
      redirection: 'https://ganesh-mern-web.web.app/',
      gitRepoFrontend: 'https://github.com/Ganesh-Paulraja/MERN-Ecommerce-practice-client',
      gitRepoBackend: '',
    },
    {
      imgUrl: './projects//card.png',
      projectName: 'Card Shop',
      description: 'Experience the convenience of online card shopping with our React.js-powered demo website, offering a diverse selection of beautifully crafted cards for every occasion.',
      redirection: 'https://ganesh-paulraja.github.io/React-NAV1/#/',
      gitRepoFrontend: 'https://github.com/Ganesh-Paulraja/React-NAV1',
      gitRepoBackend: '',
    },
    {
      imgUrl: './projects//boot.png',
      projectName: 'Bootcamp',
      description: 'Discover a dynamic learning hub with our HTML, CSS, JavaScript, and Bootstrap-powered bootcamp website, designed to offer comprehensive coding education with sleek, responsive design!',
      redirection: 'https://ganesh-paulraja.github.io/bootStrap/',
      gitRepoFrontend: 'https://github.com/Ganesh-Paulraja/bootStrap/blob/main/index.htm',
      gitRepoBackend: '',
    },
    {
      imgUrl: './projects//burger.png',
      projectName: 'Burger Shop',
      description: 'Indulge in savory delights with our HTML, CSS, and JavaScript-driven burger shop website, offering a mouthwatering menu and intuitive ordering experience',
      redirection: 'https://ganesh-mern-web.web.app/',
      gitRepoFrontend: 'https://github.com/Ganesh-Paulraja/Ganesh-Burgerweb',
      gitRepoBackend: '',
    }
  ]
  return (
    <div className='gg-project'>
      <h1>Projects</h1>
      <div className="gg-full-wrap">
        {
          projectData.map(res => (
            <div className="gg-box" key={res.projectName}>
              <div className="gg-img">
                <a href={res.redirection} target='_blank'>
                  <img src={res.imgUrl} alt={res.projectName} />
                </a>
              </div>
              <div className="gg-text">
                <h2><a href={res.redirection} target='_blank'>{res.projectName}</a></h2>
                <p>{res.description}</p>
                <div className="gg-cta">
                  <div className="gg-git">
                    <a href={res.gitRepoFrontend} target='_blank'>
                      <img src="./github-mark-white.svg" alt="github" />
                      <span>View Cdoe</span>
                    </a>
                  </div>
                  <div className="gg-view">
                    <a href={res.redirection} target='_blank'>
                      <img src="./projects/web.png" alt="web" />
                      <span>View Site</span>
                    </a>
                  </div>
                </div>
                
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
