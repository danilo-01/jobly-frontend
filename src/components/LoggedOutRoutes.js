import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./Login.js";
import Signup from "./Signup.js";

const LoggedOutRoutes = ({setUsername, loginUser, signupUser}) => {
    return (
        <Switch>
            <Route exact path="/login">
                <Login setUsername={setUsername}/>
            </Route>
            <Route exact path="/signup">
                <Signup setUsername={setUsername}/>
            </Route>
            <Redirect to="/login"/>
        </Switch>
    )
}

export default LoggedOutRoutes;