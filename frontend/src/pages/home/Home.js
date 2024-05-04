import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux"
import JobCard from '../../components/jobCard/JobCard';
import "./home.css"
import { fetchData } from "../../utils/functions/fetchData"
import { applyFilters } from "../../utils/functions/applyFilters"
import FilterJob from '../../components/filterJob/FilterJob';
import {
    filteredDataAdded,
    selectFilteredData,

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


const Home = () => {
    const dispatch = useDispatch();
    const filteredData = useSelector(selectFilteredData)
    // const jobData = useSelector(selectJobData)

    const roles = useSelector(selectRoles);
    const experience = useSelector(selectExperience);
    const work = useSelector(selectWork);
    const salary = useSelector(selectSalary);
    const location = useSelector(selectLocation);

    const containerRef = useRef(null);
    const [throttleTimeout, setThrottleTimeout] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [jobData, setJobData] = useState([])
    const [offset, setOffset] = useState(0)



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
            if (document.documentElement.scrollTop + window.innerHeight + 10 >= document.documentElement.scrollHeight) {

                if (!throttleTimeout) {

                    setOffset((prev) => (prev + 10))
                    setThrottleTimeout(setTimeout(() => setThrottleTimeout(null), 2000));
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
    }, [offset, throttleTimeout])

    //for scroll event
    useEffect(() => {
        window.addEventListener("scroll", handleInfiniteScroll) //will fire the event whenever user scroll
        return (() => window.removeEventListener("scroll", handleInfiniteScroll))
    })

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

                    <FilterJob Options={roles_Options} filterType='roles' placeHolder={"Roles"} />
                    <FilterJob Options={experience_Options} filterType='experience' placeHolder={"Experience"} />
                    <FilterJob Options={work_Options} filterType='work' placeHolder={"Remote/on-site"} />
                    <FilterJob Options={salary_Options} filterType='salary' placeHolder={"Minimum Base Pay Salary"} />
                    <FilterJob Options={location_Options} filterType='location' placeHolder={"Location"} />


                    {/* Search input for company name */}
                    <input
                        type='text'
                        placeholder='Search By Company Name'
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className='search-bar'
                    />

                </div>
                <div className='container_Cards' ref={containerRef}>
                    <div className="container_Cards-jobCard" ref={containerRef}>
                        {filteredData?.map((jobData_items, index) => (
                            <JobCard key={`${jobData_items.jdUid}-${index}`} jobData_items={jobData_items} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
