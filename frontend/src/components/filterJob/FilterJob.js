import React, { useState } from 'react'
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';

import "./FilterJob.css"
import {
    rolesAdded,
    experienceAdded,
    workAdded,
    salaryAdded,
    locationAdded,
    selectRoles,
    selectExperience,
    selectWork,
    selectSalary,
    selectLocation
} from '../../store/reducer/filterReducer';


const FilterJob = ({ Options, filterType, placeHolder }) => {
    const dispatch = useDispatch();

    // Create a mapping of filter types to selectors and action creators
    const filterMapping = {
        roles: {
            selector: selectRoles,
            action: rolesAdded,
        },
        experience: {
            selector: selectExperience,
            action: experienceAdded,
        },
        work: {
            selector: selectWork,
            action: workAdded,
        },
        salary: {
            selector: selectSalary,
            action: salaryAdded,
        },
        location: {
            selector: selectLocation,
            action: locationAdded,
        },
    };

    // Retrieve the appropriate selector and action creator based on filterType
    const { selector, action } = filterMapping[filterType] || {};

    // Use the selector unconditionally
    const selectedOptions = useSelector(selector);

    // Define the handleChange function
    const handleChange = (selected) => {
        if (action) {
            dispatch(action(selected));
        } else {
            console.error(`Invalid filter type: ${filterType}`);
        }
    };
    return (
        <div className='select'>
            <>
                <Select
                    isMulti
                    placeholder={placeHolder}
                    // defaultValue={Options[0]}
                    isDisabled={false}
                    isLoading={false}
                    isClearable={true}
                    isRtl={false}
                    isSearchable={true}
                    value={selectedOptions} // Binds selected options to state
                    options={Options}
                    onChange={handleChange}
                />
            </>
        </div>
    )
}

export default FilterJob

