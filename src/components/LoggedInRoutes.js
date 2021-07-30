import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Companies from './Companies.js';
import CompanyPage from "./CompanyPage.js";
import Homepage from './Homepage.js';
import Jobs from "./Jobs.js";
import Profile from "./Profile.js";
import Job from './Job';

const LoggedInRoutes = () => {
    return (
        <Switch>
        <Route exact path="/">
            <Homepage/>
        </Route>
        <Route exact path="/companies">
            <Companies/>
        </Route>
        <Route exact path="/companies/:handle">
            <CompanyPage/>
        </Route>
        <Route exact path="/jobs">
            <Jobs/>
        </Route>
        <Route exact path="/profile">
            <Profile/>
        </Route>
        <Redirect to="/"/>
    </Switch>
    )
}

export default LoggedInRoutes;