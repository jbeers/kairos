import * as React from "react"
import { PageLayout } from '../layouts';
import * as axios from 'axios';
import './events.css';

const { useState, useEffect } = React;

function formatDate( date ) {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
};

const UpcomingEvent = ( { eventData } ) => {
    return <div className="upcoming-event">
        <span className="upcoming-event__date" >{formatDate( new Date( eventData.date ) )}</span>
        <div className="upcoming-event__info">
            <span className="upcoming-event__event" >{eventData.event}</span>
            <span className="upcoming-event__description" >{eventData.description}</span>
        </div>
    </div>
}

const IndexPage = () => {
    const [ events, setEvents ] = useState( [] );
    
    useEffect( () => {
        ( async () => {
            const response = await axios.get( '/.netlify/functions/upcoming-events' ) ;

            setEvents( response.data.data || [] );
        })();
    }, [] );
    
    return <PageLayout>
        <h1>Upcoming Events</h1>
        { events.length ? null : <p>There are no upcoming events at this time.</p> }
        {
            !events.length
                ? null
                : events.map(event => <UpcomingEvent eventData = { event } /> )
        }
    </PageLayout>
}

export default IndexPage
