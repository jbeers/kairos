import * as React from "react"
import { PageLayout } from '../layouts';
import { Link } from 'gatsby';

const IndexPage = () => {
    return <PageLayout>
       <h1>Planning Center</h1>
       <p>Planning Center is a tool that Kairos uses to keep everyone in the loop.</p>
        <p><Link to="https://www.planningcenter.com/">Go to Planning Center</Link></p>
    </PageLayout>
}

export default IndexPage
