 
import {GET_ZONE_EMPLOYEE,MAKE_NULL_ZE} from "../Action/type";

const intialState={
    zoneEmployee:[],
   
}

const zoneEmp=(state=intialState,action)=>{
    switch (action.type){
        // register success
        case  GET_ZONE_EMPLOYEE :
            return{
                zoneEmployee:action.data
            }
            case  MAKE_NULL_ZE :
                return {
                    zoneEmployee:[]
                }
             
    default :return state;
}
}

export default zoneEmp;