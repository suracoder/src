
import { 
    REGION_REG_SUCCESS,
    REGION_REG_ERROR,
    MAKE_R_SPINNER,       
    RECEIV_R,
    FORM_R_SENDCONFIRM} from "../Action/type";


const intialState={
    isRegister:null,
    error:null,
    spinner:false,
    region:[]
}

const regionReg_reducer=(state=intialState,action)=>{
    switch (action.type){
        // register success
        case  REGION_REG_SUCCESS :
            return{
                isRegister:action.isRegister
            }
            case  MAKE_R_SPINNER :
              
                return{
                  
                    spinner:action.isLoading
                }
                case  RECEIV_R :
                    
                console.log("on receving ",action.region)
                return{
                  
                    region:action.region
                }
                case  FORM_R_SENDCONFIRM :                    
                    console.log("on receving ",action.confirm)
                    return{
                      
                        isRegister:null
                    }
                    
        //   registration error
         case REGION_REG_ERROR  :
     return{
        isRegister:action.isRegister
    }
    default :return state;
}
}

export default regionReg_reducer;