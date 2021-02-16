import * as React from "react"
import './MinistryTile.css';
import { Link } from 'gatsby';


export const MinistryTile = ({ children, image, name }) => {
    return <div className="ministry-tile">
        <Link to={'/ministries/' + name}>
            <div className="ministry-tile__img-wrapper">
                <span className="ministry-tile__name">{name}</span>
                <img src={image} alt={name} />
            </div>
            <span>{children}</span>
        </Link>
    </div>
}
