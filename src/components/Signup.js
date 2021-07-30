import React, { useState, useContext } from "react";
import FormsContext from "../context/FormsContext.js";

const Signup = ({signupUser, setUsername}) => {
    const { signup } = useContext(FormsContext)
    const INIT_STATE = {
        "username" : "",
        "password" : "",
        "email" : "",
        "firstName" : "",
        "lastName" : ""
    }
    const [formData, setFormData] = useState(INIT_STATE);

    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setFormData(data => {
            return {
                ...data,
                [name] : value
            }
        })
    }
    const handleClick = (evt) => {
        evt.preventDefault();
        setUsername(formData.username);
        signup(formData);
    }
    return (
        <form>
            <label htmlFor="username">Username</label>
            <input onChange={handleChange} 
            name="username" 
            value={formData.username} 
            type="text"/>
            
            <label htmlFor="password">Password</label>
            <input onChange={handleChange} 
            name="password" 
            value={formData.password} 
            type="text"/>

            <label htmlFor="firstname">First tname</label>
            <input onChange={handleChange} 
            name="firstName" 
            value={formData.firstName} 
            type="text"/>

            <label htmlFor="lastname">Last name</label>
            <input onChange={handleChange} 
            name="lastName" 
            value={formData.lastName} 
            type="text"/>

            <label htmlFor="email">E-mail</label>
            <input onChange={handleChange} 
            name="email" 
            value={formData.email} 
            type="text"/>

            <button onClick={handleClick}>Signup</button>
        </form>
        )
    
}

export default Signup;