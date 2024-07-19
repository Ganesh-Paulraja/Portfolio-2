import "./app.scss"
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Test from "./components/Test/Test";

const App = () => {
  return <div>
    <section id="Home">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services">Parallax</section>
    <section>Services</section>
    <section id="Portfolio">Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Cotact">Contact</section>
    {/* <Test/> */}
  </div>;
};

export default App;
