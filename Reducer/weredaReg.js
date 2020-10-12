
import { 
    WEREDA_REG_SUCCESS,
    WEREDA_REG_ERROR,
    MAKE_W_SPINNER,       
    RECEIV_W,
    FORM_W_SENDCONFIRM} from "../Action/type";


const intialState={
    isRegister:null,
    error:null,
    spinner:false,
    wereda:[]
}

const weredaReg_reducer=(state=intialState,action)=>{
    switch (action.type){
        // register success
        case  WEREDA_REG_SUCCESS :
            return{
                isRegister:action.isRegister
            }
            case  MAKE_W_SPINNER :
              
                return{
                  
                    spinner:action.isLoading
                }
                case  RECEIV_W :
                    
                console.log("on receving ",action.region)
                return{
                  
                    wereda:action.wereda
                }
                case  FORM_W_SENDCONFIRM :                    
                    console.log("on receving ",action.confirm)
                    return{
                      
                        isRegister:null
                    }
                    
        //   registration error
         case WEREDA_REG_ERROR  :
     return{
        isRegister:action.isRegister
    }
    default :return state;
}
}

export default weredaReg_reducer;