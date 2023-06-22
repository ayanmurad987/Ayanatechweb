import React from 'react'
import { Button } from '../../../component'
import "./textdivcomp.css"
export default function Textdivcomp({ btnimg, btntext, Heading, top, colors, left, data_aos }) {
  console.log("color===========>", colors)
  const styles = {
    Heading: {
      fontFamily: "Arial Black",
      fontSize: "1rem",
      margin: 0,
      color: colors

    },
    subHeading: {
      fontSize: "2rem", fontWeight: "bold", margin: 0, fontFamily: "Arial Black", opacity: 2, color: colors
    },
  }
  return (
    <div
      data-aos={data_aos}
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      className='TextDivComp' style={{ top: top ? top : 0, left: left ? left : 0 }} >

      <p style={styles.subHeading}>{Heading}</p>
      <p style={{ fontSize: "0.9rem", color: colors, fontFamily: "revert-layer", fontWeight: "50", opacity: 0.6 }}>
        Once you’ve completed the courses, learn from our quick design and
        code tutorials to strengthen your knowledge
      </p>
      <Button img={btnimg} top={20} btntext={btntext} />
    </div>
  )

}
