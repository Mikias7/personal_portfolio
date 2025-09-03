import Home from './Home';
import AboutME from './AboutMe';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';

// import "./TestPage.css"

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Test() {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // animation duration in ms
  }, []);

  return (
    <div>
      <section data-aos="fade-up" style={{ height: "100vh", background: "white" }}>
        <Home />
      </section>
      <section data-aos="fade-up" style={{ height: "100vh", background: "white" }}>
        <Projects />
      </section>
      <section data-aos="fade-up" style={{ height: "100vh", background: "white" }}>
        <Contact />
      </section>
    </div>
  );
}

export default Test;

