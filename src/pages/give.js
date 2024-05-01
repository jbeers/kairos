import { Link } from 'gatsby';
import * as React from "react";
import { PageLayout } from '../layouts';

const IndexPage = () => {
    return <PageLayout>
        <h1>Give</h1>
        <div>
            <h2>Online</h2>
            <p>
                Online giving is handled through Aware 3. You can access our giving page at <Link to="https://kairoschurch.aware3.net/give" >https://kairoschurch.aware3.net/give</Link>.
            </p>
        </div>
        <div>
            <h2>By Check</h2>
            <p>To give by check please make the check out to "Kairos Church KC" and include the purpose of your gift in the memo line. Please mail the check to:</p>
            <center>
                Karios Church<br />
                2217 High Grove Rd<br />
                Grandview, MO 64030
            </center>

        </div>
    </PageLayout>
}

export default IndexPage
