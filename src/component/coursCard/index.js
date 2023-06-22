import React from 'react';
import "./index.css";
// import coursescardimg from "../../assets/coursesCardImage.png";
import star from "../../assets/images/star.svg";
import swificon from "../../assets/images/swiftui-logo.svg";
import ayan from "../../assets/images/ayan.png"
const CoursCard = ({ bottom, left,pic,colors,Heading,Discription,isinstructor }) => {
  return (
    <div className='Courses_card_main' style={{left:left?left:0,bottom:bottom?bottom:0, }}>
      <div className='CoursesCard' style={{background:`linear-gradient(209.21deg, ${colors} 13.57%, rgb(0, 24, 85) 98.38%)`}} >
        {/* <img src={swificon} style={{ height: 20, width: 20, position: "absolute", top: 20, backgroundColor: "rgba(0, 0, 0, 0.2)", padding: 3, borderRadius: 10, left: 200 }}/> */}
        <div className='CoursesCardImg-div'>
          <img src={pic} className='Courses_card_img' />
          <div className='Course_Card_Icon' style={{ display: bottom?"flex":"none", flexDirection: "column",justifyContent:"space-around",alignItems:"center"}}>
          {!isinstructor?
          <> <img src={ayan} className='icon-div' id='icon_div' />
            <img src={pic} className='icon-div' />
            </>:null}
          </div>
        </div>
        <div style={{justifyContent:"center",display:"flex",flexDirection:"column",alignItems:"center"}}>
        <p className='Courses-card-Name'>{Heading}</p>
        <p className='Courses-card-discription'>{Discription}</p>
        </div>
        <img src={star} className='Star-img' />
      </div>
    </div>
  );
}

export default CoursCard;
