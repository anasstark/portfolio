import React, { useRef, useState } from 'react';
import './Navbar.css';
import ShinyText from './ShinyText';
import GradientText from '../GradientText/GradientText';
import Home from '../Home/Home';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import { FiAlignJustify } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";

function Navbar() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 820 });

  const [state, setState] = useState(false);

  const scrollToSection = (ref, closeMenu = false) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      if (closeMenu) {
        setTimeout(() => setState(false), 300); 
      }
    }
  };

  return (
    <div style={{ position: "absolute" }}>
      <div className='Navbar-parent'>
        <div className='GradientText-div'>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={5}
            showBorder={false}
            className="GradientText-class"
          >
            PORTFOLIO
          </GradientText>
          {isMobile && <FiAlignJustify onClick={() => setState(!state)} size={32} color='white' className='FiAlignJustify' />}
        </div>

        <div className='Navbar-content'>
          <div className='Navbar-Btn' onClick={() => scrollToSection(homeRef)}>
            <ShinyText text="HOME" disabled={false} speed={3} className='custom-class' />
          </div>
          <div className='Navbar-Btn' onClick={() => scrollToSection(aboutRef)}>
            <ShinyText text="EDUCATION" disabled={false} speed={3} className='custom-class' />
          </div>
          <div className='Navbar-Btn' onClick={() => scrollToSection(experienceRef)}>
            <ShinyText text="EXPERIENCE" disabled={false} speed={3} className='custom-class' />
          </div>
          <div className='Navbar-Btn' onClick={() => scrollToSection(skillsRef)}>
            <ShinyText text="SKILLS" disabled={false} speed={3} className='custom-class' />
          </div>
          <div className='Navbar-Btn' onClick={() => scrollToSection(projectsRef)}>
            <ShinyText text="PROJECTS" disabled={false} speed={3} className='custom-class' />
          </div>
          <div className='Navbar-Btn' onClick={() => scrollToSection(contactRef)}>
            <ShinyText text="CONTACT" disabled={false} speed={3} className='custom-class' />
          </div>
        </div>
      </div>

      {(state && isMobile) && (
        <div className='side-navbar'>  
          <div className='side-nav-div'>
            <div>
              <div onClick={() => scrollToSection(homeRef, true)} >
              <ShinyText text="HOME" disabled={false} speed={3} className='custom-class' />
              </div>

              <br /><br />

              <div onClick={() => scrollToSection(aboutRef, true)}>
              <ShinyText  text="EDUCATION" disabled={false} speed={3} className='custom-class' />
              </div>

              <br /><br />

              <div onClick={() => scrollToSection(experienceRef, true)}>
              <ShinyText text="EXPERIENCE" disabled={false} speed={3} className='custom-class' />
              </div>

              <br /><br />

              <div onClick={() => scrollToSection(skillsRef, true)}>
              <ShinyText text="SKILLS" disabled={false} speed={3} className='custom-class' />
              </div>

              <br /><br />

              <div onClick={() => scrollToSection(projectsRef, true)}>
              <ShinyText  text="PROJECTS" disabled={false} speed={3} className='custom-class' />
              </div>

              <br /><br />

              <div onClick={() => scrollToSection(contactRef, true)}>
              <ShinyText text="CONTACT" disabled={false} speed={3} className='custom-class' />
              </div>

            </div>
          </div>
        </div>
      )}

      
      <div  ref={homeRef}><Home /></div>
      <div  ref={aboutRef}><About /></div>
      <div  ref={experienceRef}><Experience /></div>
      <div  ref={skillsRef}><Skills /></div>
      <div  ref={projectsRef}><Projects /></div>
      <div  ref={contactRef}><Contact /></div>


    </div>
  );
}

export default Navbar;
