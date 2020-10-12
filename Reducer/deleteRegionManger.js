import { DELETE_R_M } from "../Action/type";

const intialState = {

    deleted: false
}

const deletRegionManeger = (state = intialState, action) => {
    switch (action.type) {
        // register success

        case DELETE_R_M:
            return {
                deleted: action.success,

            }
        default: return state;
    }
}

export default deletRegionManeger;