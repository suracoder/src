
import { WEREDA_EMP_REG_SUCCESS,
    WEREDA_EMP_REG_ERROR,
    MAKE_W_E_SPINNER,
    RECEIV_W_E,
    FORM_W_E_SENDCONFIRM} from "../Action/type";


const intialState={
    isRegister:null,
    error:null,
    spinner:false,
    employee:[]
}

const weredaEmpReg_reducer=(state=intialState,action)=>{
    switch (action.type){
        // register success
        case  WEREDA_EMP_REG_SUCCESS :
            return{
                isRegister:action.isRegister
            }
            case  MAKE_W_E_SPINNER :
              
                return{
                  
                    spinner:action.isLoading
                }
                case  RECEIV_W_E :
                    
                console.log("on receving ",action.employee)
                return{
                  
                    employee:action.employee
                }
                case  FORM_W_E_SENDCONFIRM :                    
                    console.log("on receving ",action.confirm)
                    return{
                      
                        isRegister:null
                    }
                    
        //   registration error
         case WEREDA_EMP_REG_ERROR  :
     return{
        isRegister:action.isRegister
    }
    default :return state;
}
}

export default weredaEmpReg_reducer;