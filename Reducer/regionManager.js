import {GET_REGION_MANGER} from "../Action/type";

const intialState={
     regionManger:[],
   
}

const regionManeger=(state=intialState,action)=>{
    switch (action.type){
        // register success
        case  GET_REGION_MANGER :
            return{
                regionManger:action.data
            }
             
    default :return state;
}
}

export default regionManeger;