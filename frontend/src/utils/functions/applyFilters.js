// Function to apply filters on job data
export const applyFilters = (data, roles, experience, work, salary, location, searchTerm) => {
    let filteredData = data;

    // Filter by search term (startsWith() is used to check whether a string starts with a specific substring)
    if (searchTerm) {
        filteredData = filteredData.filter(job =>
            job.companyName?.toLowerCase().startsWith(searchTerm.toLowerCase())
        );
    }

    // Filter by roles
    if (roles.length > 0) {
        const roleValues = roles.map(role => role.value?.toLowerCase());
        filteredData = filteredData.filter(job => roleValues.includes(job.jobRole?.toLowerCase()));
    }

    // Filter by experience
    if (experience.length > 0) {
        const selectedExperience = Math.max(...experience.map(e => Number(e.value)));
        filteredData = filteredData.filter(job => job.minExp >= selectedExperience);
    }

    // Filter by work arrangement
    if (work.length > 0) {
        const workValues = work.map(workItem => workItem.value);
        filteredData = filteredData.filter(job => workValues.includes(job.location));
    }

    // Filter by salary
    if (salary.length > 0) {
        const selectedSalary = Math.max(...salary.map(s => Number(s.value)));
        filteredData = filteredData.filter(job => job.minJdSalary >= selectedSalary);
    }

    // Filter by location
    if (location.length > 0) {
        const locationValues = location.map(loc => loc.value);
        filteredData = filteredData.filter(job => locationValues.includes(job.location));
    }

    return filteredData;
};
