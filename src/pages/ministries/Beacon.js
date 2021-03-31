import * as React from "react"
import { MinistryLayout } from '../../layouts';


const spark = 'https://picsum.photos/seed/picsum1/200/300';
const fire = 'https://picsum.photos/seed/something/200/300';
const beacon = 'https://picsum.photos/seed/picsum2/200/300';

const Content = () => {
    return <>
        <p>Beacon is a youth ministry aimed at providing a fun and safe way for teens to connect and grow in their walk with Jesus.</p>
        <p>We meet on Sunday mornings and have a weekly bible study with occasional events outside of Sunday morning class </p>
        <p>We are open to volunteers! </p>
        <p>We require a background check. Once a background check is cleared, we have a few questions to help place you in a class that fits your preferences. We also encourage a shadowing process to allow our volunteers to sample different classrooms.</p>
        <p>We know that teens are at a difficult stage of life and are constantly being challenged. We are so thankful to have an opportunity to come young members of the faith and encourage them to reach their full potential.</p>

        <p>For more information please contact Ryan Rosser at rrosser@kairos-kc.org</p>
    </>
}
// markup
const MinistriesPage = () => {
    return <MinistryLayout
        name="Beacon"
        description="JR. and SR. high. youth ministry"
        content={<Content />}
        mainImage={spark}
        galleryImages={[spark, fire, beacon, fire]}
    />
}

export default MinistriesPage
