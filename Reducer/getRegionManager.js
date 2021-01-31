import {GET_REGION_MANGER} from "../Action/type";

const intialState={
   

     regionManger:[],
    isLoading:false,
    error:null
}

const regionManegerReducer=(state=intialState,action)=>{
    switch (action.type){
        // register success
        case  GET_REGION_MANGER :
            return{
                regionManger:action.regionManger
            }
             
    default :return state;
}
}

export default regionManegerReducer;