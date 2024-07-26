import "./app.scss"
import About from "./components/About/About";
import Achivements from "./components/Achivements/Achivements";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
// import Test from "./components/Test/Test";

const App = () => {
  return <div>
    <section id="Home">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services"><Parallax type={'About'}/></section>
    <section id="About"><About/></section>
    <section id="SKills"><Skills/></section>
    <section id="Portfolio"><Parallax type={'portfolio'}/></section>
    <section id="projects"><Projects/></section>
    <section><Achivements/></section>
    <section>Portfolio3</section>
    <section id="Cotact">Contact</section>
    {/* <Test/> */}
  </div>;
};

export default App;
