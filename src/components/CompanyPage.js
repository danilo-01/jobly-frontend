import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CompanyDetail from "./CompanyDetail.js";
import JoblyApi from "../api.js";
import Job from "./Job.js";

const CompanyPage = () => {
    const { handle } = useParams();
    const [companyData, setCompanyData] = useState(null);

    useEffect( () => {
        const getCompany = async () => {
            const res = await JoblyApi.getCompany(handle);
            setCompanyData(res)
        }
        
        getCompany();
    },[handle])

    return <div>
        {companyData ? <CompanyDetail comp={companyData}/> : "Loading..."}
        {companyData ? companyData.jobs.map(job => { return (<Job job={job}/>)}) : "Loading..."}
    </div>
}

export default CompanyPage;