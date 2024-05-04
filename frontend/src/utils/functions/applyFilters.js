// Function to apply filters on job data
export const applyFilters = (data, roles, experience, work, salary, location, searchTerm) => {

    let filteredData = data;

    //Search (startsWith() used to check whether a string starts with a specific substring)
    if (searchTerm) {
        filteredData = filteredData.filter(job =>
            job.companyName.toLowerCase().startsWith(searchTerm.toLowerCase())
        );
    }

    // Filter by roles
    if (roles.length > 0) {
        filteredData = filteredData.filter(job => roles.includes(job.jobRole));
    }

    // Filter by experience
    if (experience.length > 0) {

        filteredData = filteredData.filter(job => {
            const selectedExperience = Math.max(...experience);
            return job.minExp >= selectedExperience
        });
    }

    // Filter by work arrangement
    if (work.length > 0) {
        filteredData = filteredData.filter(job => work.includes(job.location));
    }

    // Filter by salary
    if (salary.length > 0) {
        filteredData = filteredData.filter(job => {
            const selectedSalary = Math.max(...salary);
            return job.minJdSalary >= selectedSalary;
        });
    }

    // Filter by location
    if (location.length > 0) {
        filteredData = filteredData.filter(job => location.includes(job.location));
    }

    return filteredData;
};