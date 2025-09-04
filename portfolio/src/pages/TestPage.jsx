import Home from './Home';
import AboutME from './AboutMe';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';

import BlobCursor from '../blocks/BlobCursor/BlobCursor';
// import "./TestPage.css"

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Test() {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // animation duration in ms
  }, []);

  return (
    <div style={{background: "lightgrey"}}>

      <BlobCursor
        blobType="circle"
        fillColor="#5227FF"
        trailCount={3}
        sizes={[60, 125, 75]}
        innerSizes={[20, 35, 25]}
        innerColor="rgba(207, 46, 46, 0.8)"
        opacities={[0.6, 0.6, 0.6]}
        shadowColor="rgba(0,0,0,0.75)"
        shadowBlur={5}
        shadowOffsetX={10}
        shadowOffsetY={10}
        filterStdDeviation={30}
        useFilter={true}
        fastDuration={0.1}
        slowDuration={0.5}
        zIndex={100}
    />
      <section  className="pt-40" data-aos="fade-up" style={{ height: "100vh", background: "lightgrey" }}>
        <Home />
      </section>
      <section data-aos="fade-up" style={{ height: "100vh", background: "lightgrey" }}>
        <AboutME />
      </section>
      <section data-aos="fade-up" style={{ height: "200vh", background: "lightgrey" }}>
        <Projects />
      </section>
      <section data-aos="fade-up" style={{ height: "50vh", background: "darkgrey" }}>
        <Contact />
      </section>
    </div>
  );
}

export default Test;

