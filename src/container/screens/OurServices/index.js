import React, { useEffect } from "react";
import "./index.css";
import { tuitbacking2 } from "../../../assets/";
import backGround from "../../../assets/images/backgroundLine.svg";
import backGround2 from "../../../assets/images/tuitorialsBackground.svg";
import { BookShape, Button, CertificateCard } from "../../../component";
import VideoIcon from "../../../assets/images/videoIcon.svg";
import Html from "../../../assets/images/html.svg";
import Css from "../../../assets/images/css.svg";
import Js from "../../../assets/images/javascript.svg";
import github from "../../../assets/images/github.svg";
import firebase from "../../../assets/images/friebase.svg";
import es6 from "../../../assets/images/es6.svg";
import redux from "../../../assets/images/react.svg";
import Textdivcomp from "./Textdivcomp";
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurServices = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  console.log("window.screen.width============>", window.screen.width);
  const scrwidth = window.screen.width;
  return (
    <div className="OurServices" id="ourservices">
      {/* <div className="BackGround-line"></div>
      <div className="BackGround-line-2"></div> */}
      <div
        className="our-services-book-card-comp" style={styles.ContentsDiv}>
        <Textdivcomp
          btnimg={VideoIcon}
          btntext={"More Tutorial"}
          Heading={"Tutorials to guide you beyond"}
          top={100}
          data_aos='fade-right'
        />
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          // data-aos-easing="ease-in-out"
          // data-aos-mirror="true"
          // data-aos-once="false"
          // data-aos-anchor-placement="top-center"
          style={styles.BookShapDiv} className="Book-Shape-Div">
          <BookShape
            icons={[Html, Css, Js]}
            name={"Website developement using"}
            description={
              "HTML,CSS, & JS combines the building blocks of structure, style, to create dynamic & engaging Websites."
            }
            feature1={"asdad"}
            feature2={"adsadas"}
          />
          <BookShape
            icons={[github, firebase, es6, redux]}
            name={"Web, Android and IOS Developer using"}
            description={
              " Android, and IOS applications using React provides a streamlined approach to cross-platform development"
            }
            feature1={"asdad"}
            feature2={"adsadas"}
          />
        </div>
      </div>

      {/* Lines comp */}

      <div className="multipleLines"></div>
      <div

        style={styles.ContentsDiv2} className="our-services-Cirtificate-div">
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="Certificated-div">
          <CertificateCard />
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="OurServicesTxtDiv">
          <Textdivcomp
            btnimg={VideoIcon}
            btntext={"More Tutorial"}
            Heading={"Get certificates"}
            colors={"black"}
            className={"Cirtificate-txt-card"}
          />
        </div>
      </div>
    </div>
  );
};
export default OurServices;
const styles = {
  ContentsDiv: {
    flexWrap: "wrap",
    display: "flex",
    width: "100%",
    minHeight: 600,
    alignItems: "center",
    justifyContent: "space-around",
  },
  ContentsDiv2: {
    flexWrap: "wrap",
    display: "flex",
    width: "100%",

    alignItems: "start",
    justifyContent: "space-around",
  },
  Text_div: { display: "flex", flexDirection: "column", maxWidth: 400 },
  Heading: {
    fontFamily: "Poppins",
    fontSize: 17,
    margin: 0,
  },
  subHeading: { fontSize: 40, fontWeight: "bold", margin: 0 },
  BookShapDiv: {
    display: "flex",
    flexWrap: "wrap",
    top: 120,
    position: "relative",
  },
};
