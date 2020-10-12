 
import {GET_ZONE_TRAFFIC,MAKE_NULL_ZT} from "../Action/type";

const intialState={
    zoneTraffic:[],
   
}

const zoneTrf=(state=intialState,action)=>{
    switch (action.type){
        // register success
        case  GET_ZONE_TRAFFIC :
            return{
                zoneTraffic:action.data
            }
            case MAKE_NULL_ZT :
                 return {
                     zoneTraffic:[]
                 }
    default :return state;
}
}

export default zoneTrf;