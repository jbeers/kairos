import * as React from "react"
import { PageLayout } from '../layouts';
import './contact.css';

const IndexPage = () => {
    return <PageLayout>
        <h1>Contact Us</h1>
        <p>We would love to hear from you!</p>
        <div className="contact__info">

            <div className="contact__info-group">
                <h3>Contact Info</h3>
                Email: <a href="mailto:admin@kairos-kc.org">admin@kairos-kc.org</a><br />
                Phone: (816) 214-4900<br />
                Hours: 9:00 AM – 2:00 PM Monday – Thursday
            </div>
            <div className="contact__info-group">
                <h3>Sunday Service</h3>
                10:00 AM Worship
                <h3>Wednesday Youth</h3>
                6:30 PM Beacon
            </div>
            <div className="contact__info-group">
                <h3>Address</h3>
                Kairos Church<br />
                2217 High Grove Rd<br />
                Grandview, MO 64030
            </div>
        </div>
        <div className="contact__map-wrapper">
            <iframe
                title="Church Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.6983031532095!2d-94.51592668465001!3d38.88514387957264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0dd9bd5c56c23%3A0xe88e1aaeca696822!2s2217%20High%20Grove%20Rd%2C%20Grandview%2C%20MO%2064030!5e0!3m2!1sen!2sus!4v1611122432363!5m2!1sen!2sus"
                width="600"
                height="450"
                frameborder="0"
                style={{ border: 0, margin: 'auto' }}
                allowfullscreen=""
                aria-hidden="false"
            />
        </div>
    </PageLayout>
}

export default IndexPage
