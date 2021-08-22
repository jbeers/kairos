import * as React from "react"
import { Slider } from '../components';
import { BasicLayout } from '../layouts';
import { Link } from 'gatsby';
import './index.css';

import logo from '../images/slider/logo.png';

// const sliderImages = [
//   'https://picsum.photos/seed/picsum1/984/400',
//   'https://picsum.photos/seed/something/984/400',
//   'https://picsum.photos/seed/test/984/400',
//   'https://picsum.photos/seed/another/984/400',
//   'https://picsum.photos/seed/picsum5/984/400'
// ];


// markup
const IndexPage = () => {
  return <BasicLayout>
      <div className ="hero-slider">
      <img src={logo} alt="logo" />
        {/* <Slider images={sliderImages } /> */}
      </div>
      <div className="main-tiles">
        <Link to="https://kairos-kc.churchcenter.com/calendar" className="main-tiles__tile">Upcoming Events</Link>
        <Link to="/welcome" className="main-tiles__tile">Are you new? Welcome! Let us introduce ourselves.</Link>
        <Link to="/prayer" className="main-tiles__tile">Request Prayer</Link>
      <Link to="https://kairosmerch.com/" className="main-tiles__tile">Kairos Merch</Link>
        <Link to="/give" className="main-tiles__tile">Give</Link>
        <Link to="/ministries" className="main-tiles__tile">Ministries</Link>
        <Link to="/media" className="main-tiles__tile">Media</Link>
      </div>
      <div className = { 'main_blurb-wrapper' }>
        <div className={'main_blurb-title'}>Kairos Church is located in south Kansas City</div>
        <p className={'main_blurb-text'}>
          We exist to wholeheartedly pursue deep relationship with God the Father
          through the Spirit of His Son Jesus Christ and to strengthen
          others as they come into the identity God has called them to.
        </p>
      <Link className={'main_blurb-link'} to='/about'>Read Our Story</Link>
      </div>
  </BasicLayout>
}

export default IndexPage
