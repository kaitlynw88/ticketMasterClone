import { useState } from 'react'
import Catalogue from './Catalogue'

function SearchBar() {
    //state to listen to input change
    const [userInput, setUserInput]=useState("")
    // state to determine city
    const [userCity, setUserCity] =useState("")

    const [userOption, setUserOption]=useState("")

    const [eventOption, setEventOption] = useState("")


    const handleChange=(e)=>{
        e.preventDefault()
        setUserInput(e.target.value)
    }

    
    const handleOption =(e)=>{
        e.preventDefault()
        console.log(e.target.value)
        setUserOption(e.target.value)
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        setUserCity(userInput)
        setEventOption(userOption)
    }

        
        return (
            
            <>
                <form onSubmit={handleSubmit}> 
                <input type="text" placeholder="city" onChange={handleChange}/>

                <select name="eventOption" onChange={handleOption}>
                    <option value = "sports">Sports</option>
                    <option value = "music">Music</option>
                    <option value ="theatre">Theatre</option>  
                </select>

                <input type="submit"/>
            </form>
            <Catalogue city={userCity} eventType={eventOption}/>

        </>
    )
}

export default SearchBar;