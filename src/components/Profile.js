import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext.js";
import FormsContext from "../context/FormsContext.js";

const Profile = () => {
    const userContext = useContext(UserContext);
    const { update } = useContext(FormsContext)
    const INIT_STATE = {
        firstName: userContext.firstName,
        lastName: userContext.lastName,
        email: userContext.email,
        password: "",
    }
    
    const [formData, setFormData] = useState(INIT_STATE);

    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setFormData(data => {
            return {
                ...data,
                [name]: value
            }
        })
    }
    const handleClick = (evt) => {
        evt.preventDefault();
        update(formData);
        console.log(formData);
    }
    
    return (
    <div className="profile">
        <h1>{userContext.username}'s Profile</h1>
        <form>
                <label htmlFor="firstName" >First Name</label>
                <input value={formData.firstName}
                type="text"
                name="firstName"
                onChange={handleChange}/>

                <label htmlFor="lastName" >Last Name</label>
                <input value={formData.lastName}
                type="text"
                name="lastName"
                onChange={handleChange}/>

                <label htmlFor="email" >E-mail</label>
                <input value={formData.email}
                type="text"
                name="email"
                onChange={handleChange}/>

                <label htmlFor="password" >Confirm password to make changes</label>
                <input value={formData.password}
                type="text"
                name="password"
                onChange={handleChange}/>
                <button onClick={handleClick}>Save Changes</button>
        </form>

    </div>)
}

export default Profile;