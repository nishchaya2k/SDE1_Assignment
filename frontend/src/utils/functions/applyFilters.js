// Function to apply filters on job data
export const applyFilters = (data, filters, searchTerm) => {

    let filteredData = data;

    //Search (startsWith() used to check whether a string starts with a specific substring)
    if (searchTerm) {
        filteredData = filteredData.filter(job =>
            job.companyName.toLowerCase().startsWith(searchTerm.toLowerCase())
        );
    }

    // Filter by roles
    if (filters.roles.length > 0) {
        filteredData = filteredData.filter(job => filters.roles.includes(job.jobRole));
    }

    // Filter by experience
    if (filters.experience.length > 0) {

        filteredData = filteredData.filter(job => {
            const selectedExperience = Math.max(...filters.experience);
            return job.minExp >= selectedExperience
        });
    }

    // Filter by work arrangement
    if (filters.work.length > 0) {
        filteredData = filteredData.filter(job => filters.work.includes(job.location));
    }

    // Filter by salary
    if (filters.salary.length > 0) {
        filteredData = filteredData.filter(job => {
            const selectedSalary = Math.max(...filters.salary);
            return job.minJdSalary >= selectedSalary;
        });
    }

    // Filter by location
    if (filters.location.length > 0) {
        filteredData = filteredData.filter(job => filters.location.includes(job.location));
    }

    return filteredData;
};