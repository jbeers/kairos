import * as React from "react"
import { Slider } from '../components';
import { BasicLayout } from '../layouts';
import { Link } from 'gatsby';
import './index.css';

const sliderImages = [
  'https://picsum.photos/seed/picsum1/200/300',
  'https://picsum.photos/seed/something/200/300',
  'https://picsum.photos/seed/test/200/300',
  'https://picsum.photos/seed/another/200/300',
  'https://picsum.photos/seed/picsum5/200/300'
];

// markup
const IndexPage = () => {
  return <BasicLayout>
      <div className ="hero-slider">
        <Slider images={sliderImages } />
      </div>
      <div className="main-tiles">
        <Link to="/events" className="main-tiles__tile">Upcoming Events</Link>
        <Link to="/welcome" className="main-tiles__tile">Are you new? Welcome! Let us introduce ourselves.</Link>
        <Link to="/prayer" className="main-tiles__tile">Request Prayer</Link>
        <Link to="/planningcenter" className="main-tiles__tile">Planning Center</Link>
        <Link to="/give" className="main-tiles__tile">Give</Link>
        <Link to="/ministries" className="main-tiles__tile">Ministries</Link>
        <Link to="/media" className="main-tiles__tile">Media</Link>
      </div>
  </BasicLayout>
}

export default IndexPage
