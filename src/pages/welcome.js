import * as React from "react"
import { PageLayout } from '../layouts';
import { Link } from 'gatsby';

const IndexPage = () => {
    return <PageLayout>
        <h1>Welcome!</h1>
        <p>
            Kairos Church was founded in early 2021. Our history goes much further back than that though. The body has been meeting consistently
            since 1990 under various names and in various buildings. The name "Kairos" was prompted by a word from the Lord several years ago that He has
            been faithful to bring about in His timing.
        </p>
        <p>
            Kairos is Greek word that roughly translates as "the right time". It stands in contrast to the word "Chronos" which is any time on the clock. We trust
            God's faithfulness and timing to bring us through the trials we experience in our lives, out of the sin that tangles us up, and into deeper, fuller, graeter
            knowledge and understanding of His love.
        </p>
        <p>
            We believe in God's nearness to us and His constant goodness. We summarize the many ways He leads us in the values of faith, family, and movement.
            {/* You can read more about our beliefs and the scriptures they are based on on our <Link to='/beliefs'>beliefs page.</Link> */}
        </p>
        <p>
            We would love for you to come and join us for worship on Sunday morning. Our doors open up at 9:30 AM on Sunday morning for a time of informal fellowship.
            Worship starts at 10 AM, is followed by sermon, and usually ends around 12 PM. For directions to our building or more information about how to reach out
            to us throughout the week check out our <Link to="/contact" >contact page.</Link>
        </p>
        {/* <div>
            <h3>Important COVID-19 Information</h3>
            <p>
                Kairos is committed to making sure that gather in ways that are safe for the edification of God's people.
                Read about our <Link to="/covid-19">COVID-19 guidelines and procedures.</Link>
            </p>
        </div> */}
    </PageLayout>
}

/**
 * 
 * Who is Kairos?
 * What does Kairos mean?
 * What are our beliefs
 * What to expect on Sunday morning
 */

export default IndexPage
