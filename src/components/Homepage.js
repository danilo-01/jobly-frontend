import React, { useContext } from "react";
import UserContext from "../context/UserContext.js";

const Homepage = () => {
    const context = useContext(UserContext);
    return (
    <div>
        Welcome,  {context.firstName}
    </div>);
}

export default Homepage;