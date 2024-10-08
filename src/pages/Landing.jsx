import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import Header from "../components/Header";
import LandingBody from "../components/LandingBody";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import bg from "/banner-bg.png";

function Landing() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

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
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Landing;
