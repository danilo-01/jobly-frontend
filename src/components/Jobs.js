import React, { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import JoblyApi from "../api";
import Job from "./Job";

const Jobs = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [jobsData, setjobsData] = useState([]);

    useEffect(()=>{
        const getjobs = async () => {
            const data = searchTerm ? {title : searchTerm} : {}
            const res = await JoblyApi.getJobs(data);
            setjobsData(res);
        }
        getjobs();
    },[searchTerm])

    const updateSearchTerm = (term) => {
        setSearchTerm(term);
    }
    
    return (
    <div>
        <Searchbar updateSearchTerm={updateSearchTerm} />
        {jobsData.map(job => {
            return <Job job={job}/>
        })}
    </div>
    )
}

export default Jobs;