import * as React from "react"
import { MinistryLayout } from '../../layouts';


const spark = 'https://picsum.photos/seed/picsum1/200/300';
const fire = 'https://picsum.photos/seed/something/200/300';
const beacon = 'https://picsum.photos/seed/picsum2/200/300';

const Content = () => {
    return <>
      <p>This ministry serves anyone and everyone who comes through the doors.</p>

		<p>We greet people, answer their questions, help them find places they need to go, and usher them to their seats. </p>
		<p>To receive care from this ministry meet, please meet anyone of us on Sunday and ask. If we do not know the answer, we will find the person who has the answer!</p>
		<p>We meet every Sunday morning by 9:30am through 15 minutes after the service.</p>
		<p>We love working with the leaders, organizing, training, and building relationships.</p>
		<p>We are open to volunteers!</p>
		<p>If you are interested in becoming a volunteer please contact Mary Sparling at admin@metro-kc.org.</p>

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
