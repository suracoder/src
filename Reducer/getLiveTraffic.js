 
import {GET_LIVE_TRAFFIC} from "../Action/type";

const intialState={
    onlineTraffic:[],
    error:null
}

const liveTraffic=(state=intialState,action)=>{
    switch (action.type){
        // register success
        case  GET_LIVE_TRAFFIC :
            return{
                onlineTraffic:action.data,
                error:action.error
            }
             
    default :return state;
}
}

export default liveTraffic;