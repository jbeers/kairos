import * as React from "react"
import { MinistryTile } from '../../components';
import { MinistryLayout } from '../../layouts';


const spark = 'https://picsum.photos/seed/picsum1/200/300';
const fire = 'https://picsum.photos/seed/something/200/300';
const beacon = 'https://picsum.photos/seed/picsum2/200/300';

const Content = () => {
    return <>
        <p>This ministry serves children up to 6th grade and and their families.</p>
		<p>In Fire, students attend large-group worship with parents then attend a discussion-based class that focuses on reading scripture together.</p>
		<p>We meet on Sunday mornings with occasional events outside of Sunday morning class </p>
		<p>To be served by this ministry, arrive during a Sunday morning service. First time families will answer a few questions to ensure we have information pertinent to teaching.</p>
		<p>We are open to volunteers! </p>
		<p>We require a background check. Once a background check is cleared, we have a few questions to help place you in a class that fits your preferences. We also encourage a shadowing process to allow our volunteers to sample different classrooms.</p>
		<p>We love watching children learn about God, seeing them engage in worship, and teaching them Biblical foundations.</p>
		<p>For more information please contact Jason and Natalia at spark@metro-kc.org</p>
    </>
}
// markup
const MinistriesPage = () => {
    return <MinistryLayout
        name = "Spark"
        description = "A youth ministry for kids ages 1-9"
        content = { <Content /> }
        mainImage = { spark }
        galleryImages = { [ spark, fire, beacon, fire ]}
    />
}

export default MinistriesPage
