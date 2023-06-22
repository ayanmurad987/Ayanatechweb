import React from "react";
import "./index.css";
import { CallIcon, EmailIcon, FBLogo, GitHubLogo, IndeedLogo, LocationIcon, Logo2, TwitterLogo } from "../../../assets";

export default function Footer() {
    return (
        <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="Footer" id="footer">
            <div className="footerEmptySection"></div>
            <div className="footerSection1">
                <div className="footerSection1Child1">
                    {/* <div style={{ height: 120, width: 140, display:'flex', alignItems:'center', justifyContent:'center' }}>
                        <div className="footerlogo">
                            <img src={Logo2} alt="NO Imag" className="Logo2" />
                        </div>
                    </div> */}
                    <div >
                        <p style={{ color: '#FFF', textAlign: 'center' }}>
                            We are an all-rounder Mobility and Digital Agency which exists to transform your organization with our team of experts and years of experience.
                        </p>
                    </div>
                    <div className="linkedIcons">
                        <div className="icons ">
                            <img src={FBLogo} alt="NO Imag" className="Logo2" />
                        </div>
                        <div className="icons">
                            <img src={TwitterLogo} alt="NO Imag" className="Logo2" />
                        </div>
                        <div className="icons">
                            <img src={IndeedLogo} alt="NO Imag" className="Logo2" />
                        </div>
                        <div className="icons">
                            <img src={GitHubLogo} alt="NO Imag" className="Logo2" />
                        </div>
                    </div>
                </div>
                <div className="footerSection1Child2">
                    <h1 className="h1">EXPLORE</h1>
                    <ul className="ul">
                        <li className="li">Home</li>
                        <li className="li">About Us</li>
                        <li className="li">Our Services</li>
                        <li className="li">Packages</li>
                        <li className="li">Portfolio</li>
                        <li className="li">Reviews</li>
                        <li className="li">Contact Us</li>
                    </ul>
                </div>
                <div className="footerSection1Child3">
                    <div className="footerSection1Child2">
                        <h1 className="h1 ">CONTACT</h1>
                        <div className="location">
                            <div className="locationIcon">
                                <img src={LocationIcon} alt="NO Imag" className="Logo3" />
                            </div>
                            <p style={{ fontSize: 14 }}>
                                Plot 416, Sector 14-A Sector 14 A Orangi Town, Karachi
                            </p>
                        </div>
                        <div className="location">
                            <div className="locationIcon" style={{ width: 51 }}>
                                <img src={CallIcon} alt="NO Imag" className="Logo3" />
                            </div>
                            <p  >
                                +92 311 0241 969
                            </p>
                        </div>
                        <div className="location">
                            <div className="locationIcon" style={{ width: 51 }}>
                                <img src={CallIcon} alt="NO Imag" className="Logo3" />
                            </div>
                            <p  >
                                +92 311 0241 969
                            </p>
                        </div>

                        <div className="location">
                            <div className="locationIcon" style={{ width: 51 }}>
                                <img src={EmailIcon} alt="NO Imag" className="Logo3 " />
                            </div>
                            <p style={{ fontSize: 14 }}>
                                ayanmuradahmed@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
                {/* <div className="footerSection1Child4">
                    <h1 className="h1">NEWS LETTER</h1>
                    <div className="inputFiled">
                        <div className="input">
                            <input placeholder="Email Address" />
                        </div>
                        <div className="InputIcon"></div>
                    </div>
                    <p style={{fontSize:17, color:'#FFF' }}>Sign up for our latest news & articles. We won’t give you spam mails. </p>
                </div> */}
            </div>
            <div className="footerSection2">
                <p>© Copyright 2023 by Ayan Murad</p>
            </div>
        </div>

    );
}
