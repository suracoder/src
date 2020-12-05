import { CREATE_HOSPITAL,RESET_HOSPITAL } from "../Action/type"
const intialState = {
    success: null,
    rData: [],
    isLoading: false,
    error: null
}

const createHospital = (state = intialState, action) => {
    switch (action.type) {
        // get online user success
        case CREATE_HOSPITAL:
            return {
                success: action.success,
                rData: action.rData,
                isLoading: action.isLoading,
                error: action.error
            }
case RESET_HOSPITAL:
            return {
                success: action.success,
                rData: action.rData,
                isLoading: action.isLoading,
                error: action.error
            }
        default: return state;
    }
}

export default createHospital;