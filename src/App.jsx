import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Academics from "./components/Academics";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Academics />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </>
  );
};

export default App;