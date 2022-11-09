import axios from "axios";
import { useState, useEffect } from 'react'

function Catalogue(props) {
    // Call useState to create an events State
    const [events, setEvents] = useState([]);

    // after our component gets mounted
    useEffect(() => {
        // Make an AJAX call to TMDB to get a list of popular movies from a specific year
        axios({
            url: 'https://app.ticketmaster.com/discovery/v2/events',
            params: {
                apikey: "aM3gP6nWpJg8BaCAGqMJS1TKhv73ipJ8",
                // preferredCountry: "ca",
                sort: "date,asc",
                city: props.city,
            }
        }).then((response) => {
            // set the array of returned events in state
            setEvents(response.data["_embedded"].events)
        })
    }, [props.city])


    console.log(events)


    return(
        <ul className='catalogue'>
            {
                events.map((event) => (
                    // add a movie poster for each item in the array
                    <li key={event.id}>
                        <h2>{event.name}</h2>
                        <p>{event.dates.start.localDate}</p>
                        <p>{event.name}</p>
                        <a href={event.url}>get tickets here!</a>
                    </li>
                ))
            }
        </ul>

    )
}

export default Catalogue;