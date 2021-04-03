import * as React from "react"
import { MinistryLayout } from '../../layouts';


const spark = 'https://picsum.photos/seed/picsum1/200/300';
const fire = 'https://picsum.photos/seed/something/200/300';
const beacon = 'https://picsum.photos/seed/picsum2/200/300';

const Content = () => {
    return <>
		<p>This ministry serves anyone who would enjoy a beverage on Sunday morning.</p>
		<p>We serve coffee, greet visitors, pray for others, and answer questions about the church or activities.</p>
		<p>Each barista serves on a designated Sunday. They arrive at 8:30 am for setup and cleanup once the sermon starts.</p>
		<p>To receive care from this ministry please speak to any of our baristas; we love meeting new people.</p>
		<p>We love seeing everyone on Sunday mornings and being able to talk to and pray with them.</p>
		<p>We are open to volunteers! </p>
		<p>To become a volunteer or if you need any further information please email Sara Rosser at saraherosser@gmail.com.</p>
    </>
}
// markup
const MinistriesPage = () => {
    return <MinistryLayout
        name = "Coffee Shop"
        description = "Hot beverages, community, and comfort"
        content = { <Content /> }
        mainImage = { spark }
        galleryImages = { [ spark, fire, beacon, fire ]}
    />
}

export default MinistriesPage
