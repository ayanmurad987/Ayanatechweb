import React from "react";
import {
  Css,
  Es6,
  Firebase,
  GitHub,
  Html,
  Javascript,
  React2,
} from "../../../assets";
import "./index.css";
import { ProfileCardComp } from "../../../component";
import Textdivcomp from "../OurServices/Textdivcomp";
import MsgIcon from "../../../assets/images/MsgIcon.svg"
import fahad from "../../../assets/images/Fahad_Pic.jpg";
import yasirImg from "../../../assets/images/yasir.png";
// import wajahat from "../../../assets/images/wajahat.png"
export default function Whoisbehind() {
  return (
    <div className="Whoisbehind">
      <div className="WhoisbehindTxtdiv">
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="contentText">
          <p className="text1" style={{ color: "black", fontFamily: "Arial", }}>START WITH MORE</p>
          <p className="text2" style={{ color: "black", fontFamily: "Arial Black" }}>Get discounts</p>
          <p className="text3" style={{ color: "black", fontFamily: "revert-layer" }}>
            We’ve partnered with the biggest design tools on the market to help you get started.
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="WhoisbehindIconDiv"
        >
          <div className="course_Div">
            <img src={Html} className="LogoStyles" />
          </div>
          <div className="course_Div">
            <img src={Css} className="LogoStyles" />
          </div>
          <div className="course_Div">
            <img src={Javascript} className="LogoStyles" />
          </div>
          <div className="course_Div" >
            <img src={GitHub} className="LogoStyles" style={{ zIndex: -3 }} />
          </div>
        </div>
      </div>
      <div className="ProfileDiv">
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="profile-div-responsive" style={{ display: "flex", flexWrap: "wrap", alignSelf: "flex-end", position: "relative" }}>
          <ProfileCardComp pic={fahad} name={"Fahad Zahid"} work={"React Developer at Musketeers Technologies"} discription={"Meet Fahad Zahid! He is one of our best students and was with us at the start of Ayan Tech. Currently, he is working at a multinational company."} />
          <ProfileCardComp pic={yasirImg} name={"Yasir Sheikh"} work={"React Native Developer at HNH Tech"} discription={"Meet Yasir! He was a 10th-grade student. He proved that you don't need a high level of education to become a professional developer and secure an ideal job."} />
        </div>
        <Textdivcomp
          data_aos="fade-left"
          Heading="10,000 people" btnimg={MsgIcon} btntext={"More stories"} top={30} colors={"black"} />
      </div>
      {/* <div className="whoisbehind-bg"></div> */}
    </div>
  );
}
