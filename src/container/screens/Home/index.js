import Navbar from '../../Navigation'
import { Bg1, Bg2, Bg3, RightArrow, svgCard } from '../../../assets'
import './index.css'
import ReactText from '../../../component/React'
import ReactNativeText from '../../../component/ReactNative'
import JavaScriptText from '../../../component/ReactNative'
import React, { useEffect, useRef } from 'react';
import PurchaseButton from '../../../component/Button';
import { keyframes, styled } from 'styled-components';
import { H1, MediumText } from '../../../component/styles/Text';

const Home = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const cardElement = cardRef.current;

    let timeoutId;

    const handleMouseEnter = () => {
      clearTimeout(timeoutId);
      cardElement.classList.add('hovered');
    };

    const handleMouseLeave = () => {
      timeoutId = setTimeout(() => {
        cardElement.classList.remove('hovered');
      }, 3000);
    };

    cardElement.addEventListener('mouseenter', handleMouseEnter);
    cardElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timeoutId);
      cardElement.removeEventListener('mouseenter', handleMouseEnter);
      cardElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  return (
    <div className='body1' >
      <Navbar />
      <div className="body">
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="Content">
          <TextWrapper>
            <Title>Learn<br />and Code <ReactText /> Apps</Title>
            <Description className='text-with-shadow'>Don't skip design. Learn design and code, by building real apps with React and React Native. Complete courses about the best tools.</Description>
            <button className="btn">
              <img src={RightArrow} alt="NO Image" className='RightArrow' />
              <p className="btnText text-with-shadow">Get Started</p>
            </button>
          </TextWrapper>
        </div>
        {/* <div className="Content">
          <p className="p1" id="id1">
            <span className="text-with-shadow">Become The Best</span>
          </p>
          <TextAnimation />
          <p className="p3 text-with-shadow">Developer</p>
          <div style={{width:360}}>
            <p className="p4" id="id1">
              <span className="text-with-shadow">Don't skip design. Learn design and code, by building real apps with React and React Native. Complete courses about the best tools.</span>
            </p>
          </div>

          <button className="btn">
            <img src={RightArrow} alt="NO Image" className='RightArrow' />
            <p className="btnText text-with-shadow">Get Started</p>
          </button>
        </div> */}

        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="card-div">
          <div className="card-hover-controll" ref={cardRef}>
            <div className="cards2div">
              <img src={svgCard} className="TOP-bg2" />
              <img src={svgCard} className="TOP-bg3" />
            </div>
            <img src={Bg1} className="bg1" />
            <div className="cards2div">
              <img src={Bg2} className="bg2" />
              <img src={Bg3} className="bg3" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home



const animation = keyframes`
    0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
    30% { opacity: 0.5; transform: translateY(-10px); filter: blur(10px); }
    100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`;

const Wrapper = styled.div`
    overflow: hidden;
`;

const ContentWrapper = styled.div`
    max-width: 1234px;
    margin: 0 auto;
    padding: 200px 30px;
    display: grid;
    grid-template-columns: 360px auto;

    @media (max-width: 450px) {
        grid-template-columns: auto;
        gap: 60px;
        padding: 150px 20px 250px;
    }
`;

const TextWrapper = styled.div`
    max-width: 360px;
    display: grid;
    gap: 30px;
    color:#F2F5FF;
    
    > * {
        opacity: 0;
        animation: ${animation} 1s forwards;

        :nth-child(1) {
            animation-delay: 0s;
        }
        :nth-child(2) {
            animation-delay: 0.2s;
        }
        :nth-child(3) {
            animation-delay: 0.4s;
        }
    }
`;
const Title = styled(H1)`
    background: linear-gradient(180deg, #46AEFE 0%, #F2F5FF 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    span {
        background: linear-gradient(180deg, #FFD7FF 0%, #FFB6FF 100%);
        background-clip: text;
        -webkit-background-clip: text;
    }
    .ooo {
      color red;
    }

    @media (max-width: 768px) {
        font-size: 48px;
    }
`;
const Description = styled(MediumText)``;