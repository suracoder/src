
import { NATIONE_EMP_REG_SUCCESS,
    NATIONE_EMP_REG_ERROR,
    MAKE_N_E_SPINNER,
    RECEIV_N_E,
    FORM_N_E_SENDCONFIRM} from "../Action/type";


const intialState={
    isRegister:null,
    error:null,
    spinner:false,
    employee:[]
}

const nationEmpReg_reducer=(state=intialState,action)=>{
    switch (action.type){
        // register success
        case  NATIONE_EMP_REG_SUCCESS :
            return{
                isRegister:action.isRegister
            }
            case  MAKE_N_E_SPINNER :
              
                return{
                  
                    spinner:action.isLoading
                }
                case  RECEIV_N_E :
                    
                console.log("on receving ",action.employee)
                return{
                  
                    employee:action.employee
                }
                case  FORM_N_E_SENDCONFIRM :                    
                    console.log("on receving ",action.confirm)
                    return{
                      
                        isRegister:null
                    }
                    
        //   registration error
         case NATIONE_EMP_REG_ERROR  :
     return{
        isRegister:action.isRegister
    }
    default :return state;
}
}

export default nationEmpReg_reducer;