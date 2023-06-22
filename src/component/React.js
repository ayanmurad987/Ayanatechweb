import React, { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"

export default function TextAnimation() {
  const [reactArray, set] = useState("React".split(""))
  useEffect(() => {
    let count = 0
    const interval = setInterval(() => {
      count += 1
        if(count == 1) set("Native".split(""))
        if(count == 2) {
          set("React ".split(""))
          count = 0
        }
    }, 7000)
    return () => clearInterval(interval)
  }, [])


  return <Wrapper>
    {reactArray.map((item, index) => (
      <span key={index}>{item}</span>
    ))}
  </Wrapper>
}
const animation = keyframes`
  0% { opacity: 0; transform: translateY(-100px) skewX(10deg) skewY(10deg) rotateZ(30deg); filter: blur(10px); }
  25% { opacity: 1; transform: translateY(0px) skewX(0deg) skewY(0deg) rotateZ(0deg); filter: blur(0px); }
  75% { opacity: 1; transform: translateY(0px) skewX(0deg) skewY(0deg) rotateZ(0deg); filter: blur(1px); }
  100% { opacity: 0; transform: translateY(-100px) skewX(10deg) skewY(10deg) rotateZ(30deg); filter: blur(10px); }
`

const Wrapper = styled.span`
  display: inline-block;

  span {
    color:#CD8FB4;
    font-size: 60px;
    opacity: 0;
    font-weight: bold;
    display: inline-block;
    animation-name: ${animation};
    animation-duration: 7s;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
  }
  span:nth-child(1) {
    animation-delay: 0.1s;
  }
  span:nth-child(2) {
    animation-delay: 0.2s;
  }
  span:nth-child(3) {
    animation-delay: 0.3s;
  }
  span:nth-child(4) {
    animation-delay: 0.4s;
  }
  span:nth-child(5) {
    animation-delay: 0.5s;
  }
  span:nth-child(6) {
    animation-delay: 0.6s;
  }
`