import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux"
import JobCard from '../../components/jobCard/JobCard';
import "./home.css"
import { fetchData } from "../../utils/functions/fetchData"
import { applyFilters } from "../../utils/functions/applyFilters"
import FilterJob from '../../components/filterJob/FilterJob';
import {
    filteredDataAdded,
    offsetAdded,
    selectFilteredData,
    selectOffset
} from '../../store/reducer/jobDataReducer';

import {
    selectRoles,
    selectExperience,
    selectWork,
    selectSalary,
    selectLocation
} from '../../store/reducer/filterReducer';



//All the filter data options
import { roles_Options, experience_Options, work_Options, salary_Options, location_Options } from '../../utils/data/FilterData';

import useHandleFilterChange from '../../utils/functions/handleFilterChange';


const Home = () => {
    const dispatch = useDispatch();
    const filteredData = useSelector(selectFilteredData)
    // const jobData = useSelector(selectJobData)
    const offset = useSelector(selectOffset)

    const roles = useSelector(selectRoles);
    const experience = useSelector(selectExperience);
    const work = useSelector(selectWork);
    const salary = useSelector(selectSalary);
    const location = useSelector(selectLocation);

    const containerRef = useRef(null);
    const [throttleTimeout, setThrottleTimeout] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [jobData, setJobData] = useState([])
    const handleFilterChange = useHandleFilterChange();



    const [filters, setFilters] = useState({
        roles: [],
        experience: [],
        work: [],
        salary: [],
        location: []
    });

    // scrolltop + innerheight >= scrollheight
    const handleInfiniteScroll = async () => {

        try {
            if (document.documentElement.scrollTop + window.innerHeight + 1 >= document.documentElement.scrollHeight) {

                if (!throttleTimeout) {
                    const newOffset = offset + 10;
                    dispatch(offsetAdded(newOffset))
                    setThrottleTimeout(setTimeout(() => setThrottleTimeout(null), 200));
                    // Reset the throttle timeout, avoid frequent function calling

                }

            }
        } catch (error) {
            console.error(error)
        }
    }

    //for fetching data by infinite scroll
    useEffect(() => {
        fetchData(offset).then(newData => {
            setJobData((prev) => ([...prev, ...newData]))
        })
    }, [offset])

    //for scroll event
    useEffect(() => {
        window.addEventListener("scroll", handleInfiniteScroll) //will fire the event whenever user scroll
        return (() => window.removeEventListener("scroll", handleInfiniteScroll))
    }, [offset])

    // Apply filters when filters or job data changes
    useEffect(() => {
        const data = applyFilters(jobData, roles, experience, work, salary, location, searchTerm);
        dispatch(filteredDataAdded(data));
    }, [jobData, roles, experience, work, salary, location, searchTerm, dispatch]);

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
                    {filteredData?.map((jobData_items, index) => (
                        <JobCard key={`${jobData_items.jdUid}-${index}`} jobData_items={jobData_items} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
