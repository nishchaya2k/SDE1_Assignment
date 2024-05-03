import React, { useState } from 'react'
import Select from 'react-select';

const filterOptions = [
    { value: "remote", label: "Remote" },
    { value: "hybrid", label: "Hybrid" },
    { value: "in-Office ", label: "In-Office" }
]

const FilterJob = () => {
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRtl, setIsRtl] = useState(false);
    return (
        <div className=''>
            <>
                <Select
                    defaultValue={filterOptions[0]}
                    isDisabled={isDisabled}
                    isLoading={isLoading}
                    isClearable={isClearable}
                    isRtl={isRtl}
                    isSearchable={isSearchable}
                    name="color"
                    options={filterOptions}
                />
            </>
        </div>
    )
}

export default FilterJob

