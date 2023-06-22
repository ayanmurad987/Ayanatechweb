import React from "react";
import "./index.css";
// import swiftlogo from "../../assets/swiftui-logo.svg";
// import fileicon from "../../assets/fileicon.svg";
// import devicon from "../../assets/dev-icon.svg";

const BookShape = ({name,description,feature1,feature2,icons}) => {
  let books = [
    {
      name: "SWIFT UI Handbook",
      description: "A comprehensive series of tutorials covering xcodes Swift UI....",
      feature1: "93 free tutorials",
      feature2: "Videos, PDF, Files"
    },
  ];

  return (
        <div className="Book-card-parent-div">
          <div className="book-shape-back"></div>
          <div className="book-shape">
            <div style={{ display: "flex", width: "100%", justifyContent: "space-evenly" }}>
              {icons?.map((Icon)=>(
                 <img src={Icon} style={{height:35,width:35,borderRadius:10}}/>
 ))}
              {/* <img src={swiftlogo} style={{ height: 30, width: 30, marginTop: 8, marginLeft: 4 }} /> */}
            </div>
            <p className="book-shape-Name">{name}</p>
            <p className="book-shape-description">{description}</p>
          
          </div>
        </div>
  );
}

export default BookShape;
