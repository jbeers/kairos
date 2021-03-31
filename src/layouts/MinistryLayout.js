import * as React from "react"
import { Link } from 'gatsby';
import { PageLayout } from './PageLayout';
import './MinistryLayout.css';

export const MinistryLayout = ({ name, description, content, mainImage, galleryImages = [] }) => {
    return <PageLayout>
        <Link to="/ministries">{"<"} Back to Ministries</Link>
        <div className= 'ministry-page__content'>
            {/* <img className='ministry-page__main-image' src={mainImage} alt="ministry logo" /> */}
            <div className = "ministry-page__title-content">
                <h1 className= "ministry-page__title" >{name}</h1>
                {description && <span className= "ministry-page__description">{description}</span>}
            </div>
            {content}
        </div>
        {/* {
            !galleryImages.length ? null
                : <div className="ministry-page__gallery">
                    {galleryImages.map((galleryImage, i) => <div key={i}><img src={galleryImage.src || galleryImage} alt={galleryImage.alt} /></div> )}
                </div>
        } */}
    </PageLayout>
}
