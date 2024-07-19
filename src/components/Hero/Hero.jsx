import './Hero.scss'

export default function Hero() {
  return (
    <div className='Hero'>
      <div className="wrapper">
      <div className="textContainer">
        <h2>Developer Ganesh</h2>
        <h1>Full Stack <br /> Developer</h1>
        <button>See the Latest Works</button>
        <button>Contact Me</button>
      </div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
      <img src="/scroll.png" alt="scroll" />
      </div>
    </div>
  )
}
