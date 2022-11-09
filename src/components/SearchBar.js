import { useState } from 'react'
import Catalogue from './Catalogue'

function SearchBar() {
    //state to listen to input change
    const [userInput, setUserInput]=useState("")
    // state to determine city
    const [userCity, setUserCity] =useState("")


    const handleChange=(e)=>{
        e.preventDefault()
        setUserInput(e.target.value)
    }
    
    const handleSubmit =(e)=>{
        e.preventDefault()
        setUserCity(userInput)
    }

        
        return (
            
            <>
            <form onSubmit={handleSubmit}> 
                <input type="text" placeholder="city" onChange={handleChange}/>
            </form>
            <Catalogue city={userCity}/>

        </>
    )
}

export default SearchBar;