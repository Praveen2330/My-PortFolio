import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Academics from "./components/Academics";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Academics />
      <Skills />
      <Achievements />
      <Contact />
    </>
  );
};

export default App;