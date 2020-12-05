import { GET_ACCIDENT } from "../Action/type"
const intialState = {
    success: null,
    aData: [],
    isLoading: false,
    error: null
}

const getAccidnet = (state = intialState, action) => {
    switch (action.type) {
        // get online user success
        case GET_ACCIDENT:
            return {
                success: action.success,
                aData: action.aData,
                isLoading: action.isLoading,
                error: action.error
            }
        case GET_ACCIDENT:
            return {
                success: action.success,
                rData: action.aData,
                isLoading: action.isLoading,
                error: action.error
            }
        default: return state;
    }
}

export default getAccidnet;