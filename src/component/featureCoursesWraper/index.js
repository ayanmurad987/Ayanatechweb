import React from "react";
import "./index.css";
import CoursCard from "../coursCard";
import { Html, Css, Javascript } from "../../assets";
import { useNavigate } from "react-router-dom";
const FeatureCoursesWraper = ({
  pic,
  colors,
  reverse,
  data,
  Heading,
  Discription,
  isinstructor,
  data_aos,
}) => {
  let navigation = useNavigate();

  const Handle_data = (data, index) => {
    console.log("I am data", data);

    navigation(`/${data.url}`);

    setTimeout(() => {
      const element = document.getElementById("Main_VedioIframeDiv");
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);

  };

  return (
    <div
      data-aos={data_aos}
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="FeatureCourseWraper"
      style={{ flexDirection: reverse ? reverse : "row" }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p
          style={{
            margin: 0,
            fontSize: 13,
            color: "black",
            opacity: 0.6,
            fontWeight: "600",
          }}
        >
          {!isinstructor ? "FEATURED COURSE" : "ADVANCE COURSE"}
        </p>
        <div
          className="data-div"
          style={{
            display: "flex",
            flexDirection: "column",
            overflowY: "scroll",
          }}
        >
          {data?.map((datas, index) => (
            <div

              onClick={() => {
                Handle_data(datas, index);
              }}
              className="number-list-container"
              style={{
                cursor: "pointer",
                fontSize: "0.8rem",
                flexDirection: "row",
                display: "flex",
                padding: 10,
                justifyContent: "space-between",
                margin: 3,
                gap: 2,
                alignItems: "start",
              }}
              key={index}
            >
              <img src={datas.icon} className="data-icon-image" />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p
                  className="num-heading"
                  style={{
                    margin: 0,
                    fontFamily: "Arial Black",
                  }}
                >
                  {datas.heading}
                </p>
                <p
                  className="num-discription"
                  style={{
                    margin: 0,
                    fontFamily: "revert-layer",
                  }}
                >
                  {datas.description}
                </p>
              </div>
              <h6
                style={{
                  padding: 3,
                  borderRadius: 3,
                  backgroundColor: "grey",
                  margin: 0,
                  color: "white",
                  fontFamily: "Arial Black",
                }}
              >
                {datas?.time}
              </h6>
            </div>
          ))}
        </div>
      </div>
      <div>
        <CoursCard
          isinstructor={isinstructor}
          bottom={14}
          left={reverse ? -13 : 13}
          pic={pic ? pic : null}
          colors={colors}
          Heading={Heading}
          Discription={Discription}
        />
      </div>
    </div>
  );
};

export default FeatureCoursesWraper;
