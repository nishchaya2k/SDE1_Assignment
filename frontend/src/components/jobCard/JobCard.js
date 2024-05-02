import React from 'react'
import "./JobCard.css"

const JobCard = () => {
    return (
        <div className='card'>
            <div className="card_details">
                <div className='card_details-post'>Posted 6 days ago</div>
                <div className="card_details-companyName">DeGenerous</div>
                <div className='card_details-jobTitle'>Software Productivity Engineer</div>
                <div className='card_details-location'>Bangalore</div>
                <div className='card_details-salaryRange'>Estimated Salary: &#8377;30 - &#8377;50 LPA </div>
                <div className='card_details_aboutCompany'>
                    <p className='card_details_aboutCompany-heading'>About Company</p>
                    <div className="card_details_aboutCompany-description">
                        This is a sample job and you must have displayed it to understand that its not just some random Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eos ex ullam rem, nobis, deleniti enim consequuntur reiciendis facilis voluptatibus consectetur dolores est excepturi fuga dolor ipsa quidem doloribus pariatur.
                    </div>
                </div>
                <div className="card_details_experience">
                    <div className="card_details_experience-heading">Minimum Experience</div>
                    <div className="card_details_experience-years">6 years</div>
                </div>
                <button className='card_details-applyButton'>Easy Apply</button>
                <button className='card_details-referralButton'>Unblock referral asks</button>
            </div>
        </div>
    )
}

export default JobCard
