import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import JoblyApi from "../api";

const CompanyDetail = ({comp}) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/companies/${comp.handle}`)
    }

    return <div onClick={handleClick}>
        <h2>{comp.name}</h2>
        <p>{comp.description}</p>
    </div>
}

export default CompanyDetail;