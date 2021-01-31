import { GET_ALL_REGION_EMPLOYEE } from "../Action/type";
const intialState = {
    regionEmployee:[],
    isLoading:false,
    error:null

}


const getRegionEmployeeReducer = (state = intialState, action) => {
    switch (action.type) {
        case GET_ALL_REGION_EMPLOYEE:

            return {
                regionEmployee: action.regionEmployee,
                isLoading: action.isLoading,   
                error: action.error


            }

        default: return state;
    }
}
export default getRegionEmployeeReducer;
