import * as React from "react"
import './MinistryTile.css';
import { Link } from 'gatsby';


export const MinistryTile = ({ children, image, name, slug, attribution }) => {
    return <div className="ministry-tile">
        <Link className="ministry-tile__link" to={'/ministries/' + slug}>
            <div className="ministry-tile__img-wrapper">
                <span className="ministry-tile__name">{name}</span>
                <img src={image} alt={name} data-attribution={attribution}/>
            </div>
            <span className="ministry-tile__text">{children}</span>
        </Link>
    </div>
}
