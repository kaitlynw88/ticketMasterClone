import axios from "axios";
import { useState, useEffect } from 'react'
import "../styles/Catalogue.scss"

function Catalogue(props) {
    // Call useState to create an events State
    const [events, setEvents] = useState([]);
    const [userDate, setUserDate] = useState("")
    
    
    // after our component gets mounted
    useEffect(() => {
    
        const getDate = ()=>{
            const date = new Date()
            const dateString = date.toISOString()
            console.log(dateString)
            setUserDate(dateString)
        }
        // Make an AJAX call to TMDB to get a list of popular movies from a specific year
        axios({
            url: 'https://app.ticketmaster.com/discovery/v2/events',
            params: {
                apikey: "aM3gP6nWpJg8BaCAGqMJS1TKhv73ipJ8",
                // preferredCountry: "ca",
                sort: "date,asc",
                city: props.city,
                endDateTime:userDate,
                startDateTime: userDate,
                keyword: props.eventType
            }
        }).then((response) => {
            // set the array of returned events in state
            setEvents(response.data["_embedded"].events)
        })

        //get current date time
        
        
    }, [props.city], userDate)


    console.log(events)


    return(
        <>{!props.city || !userDate && 
            <ul className='catalogue'>
                {
                    events.map((event) => (
                        <li className="eventContainer" key={event.id}>
                            <h2>{event.name}</h2>
                            <div className="eventInfoContainer">
                                <div className="eventInfo">
                                    <p>{event.dates.start.localDate}</p>
                                    <a href={event.url}>get tickets here!</a>
                                </div>

                                <img src={event.images[0].url} alt={event.name}/>
                            </div>
                        </li>
                    ))
                }
            </ul>
        
        }
        </>


    )
}

export default Catalogue;