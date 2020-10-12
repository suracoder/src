
 
import {GET_WEREDA_TRAFFIC,MAKE_NULL_WT} from "../Action/type";

const intialState={
    weredaTraffic:[],
   
}

const weredaTrf=(state=intialState,action)=>{
    switch (action.type){
        // register success
        case  GET_WEREDA_TRAFFIC :
            return{
                weredaTraffic:action.data,

            }
            case MAKE_NULL_WT:
                console.log("MAKE WEREDA FD      wereda traffic nukkkkkkkkkkkk ")
                return{
                    weredaTraffic:[]
                } 
    default :return state;
}
}

export default weredaTrf;