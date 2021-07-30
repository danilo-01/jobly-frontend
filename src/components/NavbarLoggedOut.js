import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/navbar.css";

const NavbarLoggedOut = () => {
    return (<nav className="navbar">
        <NavLink exact to="/login">
            Login
        </NavLink>
        <NavLink exact to="/signup">
            Signup
        </NavLink>
    </nav>)
}

export default NavbarLoggedOut;