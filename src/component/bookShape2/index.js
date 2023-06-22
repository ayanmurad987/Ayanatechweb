import React from "react";
import "./index.css";
import Button from "../button/index";
// import swiftlogo from "../../assets/swiftui-logo.svg";
// import fileicon from "../../assets/fileicon.svg";
// import devicon from "../../assets/dev-icon.svg";
// import Button from "../customButtonComp/Button";
import SignupIcon from "../../assets/images/Signup.svg"
import Subscribe from "../../assets/images/Subscribe.svg"
const BookShape2 = ({ data_aos }) => {
  let books = [
    {
      id: 1,
      name: "DURATION",
      price: "2",
      description: "Trial",
      Course_description: "HTML,CSS,JAVASCRIPT",
      feature: [
        "Free courses",
        "5 Premium Videos",
        "Notify me, Favorite"
      ]
    },
    {
      id: 2,
      name: "DURATION",
      price: "6",
      description: "per month billed monthly",
      Course_description: "React+React-native",
      feature: [
        "All courses and videos",
        "Source files, ePub",
        "Certificates, Tests",
        "Premium tutorials",
        "UI, icons, illustrations",
        "Commercial use"
      ]
    },
    {
      id: 3,
      name: "DURATION",
      Course_description: "JAVASCRIPT+React",
      price: "3",
      description: "per member, per month, billed monthly",
      feature: [
        "23 users",
        "Manage subscriptions",
        "Team progress",
      ]
    }
  ];

  return (
    <div
      className="book-shape-2-div"
    >

      {books.map((val, index) => (
        <div
          data-aos={data_aos}
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"

          className="Book-card-2-parent-div">
          <div className={val.id === 2 ? "book-shape-2-back-pro" : val.id === 1 ? "book-shape-2-back" : "book-shape-2-back-3rd"}></div>
          <div className={val.id === 2 ? "book-shape-2-pro" : val.id === 3 ? "book-shape-2-3rd" : "book-shape-2"}>
            <div>
              <p className="book-shape-2-description" style={{ textAlign: "center", fontFamily: "Impact, 'Arial Narrow Bold', sans-serif" }}>{val.name}</p>
              <p className="book-shape-2-Name" style={{ fontSize: "1.8rem" }}>{val.price} months</p>
              <p className="book-shape-2-description" style={{ textAlign: "center", fontFamily: "monospace" }}>{val.Course_description}</p>
            </div>
            <div style={{ alignSelf: "center" }}>
              {val.feature.map((val) => (
                <p className="book-shape-2-description" style={{ maxWidth: "100%", marginBottom: 10, textAlign: "start", width: "100%", fontWeight: "700" }}>✓{val}</p>
              ))}
            </div>
            <Button top={9} btntext={"Subscribe"} img={Subscribe} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookShape2;
