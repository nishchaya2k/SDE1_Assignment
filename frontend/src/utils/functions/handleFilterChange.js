import { useDispatch } from 'react-redux';
import {
    rolesAdded,
    experienceAdded,
    workAdded,
    salaryAdded,
    locationAdded,
} from '../../store/reducer/filterReducer';

function useHandleFilterChange() {
    const dispatch = useDispatch();

    const handleFilterChange = (filterType, selectedValues) => {
        const values = selectedValues.map(option => option.value);
        switch (filterType) {
            case 'roles':
                dispatch(rolesAdded(values));
                break;
            case 'experience':
                dispatch(experienceAdded(values));
                break;
            case 'work':
                dispatch(workAdded(values));
                break;
            case 'salary':
                dispatch(salaryAdded(values));
                break;
            case 'location':
                dispatch(locationAdded(values));
                break;
            default:
                break;
        }
    };

    return handleFilterChange;
}

export default useHandleFilterChange;
