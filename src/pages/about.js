import * as React from "react"
import { PageLayout } from '../layouts';

const IndexPage = () => {
    return <PageLayout>
        <h1>Our Story</h1>
        <p>
            Kairos Church was founded in early 2021. Our history goes much further back than that though. The body has been meeting consistently
            since 1990 under various names and in various buildings. The name "Kairos" was prompted by a word from the Lord several years ago that He has
            been faithful to bring about in His timing.
        </p>
        <p>
            Kairos is Greek word that roughly translates as "the right time". It stands in contrast to the word "Chronos" which is any time on the clock. We trust
            God's faithfulness and timing to bring us through the trials we experience in our lives, out of the sin that tangles us up, and into deeper, fuller
            knowledge of His love.
        </p>
        <p>
            We believe in God's nearness to us and His constant goodness. We summarize the many ways He leads us in the values of faith, family, and movement.
            {/* You can read more about our beliefs and the scriptures they are based on on our <Link to='/beliefs'>beliefs page.</Link> */}
        </p>
    </PageLayout>
}

export default IndexPage
