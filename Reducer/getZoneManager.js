import {GET_ZONE_MANAGER} from "../Action/type";

const intialState={
   

     zoneManger:[],
    isLoading:false,
    error:null
}

const zoneManegerReducer=(state=intialState,action)=>{
    switch (action.type){
        // register success
        case  GET_ZONE_MANAGER :
            return{
                zoneManger:action.regionManger
            }
             
    default :return state;
}
}

export default zoneManegerReducer;