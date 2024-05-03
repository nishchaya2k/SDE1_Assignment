import React from 'react'
import JobCard from '../../components/jobCard/JobCard';
import "./home.css"
import FilterJob from '../../components/filterJob/FilterJob';

const Home = () => {

    return (
        <div className='wrapper'>
            <div className="container">
                <div className="container_filter">
                    <FilterJob />
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
