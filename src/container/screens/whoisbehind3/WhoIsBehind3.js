import React from 'react'
import "./index.css"
import { FeatureCoursesWraper } from '../../../component'
import ayanPic from "../../../assets/images/ayan.png"
import addmember from "../../../assets/images/AddUsrIcon.svg"
import Textdivcomp from '../OurServices/Textdivcomp'
// import Ball from "../../../assets/images/Ball_icon.svg"
import { Html } from '../../../assets'
import { Css } from '@mui/icons-material'
export default function WhoIsBehind3() {
  
  return (
    <div className='WhoIsBehind3'>
            <div className='AboutUs1'>
        <FeatureCoursesWraper pic={ayanPic} colors={"#FFB84F"} />
        <FeatureCoursesWraper pic={ayanPic} colors={"#E33830"} />
      </div>
      <div className='WhoIsBehind3-ball-div'>
        <Textdivcomp top={-40} btnimg={addmember}  btntext={"Let’s work together"} Heading={"Creative Development Combined With Technical Excellence"} colors={"black"}/>
        <div className='Ball-div'>
          <div className='Ball-div-contents' ><p className='ball-div-text'>WEB & MOBILE</p></div>
          <div className='Ball-div-contents2'><p className='ball-div-text'>DEVELOPEMENT</p></div>
          <div className='Ball-div-contents3' ><p className='ball-div-text'>INNOVATION</p></div>
        </div>
      </div>
    </div>
  )
}
