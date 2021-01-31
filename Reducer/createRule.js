import { CREATE_RULE } from "../Action/type";
const intialState = {
    success: null,
    rData: [],
    isLoading: false,
    error: null
}


const createRule = (state = intialState, action) => {
    switch (action.type) {
        case CREATE_RULE:

            return {
                success: action.success,
                rData: action.rData,
                isLoading: action.isLoading,
                error: action.error
            }

        default: return state;
    }
}
export default createRule;
