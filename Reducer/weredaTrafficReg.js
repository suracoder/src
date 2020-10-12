
import { WEREDA_TRAFFIC_REG_SUCCESS,
    WEREDA_TRAFFIC_REG_ERROR,
    MAKE_W_T_SPINNER,
    RECEIV_W_T,
    FORM_W_T_SENDCONFIRM} from "../Action/type";


const intialState={
    isRegister:null,
    error:null,
    spinner:false,
    employee:[]
}

const weredaTrafficReg_reducer=(state=intialState,action)=>{
    switch (action.type){
        // register success
        case  WEREDA_TRAFFIC_REG_SUCCESS :
            return{
                isRegister:action.isRegister
            }
            case  MAKE_W_T_SPINNER :
              
                return{
                  
                    spinner:action.isLoading
                }
                case  RECEIV_W_T :
                    
                console.log("on receving ",action.employee)
                return{
                  
                    employee:action.employee
                }
                case  FORM_W_T_SENDCONFIRM :                    
                    console.log("on receving ",action.confirm)
                    return{
                      
                        isRegister:null
                    }
                    
        //   registration error
         case WEREDA_TRAFFIC_REG_ERROR  :
     return{
        isRegister:action.isRegister
    }
    default :return state;
}
}

export default weredaTrafficReg_reducer;