import React from 'react'
import { AboutUs, ContactUs, Home, OurServices, Portofolio } from '../screens'
import Subscription from '../screens/Subscription/Subscription'
import Whoisbehind from '../screens/Whoisbehind/Whoisbehind'
import Whoisbehind2 from '../screens/Whoisbehind2/Whoisbehind2'
import WhoIsBehind3 from '../screens/whoisbehind3/WhoIsBehind3'
import "./index.css"
import ProfileDiv from '../screens/Whoisbehind/ProfileDiv'
import Footer from '../screens/Footer'
import homeImg from '../../assets/images/home_wave.svg'
import behindImg from '../../assets/images/yellowgradient.svg'
const Dashboard = () => {
    return <>
        <div className='container-fluid mainConttainer1'>
            {/* <div className='bgImg1' /> */}
            <img src={homeImg} className='bgImg1' />
            <div className="container mainGgImg1">
                <Home />
                <AboutUs />
            </div>
        </div>

        {/* <div className='container-fluid mainConttainer2'>
            <div className='bgImg2' />
            <div className="container mainGgImg2">
                <AboutUs />
            </div>
        </div> */}

        <div className='container-fluid mainConttainer3'>
            <div className='bgImg3' />
            <div className="container mainGgImg3">
                <OurServices />
            </div>
        </div>


        <div className='container-fluid mainConttainer4'>
            {/* <img src={behindImg} className='bgImg4' /> */}
            <div className="container mainGgImg4">
                <Whoisbehind />
            </div>
        </div>
        <div className='container-fluid mainConttainer5'>
            <img src={behindImg} className='bgImg5' />
            <div className="container mainGgImg4">
                <Whoisbehind2 />
                {/* <br/>
                <br/>
                <br/> */}
            </div>
        </div>
        {/* <div className='container-fluid mainConttainer6'>
            <div className='bgImg6' />
            <div className="container mainGgImg6">
                <WhoIsBehind3 />
            </div>
        </div> */}
        <div className='container-fluid mainConttainer7'>
            <div className='bgImg7' />
            <div className="container mainGgImg7">
                <Subscription />
            </div>
        </div>
        <div className='container-fluid mainConttainer4'>
            <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                className='bgImg8' />
            <div className="container mainGgImg4">
                <Footer />
            </div>
        </div>

    </>
}

export default Dashboard
