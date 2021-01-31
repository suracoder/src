import { GET_ALL_NATION_EMPLOYEE } from "../Action/type";
const intialState = {
    nationEmployee:[],
    isLoading:false,
    error:null

}


const getNationEmployeeReducer = (state = intialState, action) => {
    switch (action.type) {
        case GET_ALL_NATION_EMPLOYEE:

            return {
                nationEmployee: action.nationEmployee,
                isLoading: action.isLoading,   
                error: action.error


            }

        default: return state;
    }
}
export default getNationEmployeeReducer;
