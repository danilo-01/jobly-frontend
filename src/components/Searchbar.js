import React, { useState } from "react";

// Searchbar component that renders a serch input and accepts a function to change 
// search term state
const Searchbar = ({updateSearchTerm}) => {
    const INIT_STATE = {search: ""};
    const [formData, setFormData] = useState(INIT_STATE);   

    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setFormData(data => {return {
            ...data,
            [name] : value
        }});
    }

    const handleClick = (evt) => {
        evt.preventDefault();
        updateSearchTerm(formData.search.trim());
    }

    return (
    <div className="searchbar">
        <form>
            <label htmlFor="search">Search</label>
            <input onChange={handleChange} 
            name="search" 
            type="text"
            value={formData.search}/>

            <button onClick={handleClick}>Search</button>
        </form>
    </div>)

}

export default Searchbar;