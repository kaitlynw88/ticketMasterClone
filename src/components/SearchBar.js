import { useState } from 'react'
import Catalogue from './Catalogue'

function SearchBar() {
    //state to listen to input change
    const [userInput, setUserInput] = useState("");
    // state to determine city
    const [userCity, setUserCity] = useState("");

    const [userOption, setUserOption] = useState("");

    const [eventOption, setEventOption] = useState("");

    const [userDate, setUserDate] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setUserInput(e.target.value);
    };

    const handleOption = (e) => {
        e.preventDefault();
        setUserOption(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserCity(userInput);
        setEventOption(userOption);
    };
    // eslint-disable-next-line
    const getDate = () => {
        const date = new Date();
        const dateString = date.toISOString();
        setUserDate(dateString);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="city" onChange={handleChange} />

                <select name="eventOption" onChange={handleOption}>
                    <option value="">Please select</option>
                    <option value="sports">Sports</option>
                    <option value="music">Music</option>
                    <option value="theatre">Theatre</option>
                </select>

                <input type="submit" />
            </form>
            <Catalogue
                city={userCity}
                eventType={eventOption}
                date={userDate}
            />
        </>
    );
}

export default SearchBar;