import React from 'react'
import SpotlightCard from '../SpotlightCard/SpotlightCard'
import "./About.css"
import CountUp from '../CountUp/CountUp';
import ShinyText from '../Navbar/ShinyText';
function Card({title,to,text1,text2,text3}) {
  return (
    <div className='Card-main'>
            <SpotlightCard className="custom-spotlight-card">
                <div className='about-title-div'>
                <ShinyText text={title} disabled={false} speed={3} className='custom-class pd bold' />
                </div>

                <div  className='about-title-div-Two-Parent'>
                <CountUp
                    from={0}
                    to={to}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                />
                </div>


                <div  className='about-title-div-three-Parent'>
                {text1} <br />
                {text2} <br />
                {text3}
                </div>

            </SpotlightCard>
    </div>
  )
}

export default Card
