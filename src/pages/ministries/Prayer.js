import * as React from "react"
import { Link } from 'gatsby';
import { MinistryLayout } from '../../layouts';


const spark = 'https://picsum.photos/seed/picsum1/200/300';
const fire = 'https://picsum.photos/seed/something/200/300';
const beacon = 'https://picsum.photos/seed/picsum2/200/300';

const Content = () => {
    return <>
        <p>This ministry serves anyone who needs a community of believers to share their prayer needs with.</p>
        <p>We take time each week to review prayer requests and come before the Lord in prayer.</p>
        <p>All requests submitted to us are confidential and are not shared with anyone outside of our organization or within the body.</p>
        <p>If you would like to submit a prayer request please submit our <Link to="/prayer">prayer request form</Link></p>
    </>
}
// markup
const MinistriesPage = () => {
    return <MinistryLayout
        name="Prayer"
        description="Sharing our burdens in prayer"
        content={<Content />}
        mainImage={spark}
        galleryImages={[spark, fire, beacon, fire]}
    />
}

export default MinistriesPage
