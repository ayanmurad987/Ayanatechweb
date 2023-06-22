import React from 'react'
import { ProfileCardComp } from '../../../component'
import Textdivcomp from '../OurServices/Textdivcomp'
import MsgIcon from "../../../assets/images/MsgIcon.svg"
export default function ProfileDiv() {
  return (
    
    <div className="ProfileDiv">
    <div style={{display:"flex",flexWrap:"wrap",alignSelf:"flex-end",position:"relative",left:90}}>
    <ProfileCardComp  name={"ayan"} work={"full stack developer | DevOps engr"} discription={"Design+Code 1 got me fully into using Sketch and I’m amped to discover what’s new in this sequel"}/>
    <ProfileCardComp name={"ayan"} work={"full stack developer | DevOps engr"} discription={"Design+Code 1 got me fully into using Sketch and I’m amped to discover what’s new in this sequel"}/>
    </div>
    <Textdivcomp Heading="10,000 people" btnimg={MsgIcon} btntext={"More stories"} />
  </div>
  )
}
