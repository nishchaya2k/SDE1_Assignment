import React from 'react'
import "./JobCard.css"

const JobCard = ({ jobData_items }) => {
    return (
        <div className='card'>
            <div className="card_details">
                <div className='card_details-post'>Posted 6 days ago</div>
                <div className="card_details-companyName">{jobData_items.companyName}</div>
                <div className='card_details-jobTitle'>{jobData_items.jobRole?.toUpperCase()}</div>
                <div className='card_details-location'>{jobData_items.location?.charAt(0).toUpperCase() + jobData_items.location?.slice(1)}</div>
                <div className="card_details-salaryRange">
                    Estimated Salary:{' '}
                    {jobData_items.minJdSalary !== null && jobData_items.maxJdSalary !== null ? (
                        `₹${jobData_items.minJdSalary} - ${jobData_items.maxJdSalary} LPA`
                    ) : jobData_items.minJdSalary === null && jobData_items.maxJdSalary !== null ? (
                        `Upto ₹${jobData_items.maxJdSalary} LPA`
                    ) : (
                        "Not Given"
                    )}
                </div>
                <div className='card_details_aboutCompany'>
                    <p className='card_details_aboutCompany-heading'>About Company</p>
                    <div className="card_details_aboutCompany-description">
                        {jobData_items.jobDetailsFromCompany}
                    </div>
                </div>

                <div className="card_details_experience">
                    <div className="card_details_experience-heading">Minimum Experience</div>
                    <div className="card_details_experience-years">
                        {
                            jobData_items.minExp ?
                                (` ${jobData_items.minExp} years`)
                                : ("Not Given")
                        }
                    </div>
                </div>

                <button className='card_details-applyButton'>Easy Apply</button>
                <button className='card_details-referralButton'>Unblock referral asks</button>
            </div>
        </div>
    )
}

export default JobCard
