
import { REGION_EMP_REG_SUCCESS,
    REGION_EMP_REG_ERROR,
    MAKE_R_E_SPINNER,
    RECEIV_R_E,
    FORM_R_E_SENDCONFIRM} from "../Action/type";


const intialState={
    isRegister:null,
    error:null,
    spinner:false,
    employee:[]
}

const regionEmpReg_reducer=(state=intialState,action)=>{
    switch (action.type){
        // register success
        case  REGION_EMP_REG_SUCCESS :
            return{
                isRegister:action.isRegister
            }
            case  MAKE_R_E_SPINNER :
              
                return{
                  
                    spinner:action.isLoading
                }
                case  RECEIV_R_E :
                    
                console.log("on receving ",action.employee)
                return{
                  
                    employee:action.employee
                }
                case  FORM_R_E_SENDCONFIRM :                    
                    console.log("on receving ",action.confirm)
                    return{
                      
                        isRegister:null
                    }
                    
        //   registration error
         case REGION_EMP_REG_ERROR  :
     return{
        isRegister:action.isRegister
    }
    default :return state;
}
}

export default regionEmpReg_reducer;