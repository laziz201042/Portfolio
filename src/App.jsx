import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Gallery from "./components/Gallery";  
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About id="about" />
      <Skills id="skills" />
      <Portfolio id="portfolio" />
      <Gallery id="gallery" />   
      <Contact id="contact" />
      <Footer />
    </>
  );
}

export default App;