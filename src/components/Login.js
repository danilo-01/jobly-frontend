import React , { useState, useContext } from "react";
import FormsContext from "../context/FormsContext.js";

const Login = ({loginUser, setUsername}) => {
    const { login } = useContext(FormsContext)
    const INIT_STATE = {
        "username" : "testuser",
        "password" : "password"
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
        login(formData);
    }

    return (
    <form>
        <label htmlFor="username">Username</label>
        <input name="username" 
        type="text"
        value={formData.username}
        onChange={handleChange}/>

        <label htmlFor="password">Password</label>
        <input name="password" 
        type="text"
        value={formData.password}
        onChange={handleChange}/>

        <button onClick={handleClick}>Login</button>
    </form>)
}

export default Login;