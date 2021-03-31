import * as React from "react"
import { PageLayout } from '../layouts';
import { Link } from 'gatsby';

const IndexPage = () => {
    return <PageLayout>
        <h1>Our Media</h1>


        <h3>Video Content</h3>
        <ul>
            <li>Live-stream <Link to="https://kairoskc.online.church/" >kairoskc.online.church</Link></li>
            <li>Vimeo <Link to="https://vimeo.com/kairoskc" >https://vimeo.com/kairoskc</Link></li>
        </ul>

        <h3>Social Media</h3>
        <ul>
            <li>Facebook <Link to="https://facebook.com/kairoskansascity">https://facebook.com/kairoskansascity</Link></li>
            <li>Spark & Fire <Link to="https://facebook.com/kairoschurchkids">https://facebook.com/kairoschurchkids</Link></li>
            <li>Beacon 	<Link to="https://facebook.com/beaconyouth">https://facebook.com/beaconyouth</Link></li>
            <li>Twitter 	<Link to="https://twitter.com/kairoskansascity">https://twitter.com/kairoskansascity</Link></li>
            <li>Instagram <Link to="https://instagrame.com/kairoskansascity">https://instagrame.com/kairoskansascity</Link></li>
        </ul>
        
    </PageLayout>
}

export default IndexPage
