import React, { useEffect, useState, useRef } from 'react'
import JobCard from '../../components/jobCard/JobCard';
import "./home.css"

//All the filter data options
import { roles_Options, employee_Options, experience_Options, work_Options, salary_Options, location_Options } from '../../utils/FilterData';

import FilterJob from '../../components/filterJob/FilterJob';

const Home = () => {

    const [jobData, setJobData] = useState([])
    const [offset, setOffset] = useState(0);
    const containerRef = useRef(null);
    const [throttleTimeout, setThrottleTimeout] = useState(null);

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

    useEffect(() => {
        console.log(offset)
        fetchData()
    }, [offset])

    useEffect(() => {
        window.addEventListener("scroll", handleInfiniteScroll) //will fire the event whenever user scroll
        return (() => window.removeEventListener("scroll", handleInfiniteScroll))
    }, [])

    return (
        <div className='wrapper'>
            <div className="container">
                <div className="container_filter">
                    <FilterJob Options={roles_Options} />
                    <FilterJob Options={employee_Options} />
                    <FilterJob Options={experience_Options} />
                    <FilterJob Options={work_Options} />
                    <FilterJob Options={salary_Options} />
                    <FilterJob Options={location_Options} />
                </div>
                <div className="container_jobCard" ref={containerRef}>
                    {jobData?.map((jobData_items) => (
                        <JobCard key={jobData_items.jdUid} jobData_items={jobData_items} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
