import React from 'react'
import JobCard from '../../components/jobCard/JobCard';
import "./home.css"

//All the filter data options
import { roles_Options, employee_Options, experience_Options, work_Options, salary_Options, location_Options } from '../../utils/FilterData';

import FilterJob from '../../components/filterJob/FilterJob';

const Home = () => {

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
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                </div>
            </div>
        </div>
    )
}

export default Home
