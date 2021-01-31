import { CREATE_REGION_EMPLOYEE } from "../Action/type";
const intialState = {
    success: null,
    nData: [],
    isLoading: false,
    error: null
}


const createNationEmployee = (state = intialState, action) => {
    switch (action.type) {
        case CREATE_REGION_EMPLOYEE:

            return {
                success: action.success,
                nData: action.nData,
                isLoading: action.isLoading,
                error: action.error
            }

        default: return state;
    }
}
export default createNationEmployee;
