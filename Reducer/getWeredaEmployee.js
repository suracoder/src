
 
import {GET_WEREDA_EMPLOYEE,MAKE_NULL_WE} from "../Action/type";

const intialState={
    weredaEmployee:[],
   
}

const weredaEmp=(state=intialState,action)=>{
    switch (action.type){
        // register success
        case  GET_WEREDA_EMPLOYEE :
            return{
                weredaEmployee:action.data
            }
             case MAKE_NULL_WE :
                 return{
                    weredaEmployee:[]
                 }
    default :return state;
}
}

export default weredaEmp;