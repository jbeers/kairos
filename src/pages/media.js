import * as React from "react"
import { PageLayout } from '../layouts';
import { Link } from 'gatsby';

const IndexPage = () => {
    return <PageLayout>
        <h1>Media</h1>
        <p>You can check out our Sunday morning live-stream at <Link to="https://metro-kc.online.church/" >metro-kc.online.church</Link> .</p>
        <p>You can check out our videos on <Link to="https://vimeo.com/metrokc">Vimeo</Link> .</p>
    </PageLayout>
}

export default IndexPage
