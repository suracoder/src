
import {
    REGION_MNG_REG_SUCCESS,
    REGION_MNG_REG_ERROR,
    MAKE_R_M_SPINNER,
    RECEIV_R_M,
    FORM_R_M_SENDCONFIRM

} from "../Action/type";


const intialState = {
    isRegister: null,
    error: null,
    spinner: false,
    employee: []
}

const regionMgrReg_reducer = (state = intialState, action) => {
    switch (action.type) {
        // register success
        case REGION_MNG_REG_SUCCESS:
            return {
                isRegister: action.isRegister,
                error:action.error
            }
        case MAKE_R_M_SPINNER:

            return {

                spinner: action.isLoading
            }
        case RECEIV_R_M:

            console.log("on receving ", action.employee)
            return {

                employee: action.employee
            }
        case FORM_R_M_SENDCONFIRM:
            console.log("on receving ", action.confirm)
            return {

                isRegister: null
            }

        //   registration error
        case REGION_MNG_REG_ERROR:
            return {
                // isRegister:action.isRegister
                error: action.error
            }
        default: return state;
    }
}

export default regionMgrReg_reducer;