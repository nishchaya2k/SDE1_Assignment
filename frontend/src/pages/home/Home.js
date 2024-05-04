import React, { useEffect, useState, useRef } from 'react'
import JobCard from '../../components/jobCard/JobCard';
import "./home.css"
import { fetchData } from "../../utils/functions/fetchData"
import { applyFilters } from "../../utils/functions/applyFilters"
import FilterJob from '../../components/filterJob/FilterJob';

//All the filter data options
import { roles_Options, experience_Options, work_Options, salary_Options, location_Options } from '../../utils/data/FilterData';

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
        fetchData(offset).then(newData => {
            setJobData((prevData) => [...prevData, ...newData])
        })
    }, [offset])

    useEffect(() => {
        window.addEventListener("scroll", handleInfiniteScroll) //will fire the event whenever user scroll
        return (() => window.removeEventListener("scroll", handleInfiniteScroll))
    }, [])

    // Apply filters when filters or job data changes
    useEffect(() => {
        const filteredData = applyFilters(jobData, filters, searchTerm);
        setFilteredJobData(filteredData);

    }, [filters, searchTerm, jobData]);


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
