import React, { useState } from 'react'
import Select from 'react-select';
import "./FilterJob.css"


const FilterJob = ({ Options, onChange, placeHolder }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleChange = (selectedOptions) => {
        setSelectedOptions(selectedOptions);
        // Call the onChange function passed as a prop to update the parent state
        onChange(selectedOptions);
    }
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
                    name="color"
                    value={selectedOptions} // Binds selected options to state
                    options={Options}
                    onChange={handleChange}
                />
            </>
        </div>
    )
}

export default FilterJob

