import React from "react";
import "./index.css";
import Square from "../../../assets/images/SquareIcon.svg";
import Airbnb from "../.././../assets/images/airbnb.svg";
import Facebook from "../.././../assets/images/FacebookIcon.svg";
import AmazoneIcon from "../.././../assets/images/amazoneIcon.png";
import GoogleIcon from "../.././../assets/images/GoogleIcon.png";
import ayanPic from "../../../assets/images/ayan.png"
import { FeatureCoursesWraper } from '../../../component'
import { Css, Firebase, Html, Javascript,React2, } from "../../../assets";
import allRoute from "../../../utils/constants";

export let reactdata = [
  {
    videoId: "p6MbmwR1dtQ",
    time: "22:42",
    icon: React2,
    heading: "React JS - React Tutorial (1) React Hooks useState",
    description: "Learn how to use the useState hook in React for managing state in functional components.",
  },
  {
    videoId: "40QyMB0R3x8",
    time: "47:38",
    icon: React2,
    heading: "React JS - React Tutorial (2) React Hooks useEffect",
    description: "Explore the useEffect hook in React for performing side effects in functional components.",
  },
  {
    videoId: "4sQPrJcrVSQ",
    time: "23:45",
    icon: React2,
    heading: "ReactJS - React Tutorial (3) Array Map Method",
    description: "Discover how to use the map method to iterate over arrays in React.",
  },
  {
    videoId: "3Z-QTKjhksE",
    time: "26:18",
    icon: React2,
    heading: "React JS Component & methods | React Tutorial (4)",
    description: "Learn about React components and various methods associated with them.",
  },
  {
    videoId: "-bnbVLl2hM8",
    time: "13:21",
    icon: React2,
    heading: "React JS Conditional Rendering | React Tutorial (5)",
    description: "Master conditional rendering techniques in React for rendering components based on conditions.",
  },
  {
    videoId: "0ezV_kJ2Jgs",
    time: "17:14",
    icon: React2,
    heading: "Benefit of React | Npm Packages | React Tutorial (6)",
    description: "Explore the benefits of React and npm packages in this React Tutorial",
  },
];

export default function Whoisbehind2() {

  
  let firebasedata = [
    {
      videoId: "yJUEVTrUcyk",
      time: "47:56",
      icon: Firebase,
      heading: "Introducing Firebase Authentication",
      description: "Learn about the features and benefits of Firebase Authentication.",
    },
    {
      videoId: "UMKc5-nAALA",
      time: "47:38",
      icon: Firebase,
      heading: "How to Store Files on Firebase Firestore",
      description: "Discover how to upload and store files using Firebase Firestore.",
    },
    {
      videoId: "mGc8FWSMY38",
      time: "23:45",
      icon: Firebase,
      heading: "Firebase Hosting with ReactJS and HTML",
      description: "Explore how to deploy a ReactJS and HTML application to Firebase Hosting.",
    },
  ];
  
  
  const contents = [
    { name: "Square", icon: Square },
    { name: "Facebook", icon: Facebook },
    { name: "Air bnb", icon: Airbnb },
    { name: "Google", icon: GoogleIcon },
    { name: "Amazone", icon: AmazoneIcon },
  ];
  return (
    <div className="WhoIsBehind2">
      {/* <div className="contributerDiv">
        {contents.map((val) => (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap:"wrap",
              margin: 5,
            }}
          >
            {val.name!=="Air bnb"?<img src={val.icon} style={{ height: 18, width: 18, margin: 0 }} />:null}
            <p
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "black",
                margin: 0,
              }}
            >
              {val.name}
            </p>
          </div>
        ))}
       
      </div> */}
      <div style={{zIndex:1}} >
          <p style={{fontSize:38,fontWeight:"500",margin:0,textAlign:"center"}}>WHO’S BEHIND</p>
          <p style={{fontSize:40,fontWeight:"bold",margin:0,textAlign:"center"}}>Meet the instructors</p>
        </div>

        <div className='AboutUs1'>
        <FeatureCoursesWraper data_aos="fade-right" pic={ayanPic} isinstructor={true} colors={"#FFB84F"} data={allRoute.react} Heading={"React Tutorials"} Discription={"Master React, a JavaScript library for building user interfaces."}
        
/>
        <FeatureCoursesWraper data_aos="fade-left" pic={ayanPic} isinstructor={true} colors={"#E33830"} reverse={"row-reverse"} data={allRoute.firebase} Heading={"Firebase Tutorials"} Discription={"Harness the power of Firebase for developing web and mobile applications."}/>
      </div>
       
    </div>
  );
}
