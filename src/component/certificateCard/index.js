import React from 'react';
import './index.css'
import { Html, Css, Javascript, React2 } from '../../assets';
function CertificateCard() {
  return (

    <div
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000" className="cardsParent cards" >
      <div className="card-visibel card4">
        <div>
          <div className="distanceDiv">
            <p className="fontStyle">React</p>
            <p className="bgAZAt">Certificate</p>
          </div>
          <div className="bottomStyle">
            <div style={{ width: "60px", height: "4px", opacity: "0.3" }} className="Line1"></div>
            <div style={{ width: "90px", height: "4px", opacity: "0.3" }} className="Line2"></div>
            <div style={{ width: "80px", height: "4px", opacity: "0.3" }} className="Line3"></div>
            <div style={{ width: "120px", height: "6px", opacity: "0.4" }} className="Line4"></div>
          </div>
        </div>
        <div className="lazyload-wrapper" style={{ height: 50, width: 50, borderRadius: 100, overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }}>
          <img src={React2} />
        </div>
      </div>
      <div className="card-visibel card3">
        <div className="CertificateCard__TextWrapper-sc-14gv34s-1 eyUzlA">
          <div className="distanceDiv">
            <p className="fontStyle">Figma</p>
            <p className="bgAZAt">Certificate</p>
          </div>
          <div className="bottomStyle">
            <div style={{ width: "60px", height: "4px", opacity: "0.3" }} className="Line1"></div>
            <div style={{ width: "90px", height: "4px", opacity: "0.3" }} className="Line2"></div>
            <div style={{ width: "80px", height: "4px", opacity: "0.3" }} className="Line3"></div>
            <div style={{ width: "120px", height: "6px", opacity: "0.4" }} className="Line4"></div>
          </div>
        </div>
        <div className="lazyload-wrapper" style={{ height: 50, width: 50, borderRadius: 100, overflow: 'hidden' }}>
          <img src={Css} />
        </div>
      </div>
      <div className="card-visibel card2">
        <div>
          <div className="distanceDiv">
            <p className="fontStyle">javascript</p>
            <p className="bgAZAt">Certificate</p>
          </div>
          <div className="bottomStyle">
            <div style={{ width: "60px", height: "4px", opacity: "0.3" }} className="Line1"></div>
            <div style={{ width: "90px", height: "4px", opacity: "0.3" }} className="Line2"></div>
            <div style={{ width: "80px", height: "4px", opacity: "0.3" }} className="Line3"></div>
            <div style={{ width: "120px", height: "6px", opacity: "0.4" }} className="Line4"></div>
          </div>
        </div>
        <div className="lazyload-wrapper" style={{ height: 50, width: 50, borderRadius: 100, overflow: 'hidden' }}>
          <img src={Javascript} />

        </div>
      </div>
      <div className="card-visibel card1">
        <div>
          <div className="distanceDiv">
            <p className="fontStyle">Html</p>
            <p className="bgAZAt">Certificate</p>
          </div>
          <div className="bottomStyle">
            <div style={{ width: "60px", height: "4px", opacity: "0.3" }} className="Line1"></div>
            <div style={{ width: "90px", height: "4px", opacity: "0.3" }} className="Line2"></div>
            <div style={{ width: "80px", height: "4px", opacity: "0.3" }} className="Line3"></div>
            <div style={{ width: "120px", height: "6px", opacity: "0.4" }} className="Line4"></div>
          </div>
        </div>
        <div className="lazyload-wrapper" style={{ height: 50, width: 50, borderRadius: 100, overflow: 'hidden' }}>
          <img src={Html} />
        </div>
      </div>
    </div>

  );
}

export default CertificateCard;
