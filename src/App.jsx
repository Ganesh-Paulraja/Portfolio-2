import "./app.scss"
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
// import Test from "./components/Test/Test";

const App = () => {
  return <div>
    <section id="Home">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services"><Parallax type={'About'}/></section>
    <section>Services</section>
    <section id="Portfolio"><Parallax type={'portfolio'}/></section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Cotact">Contact</section>
    {/* <Test/> */}
  </div>;
};

export default App;
