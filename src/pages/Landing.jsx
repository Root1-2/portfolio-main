import Header from "../components/Header";
import LandingBody from "../components/LandingBody";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Landing() {
  return (
    <div>
      <Header />
      <LandingBody />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Landing;
