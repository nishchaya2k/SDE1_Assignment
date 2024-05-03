import React, { useEffect, useState } from 'react'
import JobCard from '../../components/jobCard/JobCard';
import "./home.css"

//All the filter data options
import { roles_Options, employee_Options, experience_Options, work_Options, salary_Options, location_Options } from '../../utils/FilterData';

import FilterJob from '../../components/filterJob/FilterJob';

const Home = () => {
    const [jobData, setJobData] = useState([])

    // fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
    //     .then((response) => response.json())
    //     .then((result) => console.log(result))
    //     .catch((error) => console.error(error));


    useEffect(() => {
        const fetchData = async () => {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const body = JSON.stringify({
                "limit": 10,
                "offset": 0
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
                setJobData(data.jdList);
            }
            catch (err) {
                console.error(err);
            }
        }
        fetchData();
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
                <div className="container_jobCard">
                    {jobData?.map((jobData_items) => (
                        <JobCard key={jobData_items.jdUid} jobData_items={jobData_items} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Home
