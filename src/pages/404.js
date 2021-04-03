import * as React from "react"
import { PageLayout } from '../layouts';
import { Link } from 'gatsby';

const IndexPage = () => {
  return <PageLayout>
    <h1>We don't have a page for that!</h1>
    <p>
      It looks like the page you are trying to access doesn't exist. Sorry about that!
      Try checking out our <Link to="/">homepage</Link> to browse the rest of our site.
    </p>
    <p>
      If you are still unable to find what you are looking for please reach out to us via our <Link to='/contact'>contact page</Link>. We would love to hear from you!
    </p>
  </PageLayout>
}

export default IndexPage
