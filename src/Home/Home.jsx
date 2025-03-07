import React from 'react';
import "./Home.css";
import Picture from "../assets/Anaz.jpg"
import { useRef } from 'react';
import VariableProximity from '../VariableProximity/VariableProximity';
import Threads from '../Threads/Threads';


function Home() {
    const containerRef = useRef(null);
  return (
    <div className='Home-parent'>

    <div>
    <div className='Home-Child-One'>

    <div className='Home-Inner-Child'>
    <div ref={containerRef}>
    <VariableProximity
            label={'Front-End Developer'}
            className={'variable-proximity-demo'}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff='linear'
        />
    </div>      
    </div>


    <div className='Home-Inner-Child'>
    <div ref={containerRef}>
    <VariableProximity
            label={'React.Js'}
            className={'variable-proximity-demo-2'}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff='linear'
        />
      <button onClick={() => {
        const link = document.createElement("a");
        link.href = "../assets/resume.pdf"; // Path to the PDF file
        link.download = "Anas_Mohamed_Resume.pdf"; // Desired download file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }} className='Download-button'>Download Resume</button>
    </div>      
    </div>


    <Threads
        amplitude={1}
        distance={0}
        enableMouseInteraction={true}
    />
    </div>
    </div>



      <div>
        <img src={Picture} alt="" className='Profile-img' />
      </div>
    </div>
  )
}

export default Home
