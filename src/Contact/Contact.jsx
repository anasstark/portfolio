import React, { useRef, useState } from 'react'
import GradientText from '../GradientText/GradientText'
import "./Contact.css"
import SpotlightCard from '../SpotlightCard/SpotlightCard';
import Linkedin from "../assets/linkedIn.png"
import GitHub from "../assets/GitHub.png"
import mail from "../assets/mail.webp"

function Contact() {

       const containerRef = useRef(null);

       var Data ={
        Name:"",
        Phone:"",
        email:"",
        message:"",
       }
       const [State, setState] = useState(Data);

        
        const HandleChange = (e) => {
            let { name, value } = e.target;
        
            if (name === "Phone") {
                if (!/^\d*$/.test(value)) {
                    return; 
                }
            } 
            else if (name === "Name") {
                if (!/^[a-zA-Z\s]*$/.test(value)) {
                    return; 
                }
            }
        
            setState((prev) => ({
                ...prev,
                [name]: value
            }));
        };


        const HandleSubmit = (e) => {
            e.preventDefault();
            
            const { Name, Phone, email, message } = State;
            const recipient = "anasmohamedpvt@gmail.com";
            
            const subject = encodeURIComponent(`Contact Form Submission from ${Name}`);
            const body = encodeURIComponent(`Name: ${Name}\nPhone: ${Phone}\nEmail: ${email}\n\nMessage:\n${message}`);
        
            window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
            setState(Data)
        };
        
        
  return (
    <div >
          <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={5}
              showBorder={false}
              className="GradientText-About height"
          >
              CONTACT
          </GradientText>


          <div className='Contact-main'>

            <SpotlightCard className="custom-spotlight-contact-two">
            <GradientText
              colors={["red", "#4079ff", "#40ffaa", "grey", "red"]}
              animationSpeed={5}
              showBorder={true}
              className="GradientText-About contact-GradientText">
              Contact me 
          </GradientText>

            <div className='icons-div-parent'>
            <div className='icons-div'>
            <GradientText
            colors={["red", "#4079ff", "#40ffaa", "grey", "red"]}
            animationSpeed={5}
            showBorder={true}
            className="GradientText-About contact-GradientText-two">
            <a href="https://www.linkedin.com/in/anas-mohamed-54872b28b/" target="_blank" rel="noopener noreferrer">
                <img src={Linkedin} alt="LinkedIn" className='Logo-class-two'/>  
            </a>
            </GradientText>

            <GradientText
            colors={["red", "#4079ff", "#40ffaa", "grey", "red"]}
            animationSpeed={5}
            showBorder={true}
            className="GradientText-About contact-GradientText-two">
            <a href="https://github.com/anasmd733" target="_blank" rel="noopener noreferrer">
                <img src={GitHub} alt="GitHub" className='Logo-class-two'/>  
            </a>
            </GradientText>
            
            <GradientText
            colors={["red", "#4079ff", "#40ffaa", "grey", "red"]}
            animationSpeed={5}
            showBorder={true}
            className="GradientText-About contact-GradientText-two">
            <a href="mailto:anasmohamedpvt@gmail.com">
                <img src={mail} alt="Email" className='Logo-class-two'/>  
            </a>
            </GradientText>

            </div>
            </div>


            </SpotlightCard>


            <SpotlightCard className="custom-spotlight-contact">

                <div className='contact-form-div'>
                <form className='contact-form' onSubmit={HandleSubmit}>
                    <input type="text" name="Name" id="" className='input-' onChange={HandleChange} value={State.Name} placeholder='Name'/>
                    <br />
                    <br />
                    <input type="text" name="Phone" id="" className='input-' onChange={HandleChange} value={State.Phone} placeholder='Phone'/>
                    <br /><br />
                    <input type="email" name="email" id="" className='input-' onChange={HandleChange} value={State.email} placeholder='Email'/>
                    <br /><br />
                    <input type="text" name="message" id="" className='input-two' onChange={HandleChange} value={State.message} placeholder='Message'/>
                    <br /><br />
                    <div className='input-SUBMIT-div'>
                    <button className='input-SUBMIT'>SUBMIT</button>
                    </div>
                </form>
                </div>


            </SpotlightCard>

          </div>




    </div>
  )
}

export default Contact
