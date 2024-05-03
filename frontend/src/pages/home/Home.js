import React, { useEffect, useState, useRef } from 'react'
import JobCard from '../../components/jobCard/JobCard';
import "./home.css"

//All the filter data options
import { roles_Options, experience_Options, work_Options, salary_Options, location_Options } from '../../utils/FilterData';

import FilterJob from '../../components/filterJob/FilterJob';

const Home = () => {

    const [jobData, setJobData] = useState([])
    const [offset, setOffset] = useState(0);
    const containerRef = useRef(null);
    const [throttleTimeout, setThrottleTimeout] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');


    const [filters, setFilters] = useState({
        roles: [],
        experience: [],
        work: [],
        salary: [],
        location: []
    });
    const [filteredJobData, setFilteredJobData] = useState([]);

    const fetchData = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify({
            "limit": 10,
            offset
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body
        };

        try {
            const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)

            const data = await response.json();
            console.log(data.jdList)
            setJobData((prev) => [...prev, ...data.jdList]);

        }
        catch (err) {
            console.error(err);
        }
    }
    // scrolltop + innerheight >= scrollheight

    const handleInfiniteScroll = async () => {

        try {
            if (document.documentElement.scrollTop + window.innerHeight + 1 >= document.documentElement.scrollHeight) {
                if (!throttleTimeout) {
                    setOffset((prev) => prev + 10);
                    setThrottleTimeout(setTimeout(() => setThrottleTimeout(null), 2000));
                    // Reset the throttle timeout, avoid frequent function calling
                }
            }
        } catch (error) {
            console.error(error)
        }
    }

    //for infinite scroll
    useEffect(() => {
        console.log(offset)
        fetchData()
    }, [offset])

    useEffect(() => {
        window.addEventListener("scroll", handleInfiniteScroll) //will fire the event whenever user scroll
        return (() => window.removeEventListener("scroll", handleInfiniteScroll))
    }, [])

    // Apply filters when filters or job data changes
    useEffect(() => {
        applyFilters(jobData);
    }, [filters, searchTerm, jobData]);


    // Function to apply filters on job data
    const applyFilters = (data) => {

        let filteredData = data;

        //Search (startsWith() used to check whether a string starts with a specific substring)
        if (searchTerm) {
            filteredData = filteredData.filter(job =>
                job.companyName.toLowerCase().startsWith(searchTerm.toLowerCase())
            );
        }

        // Filter by roles
        if (filters.roles.length > 0) {
            filteredData = filteredData.filter(job => filters.roles.includes(job.jobRole));
        }

        // Filter by experience
        if (filters.experience.length > 0) {

            filteredData = filteredData.filter(job => {
                const selectedExperience = Math.max(...filters.experience);
                return job.minExp >= selectedExperience
            });
        }

        // Filter by work arrangement
        if (filters.work.length > 0) {
            filteredData = filteredData.filter(job => filters.work.includes(job.location));
        }

        // Filter by salary
        if (filters.salary.length > 0) {
            filteredData = filteredData.filter(job => {
                const selectedSalary = Math.max(...filters.salary);
                return job.minJdSalary >= selectedSalary;
            });
        }

        // Filter by location
        if (filters.location.length > 0) {
            filteredData = filteredData.filter(job => filters.location.includes(job.location));
        }

        setFilteredJobData(filteredData);
    };

    // Handle filter changes
    const handleFilterChange = (filterType, selectedValues) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: selectedValues.map(option => option.value)
        }));
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };


    return (
        <div className='wrapper'>
            <div className="container">
                <div className="container_filter">
                    <FilterJob Options={roles_Options} onChange={(selected) => handleFilterChange('roles', selected)} placeHolder={"Roles"} />

                    <FilterJob Options={experience_Options} onChange={(selected) => handleFilterChange('experience', selected)} placeHolder={"Experience"} />

                    <FilterJob Options={work_Options} onChange={(selected) => handleFilterChange('work', selected)} placeHolder={"Remote/on-site"} />

                    <FilterJob Options={salary_Options} onChange={(selected) => handleFilterChange('salary', selected)} placeHolder={"Minimum Base Pay Salary"} />

                    <FilterJob Options={location_Options} onChange={(selected) => handleFilterChange('location', selected)} placeHolder={"Location"} />

                    {/* Search input for company name */}
                    <input
                        type='text'
                        placeholder='Search By Company Name'
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className='search-bar'
                    />

                </div>
                <div className="container_jobCard" ref={containerRef}>
                    {filteredJobData.map(jobData_items => (
                        <JobCard key={jobData_items.jdUid} jobData_items={jobData_items} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
