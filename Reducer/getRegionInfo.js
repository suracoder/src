import {GET_REGION} from "../Action/type";

const intialState={
     region:[],
   
}

const regionData=(state=intialState,action)=>{
    switch (action.type){
        // register success
        case  GET_REGION  :
            return{
                region:action.region
            }
             
    default :return state;
}
}

export default regionData;