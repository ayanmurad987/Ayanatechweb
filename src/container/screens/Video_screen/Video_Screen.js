import React, { useEffect, useState } from "react";
import "./index.css";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { purple, deepOrange, blueGrey, brown } from "@mui/material/colors";
import ArrowIcon from "../../../assets/images/ArrowIcon.png";
import ArrowIconmobile from "../../../assets/images/round-arrow.png";
import allRoute from "../../../utils/constants";
import { AdminQuillEditor, QuillEditor } from "../../../utils/quill";
import Footer from "../Footer";
import Navbar from "../../Navigation";
import MenuIcon from "@mui/icons-material/Menu";
import { Html,Css,Firebase,React2 } from "../../../assets";
export default function Video_Screen() {
  const [videoindex, setvideoIndex] = useState(0);
  const [data, setData] = useState();
  const reverseData = data?.reverse();
  const [isVisible, setisVisible] = useState(false)
  const { id } = useParams();
  const routeName = id.split("-")[0];
  const icon=routeName=="html"?Html:routeName=="css"?Css:routeName=="firebase"?Firebase:routeName=="react"?React2:null
  const navigation = useNavigate();

  const toggleVisibility = () => {
    setisVisible(!isVisible);
  };

  useEffect(() => {
    handleCheckNavigation()
  }, []);

  const handleCheckNavigation = (paramRoute) => {
    console.log("🚀 ~ file: Video_Screen.js:24 ~ handleCheckNavigation ~ paramRoute:", paramRoute)

    const allData = allRoute[routeName];

    let isPageFound = false;
    if (allData) {
      allData.forEach((page, ind) => {
        if (page.url === (paramRoute || id)) {
          setvideoIndex(ind);
          isPageFound = true;
        }
      });

      if (isPageFound) return setData(allData);
    }

    navigation("/", { replace: true });
  }

  const handleSelect = (val) => {
    navigation("/" + val?.url, { replace: true })
    handleCheckNavigation(val?.url)
  }

  const toggleCourseVideo = () => { };
  const Righthandler = () => {
    navigation(`/${data[videoindex + 1].url}`, { replace: true });
    setvideoIndex(data?.length - 1 > videoindex ? videoindex + 1 : videoindex);
  };
  const Lefthandler = () => {
    setvideoIndex(videoindex - 1);
    navigation(`/${data[videoindex - 1]?.url}`, { replace: false });
  };

  if (!data) return <></>;

  return (
    <div
      id="Main_VedioIframeDiv"
      className="VedioIframDiv"
      style={{
        background: `linear-gradient(209.21deg, rgb(106, 27, 154) 13.57%, gray)`,
      }}
    >
      <div className="position-fixed-mobile">
        <div className="container">
          <Navbar />
        </div>
        <div className="Main_VedioIframeDiv">
          <img
            src={ArrowIcon}
            className="Video_arrow_left"
            style={{ opacity: videoindex == 0 ? 0.2 : 1 }}
            onClick={videoindex == 0 ? null : Lefthandler}
            aria-disabled
          />
          <iframe
            className="_Ifram"
            src={`https://www.youtube.com/embed/${data[videoindex].videoId}`}
            title={"Html Video"}
            allowFullScreen
          ></iframe>
          <img
            src={ArrowIcon}
            style={{ opacity: videoindex == data?.length - 1 ? 0.2 : 1 }}
            onClick={videoindex == data?.length - 1 ? null : Righthandler}
            className="Video_arrow_right"
          />
        </div>
      </div>
      <div className="video-fixed-margin">
        <div className="container">
          <p
            className="Video_Heading"
            style={{ textDecorationLine: "underline" }}
          >
            {data[videoindex]?.heading}
          </p>
          <p className="Video_Discription"> {data[videoindex]?.description}</p>
        </div>
        <div className="Blog-div">
          {/* {
        data[videoindex]?.blog?.map((val)=>(
          <div style={{backgroundColor:"red",width:"60%"}}>
            <h3>{val.headingOfBlog}</h3>
            <ul>
              {
                val.pointsOfThatHeading.map((val2)=>(
                  <li>{val2}</li>
                ))
              }
            </ul>
            {val.image?<img src={val.image}/>:null}
          </div>
        ))
      } */}
          <div className="Blog-div" style={{ position: "relative" }}>
            {data[videoindex]?.blog ? (
              <QuillEditor
                readOnly={true}
                value={data[videoindex]?.blog}
                sx={{ height: "fit-content", color: "white" }}
              />
            ) : null}
          </div>
          {/* <div className="Blog-div">
          <AdminQuillEditor
          
            // readOnly={true}
            onChange={(val) => {setBlog(val);console.log(val)}}
            value={blog}
            sx={{ height: "fit-content", color: "white"}}
          />
        </div> */}
        </div>
      </div>

      {/* =============Mobile arrows================ */}

      <div className="mobile-View-Arrows">
        <img
          src={ArrowIconmobile}
          className="Video_arrow_left arrowmobile"
          style={{ opacity: videoindex == 0 ? 0.2 : 1 }}
          onClick={videoindex == 0 ? null : Lefthandler}
        />
        <img
          src={ArrowIconmobile}
          style={{ opacity: videoindex == data?.length - 1 ? 0.2 : 1 }}
          onClick={videoindex == data?.length - 1 ? null : Righthandler}
          className="Video_arrow_right arrowmobile"
        />
      </div>

      {/* ============Videos List=================== */}
      <div onClick={toggleVisibility}>
        <img
          src={icon}
          style={{ height: 80, width: 80, alignSelf: "end" }}
        />
      </div>

      <div className="Videos-List-Div">
        <img
          src={icon}
          style={{ height: 80, width: 80, alignSelf: "end" }}
          onClick={toggleVisibility}
        />

        <div className={isVisible ? 'Videos-List-Div-Show' : 'conditionStyle'}>
          {reverseData?.map((val) => (
            <div
              key={val.id} // Make sure to provide a unique key for each mapped element
              style={styles.eachvideodiv}
              onClick={() => handleSelect(val)}
            >
              <p style={{ margin: 0, color: "white", padding: "0px", fontFamily: "Arial Blacked", fontSize: "0.8rem", textAlign: "center" }}>{val.heading}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container" id="footer2">
        <Footer />
      </div>
    </div>
  );
}
const styles = {
  eachvideodiv: {
    width: "90%",
    minHeight: 50,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    margin: 8,
    padding: 8,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
