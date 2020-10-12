 
import {GET_REGION_EMPLOYEE} from "../Action/type";

const intialState={
    regionEmployee:[],
   
}

const regionEmp=(state=intialState,action)=>{
    switch (action.type){
        // register success
        case  GET_REGION_EMPLOYEE :
            return{
                regionEmployee:action.data
            }
             
    default :return state;
}
}

export default regionEmp;