import * as React from "react"
import { MinistryLayout } from '../../layouts';

const Content = () => {
    return <>
        <p>This ministry is meant to help anyone in need of food.</p>
    </>
}
// markup
const MinistriesPage = () => {
    return <MinistryLayout
        name="Hope Rocks"
        description="Food pantry and meal assistance"
        content={<Content />}
        mainImage={{}}
        galleryImages={[]}
    />
}

export default MinistriesPage
