import React from "react";

const Job = ({job}) => {
    return <div className="job:">
        <h2 className="job-title">{job.title}</h2>
        <h3 className="job-company-name">{job.companyName}</h3>
        <p>Salary: {job.salary}</p>
        <p>equity: {job.equity}</p>
    </div>
}

export default Job;