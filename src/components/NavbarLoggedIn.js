import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../context/UserContext";
import FormsContext from "../context/FormsContext.js";
import "../CSS/navbar.css";

const Navbar = () => {
    const userContext = useContext(UserContext);
    const {logout} = useContext(FormsContext);
    
    const handleLogout = () => {
        logout();
    }
    return (<nav className="navbar">
        <NavLink exact to="/">
            Home
        </NavLink>
        <NavLink exact to="/companies">
            Companies
        </NavLink>
        <NavLink exact to="/jobs">
            Jobs
        </NavLink>
        <NavLink exact to="/profile">
            Profile
        </NavLink>
        <NavLink exact onClick={handleLogout} to="/login">
            Log Out {userContext.username}
        </NavLink>
    </nav>)
}

export default Navbar;