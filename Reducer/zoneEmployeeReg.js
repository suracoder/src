
import { ZONE_EMP_REG_SUCCESS,
    ZONE_EMP_REG_ERROR,
    MAKE_Z_E_SPINNER,
    RECEIV_Z_E,
    FORM_Z_E_SENDCONFIRM

} from "../Action/type";


const intialState={
    isRegister:null,
    error:null,
    spinner:false,
    employee:[]
}

const zoneEmpReg_reducer=(state=intialState,action)=>{
    switch (action.type){
        // register success
        case  ZONE_EMP_REG_SUCCESS :
            return{
                isRegister:action.isRegister
            }
            case  MAKE_Z_E_SPINNER :
              
                return{
                  
                    spinner:action.isLoading
                }
                case  RECEIV_Z_E :
                    
                console.log("on receving ",action.employee)
                return{
                  
                    employee:action.employee
                }
                case  FORM_Z_E_SENDCONFIRM :                    
                    console.log("on receving ",action.confirm)
                    return{
                      
                        isRegister:null
                    }
                    
        //   registration error
         case ZONE_EMP_REG_ERROR  :
     return{
        isRegister:action.isRegister
    }
    default :return state;
}
}

export default zoneEmpReg_reducer;