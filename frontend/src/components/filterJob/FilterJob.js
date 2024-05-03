import React, { useState } from 'react'
import Select from 'react-select';


const FilterJob = ({ Options }) => {
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRtl, setIsRtl] = useState(false);
    return (
        <div className=''>
            <>
                <Select
                    isMulti
                    defaultValue={Options[0]}
                    isDisabled={isDisabled}
                    isLoading={isLoading}
                    isClearable={isClearable}
                    isRtl={isRtl}
                    isSearchable={isSearchable}
                    name="color"
                    options={Options}
                />
            </>
        </div>
    )
}

export default FilterJob

