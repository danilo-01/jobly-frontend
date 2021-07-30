import React, { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import JoblyApi from "../api";
import Company from "./Company";

// Companies component that shows a list of Company components
const Companies = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [companiesData, setCompaniesData] = useState([]);

    useEffect(()=>{
        const getCompanies = async () => {
            const data = searchTerm ? {name : searchTerm} : {}
            const res = await JoblyApi.getCompanies(data);
            setCompaniesData(res);
        }
        getCompanies();
    },[searchTerm])

    const updateSearchTerm = (term) => {
        setSearchTerm(term);
    }

    return (
    <div>
        <Searchbar updateSearchTerm={updateSearchTerm} />
        {companiesData.map(comp => {
            return <Company comp={comp}/>
        })}
    </div>
    )
}

export default Companies;