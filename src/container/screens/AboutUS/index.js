import React from 'react'
import './index.css'
import { Css, Es6, Firebase, GitHub, Html, Javascript, React2 } from '../../../assets'
import { CoursCard, FeatureCoursesWraper, ProfileCardComp } from '../../../component'
import ayanpic from "../../../assets/images/ayan.png"
import coursescard1 from "../../../assets/images/courses-cardimg1.png"
import coursescard2 from "../../../assets/images/courses-cardimg2.png"
import coursescard3 from "../../../assets/images/courses-cardimg3.png"
import allRoute from '../../../utils/constants'
const AboutUs = () => {
  let HtmlData = [
    {
      videoId: "dKxbrmmoNmA",
      time: "4:43",
      icon: Html,
      heading: "HTML Introduction Class 01",
      description: "Learn the fundamentals of HTML in this introductory class.",
    },
    {
      videoId: "vV1iLWz7wcc",
      time: "30:02",
      icon: Html,
      heading: "HTML Structure Class 02",
      description: "Explore the structure and layout components of HTML.",
    },
    {
      videoId: "RYq8D4CPCrI",
      time: "10:04",
      icon: Html,
      heading: "Basic Tags of HTML 05 Class 03",
      description: "Understand the essential tags used in HTML for building web content.",
    },
    {
      videoId: "5YOCJisdX_0",
      time: "17:50",
      icon: Html,
      heading: "HTML Tutorial: Forms & Input Tags class 04",
      description: "Discover how to create forms and input tags in HTML.",
    },
    {
      videoId: "aBS21mogYsg",
      time: "19:04",
      icon: Html,
      heading: "HTML Tutorial: Anchor tag | Class 05",
      description: "Master the usage of anchor tags for creating hyperlinks in HTML.",
    },
    {
      videoId: "OZFpsy5NxR8",
      time: "06:43",
      icon: Html,
      heading: "HTML Tutorial: Img tag | Class 06",
      description: "Learn how to insert and manipulate images using the img tag in HTML.",
    },
    {
      videoId: "qmO8L5Y_4aQ",
      time: "07:54",
      icon: Html,
      heading: "Iframe tag attribute - HTML 5 tutorial | Class 07",
      description: "Explore the iframe tag and its attributes for embedding content in HTML.",
    },
  ];

  let CssData = [
    {
      videoId: "DBsLXTENmuQ",
      time: "12:24",
      icon: Css,
      heading: "What is CSS | Class(1)",
      description: "Gain an understanding of what CSS (Cascading Style Sheets) is in this introductory class.",
    },
    {
      videoId: "DUxqs7BbjLA",
      time: "10:24",
      icon: Css,
      heading: "CSS text Property tutorial | Class(2)",
      description: "Learn how to use the text property in CSS to style text content.",
    },
    {
      videoId: "cbTkjXhfZMw",
      time: "19:39",
      icon: Css,
      heading: "Div tag in HTML with CSS property | (3)",
      description: "Explore how to apply CSS properties to the div tag in HTML for enhanced styling.",
    },
    {
      videoId: "L-C14n6J_kM",
      time: "15:25",
      icon: Css,
      heading: "Display Block and Display Inline Class(4)",
      description: "Understand the difference between the display block and display inline CSS properties.",
    },
    {
      videoId: "mlIEe2mB1Ew",
      time: "22:23",
      icon: Css,
      heading: "CSS Position Property | relative & absolute (5)",
      description: "Master the position property in CSS and learn how to use relative and absolute positioning.",
    },
    {
      videoId: "4EjJAY6ADJo",
      time: "18:42",
      icon: Css,
      heading: "CSS Overflow Property Class (6)",
      description: "Discover how to control overflowing content using the CSS overflow property.",
    },
    {
      videoId: "nfEpcB-Cwgo",
      time: "13:07",
      icon: Css,
      heading: "CSS Flexbox tutorial Class (7)",
      description: "Learn how to use CSS Flexbox to create flexible and responsive layouts.",
    },
    {
      videoId: "Y1fPafLdM8s",
      time: "30:18",
      icon: Css,
      heading: "Media Queries Explained",
      description: "Get an explanation of media queries and their role in creating responsive web designs.",
    },
  ];


  return (
    <div className='AboutUs' id='aboutus'>
      <div className='AboutUss'>
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          className='contentText'>
          <p className="text2">Learn the best tools and platforms</p>
          <p className="text3">We focus on industry leading platforms so that you can be prepared for your next job. Then we teach all we can about them.</p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          className='contentItem'>
          <div className='course_Div'><img src={Html} className='LogoStyles' /></div>
          <div className='course_Div'><img src={Css} className='LogoStyles' /></div>
          <div className='course_Div'><img src={Javascript} className='LogoStyles' /></div>
          <div className='course_Div'><img src={React2} className='LogoStyles' /></div>
          <div className='course_Div'><img src={Es6} className='LogoStyles' /></div>
          <div className='course_Div'><img src={GitHub} className='LogoStyles' /></div>
          <div className='course_Div'><img src={Firebase} className='LogoStyles' /></div>
        </div>
      </div>
      <div className='AboutUs1'>
        <FeatureCoursesWraper data_aos="fade-right" pic={Html} colors={"#FF651E"} data={allRoute.html} Heading={"Html Tutorials"} Discription={"Learn the basics of HTML, the language used to create webpages."} />
        <FeatureCoursesWraper data_aos="fade-left" pic={Css} colors={"#00CFFD"} data={allRoute.css} Heading={"Css Tutorials"} Discription={" Discover how to style and design webpages using CSS."} />
      </div>
      {/* <div className='AboutUs2'>
      <CoursCard pic={coursescard1} colors={"#D9BFF7"}/>
      <CoursCard pic={coursescard2} colors={"#176AB1"}/>
      <CoursCard pic={coursescard3} colors={"#7A2294"}/>
      <CoursCard pic={coursescard3} colors={"brown"}/>
      </div> */}
    </div>
  )
}

export default AboutUs