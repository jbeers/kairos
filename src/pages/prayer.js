import * as React from "react"
import { PageLayout } from '../layouts';
import './prayer.css';

const IndexPage = () => {
    return <PageLayout>
        <h1>Request Prayer</h1>
        <p>At Kairos we have a dedicated prayer team that sets aside time each week to pray over any requests we receive</p>
        <p>Please fill out the following form in order to submit a prayer request</p>
        <form className='stack' name="prayerRequest" method='POST' data-netlify="true">
            <div className = 'item-row'>
                <label htmlFor="Name">Name</label>
                <input id="Name" name="Name" />
            </div>
            <div className='item-row'>
                <label htmlFor="Email">Email</label>
                <input id="Email" name="Email" />
            </div>
            <div className='stack'>
                <label htmlFor="PrayerRequest">Prayer Request</label>
                <textarea className="prayer-form__prayer-request" id="PrayerRequest" name="PrayerRequest" />
            </div>
            <div className="item-row justify-end">
                <button type='submit'>Submit</button>
            </div>
        </form>
    </PageLayout>
}

export default IndexPage
