
import { 
    ZONE_REG_SUCCESS,
    ZONE_REG_ERROR,
    MAKE_Z_SPINNER,       
    RECEIV_Z,
    FORM_Z_SENDCONFIRM} from "../Action/type";


const intialState={
    isRegister:null,
    error:null,
    spinner:false,
    region:[]
}

const zoneReg_reducer=(state=intialState,action)=>{
    switch (action.type){
        // register success
        case  ZONE_REG_SUCCESS :
            return{
                isRegister:action.isRegister
            }
            case  MAKE_Z_SPINNER :
              
                return{
                  
                    spinner:action.isLoading
                }
                case  RECEIV_Z :
                    
                console.log("on receving ",action.region)
                return{
                  
                    region:action.region
                }
                case  FORM_Z_SENDCONFIRM :                    
                    console.log("on receving ",action.confirm)
                    return{
                      
                        isRegister:null
                    }
                    
        //   registration error
         case ZONE_REG_ERROR  :
     return{
        isRegister:action.isRegister
    }
    default :return state;
}
}

export default zoneReg_reducer;