import React from 'react';
import "./index.css";
// import courses from "../../assets/courses.svg";
const Button = ({ top, img,btntext }) => {
  return (
    <button className='Button-comp' style={{ marginTop: top ? top : 0, }}>
      <img src={img} style={{ height: 24, width: 24,margin:0 }} />
      <p className='btn-txt'>{btntext}</p>
    </button>
  );
}

export default Button;
