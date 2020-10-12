import { GET_ZONE,MAKE_NULL_Z } from "../Action/type";
 

const intialState={
     zone:[],
   
}

const zoneData=(state=intialState,action)=>{
    switch (action.type){
        // register success
        case  GET_ZONE  :
            return{
                zone:action.zone
            }
            case MAKE_NULL_Z:
                return{
                    zone:[]
                }
             
    default :return state;
}
}

export default zoneData;