import React from 'react'
import JobCard from '../../components/jobCard/JobCard';
import "./home.css"
import FilterJob from '../../components/filterJob/FilterJob';

const roles_Options = [
    // Engineering roles
    { value: "engineering", label: "Engineering" },
    { value: "software-engineer", label: "Software Engineer" },
    { value: "data-engineer", label: "Data Engineer" },
    { value: "cloud-engineer", label: "Cloud Engineer" },
    { value: "devops-engineer", label: "DevOps Engineer" },

    // Design roles
    { value: "design", label: "Design" },
    { value: "ui-designer", label: "UI Designer" },
    { value: "ux-designer", label: "UX Designer" },
    { value: "graphic-designer", label: "Graphic Designer" },

    // Product roles
    { value: "product", label: "Product" },
    { value: "product-manager", label: "Product Manager" },
    { value: "product-owner", label: "Product Owner" },

    // Operations roles
    { value: "operations", label: "Operations" },
    { value: "operations-manager", label: "Operations Manager" },
    { value: "logistics-coordinator", label: "Logistics Coordinator" },
    { value: "supply-chain-manager", label: "Supply Chain Manager" },
    { value: "project-manager", label: "Project Manager" },

    // Sales roles
    { value: "sales", label: "Sales" },
    { value: "sales-representative", label: "Sales Representative" },
    { value: "account-executive", label: "Account Executive" },
    { value: "business-development", label: "Business Development" },

    // Marketing roles
    { value: "marketing", label: "Marketing" },
    { value: "marketing-manager", label: "Marketing Manager" },
    { value: "digital-marketer", label: "Digital Marketer" },
    { value: "seo-specialist", label: "SEO Specialist" },
    { value: "content-creator", label: "Content Creator" },
    { value: "social-media-manager", label: "Social Media Manager" },

    //Other-engineering 
    { value: "other-engineering", label: "Other Engineering" },
    { value: "mechanical-engineer", label: "Mechanical Engineer" },
    { value: "electrical-engineer", label: "Electrical Engineer" },
    { value: "civil-engineer", label: "Civil Engineer" },
    { value: "chemical-engineer", label: "Chemical Engineer" },
    { value: "biomedical-engineer", label: "Biomedical Engineer" },
    { value: "aerospace-engineer", label: "Aerospace Engineer" },
    { value: "industrial-engineer", label: "Industrial Engineer" },
    { value: "automotive-engineer", label: "Automotive Engineer" },

    // Business Analyst roles
    { value: "business-analyst", label: "Business Analyst" },
    { value: "requirements-analyst", label: "Requirements Analyst" },
    { value: "systems-analyst", label: "Systems Analyst" },

    // Data Analyst roles
    { value: "data-analyst", label: "Data Analyst" },
    { value: "data-scientist", label: "Data Scientist" },
    { value: "data-visualization-specialist", label: "Data Visualization Specialist" },
    { value: "business-intelligence-analyst", label: "Business Intelligence Analyst" },

    // Management roles
    { value: "management", label: "Management" },
    { value: "general-manager", label: "General Manager" },
    { value: "operations-manager", label: "Operations Manager" },
    { value: "project-manager", label: "Project Manager" },
    { value: "team-leader", label: "Team Leader" },

    // Legal roles
    { value: "legal", label: "Legal" },
    { value: "corporate-lawyer", label: "Corporate Lawyer" },
    { value: "compliance-officer", label: "Compliance Officer" },
    { value: "contract-specialist", label: "Contract Specialist" },

    // Human Resources roles
    { value: "hr", label: "Human Resources" },
    { value: "hr-manager", label: "HR Manager" },
    { value: "hr-specialist", label: "HR Specialist" },
    { value: "recruiter", label: "Recruiter" },

    // Finance roles
    { value: "finance", label: "Finance" },
    { value: "finance-manager", label: "Finance Manager" },
    { value: "accountant", label: "Accountant" },
    { value: "financial-analyst", label: "Financial Analyst" }
];
const employee_Options = [
    { value: "1-10", label: "1-10" },
    { value: "11-20", label: "11-20" },
    { value: "21-50", label: "21-50" },
    { value: "51-100", label: "51-100" },
    { value: "101-200", label: "101-200" },
    { value: "500+", label: "500+" }
];
const experience_Options = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" }
];

const work_Options = [
    { value: "remote", label: "Remote" },
    { value: "hybrid", label: "Hybrid" },
    { value: "in-Office ", label: "In-Office" }
];
const salary_Options = [
    { value: "0", label: "0" },
    { value: "10L", label: "10L" },
    { value: "20L", label: "20L" },
    { value: "30L", label: "30L" },
    { value: "40L", label: "40L" },
    { value: "50L", label: "50L" },
    { value: "60L", label: "60L" },
    { value: "70L", label: "70L" }
];

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
