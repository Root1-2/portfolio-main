import Header from "../components/Header";
import LandingBody from "../components/LandingBody";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import bg from "/banner-bg.png";

function Landing() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <div className="relative z-10">
        <Header />
        <div className="h-screen overflow-y-auto">
          <LandingBody />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Landing;
