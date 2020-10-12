
import { ZONE_TRAFFIC_REG_SUCCESS,
    ZONE_TRAFFIC_REG_ERROR,
    MAKE_Z_T_SPINNER,
    RECEIV_Z_T,
    FORM_Z_T_SENDCONFIRM} from "../Action/type";


const intialState={
    isRegister:null,
    error:null,
    spinner:false,
    employee:[]
}

const zoneTrafficReg_reducer=(state=intialState,action)=>{
    switch (action.type){
        // register success
        case  ZONE_TRAFFIC_REG_SUCCESS :
            return{
                isRegister:action.isRegister
            }
            case  MAKE_Z_T_SPINNER :
              
                return{
                  
                    spinner:action.isLoading
                }
                case  RECEIV_Z_T :
                    
                console.log("on receving ",action.employee)
                return{
                  
                    employee:action.employee
                }
                case  FORM_Z_T_SENDCONFIRM :                    
                    console.log("on receving ",action.confirm)
                    return{
                      
                        isRegister:null
                    }
                    
        //   registration error
         case ZONE_TRAFFIC_REG_ERROR  :
     return{
        isRegister:action.isRegister
    }
    default :return state;
}
}

export default zoneTrafficReg_reducer;