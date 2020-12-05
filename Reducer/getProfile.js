 
import {GET_PROFILE} from "../Action/type";

const intialState={
    profile:[],
    error:null
}

const getProfile=(state=intialState,action)=>{
    switch (action.type){
        // register success
        case  GET_PROFILE :
            return{
                profile:action.profile,
                error:action.error
            }
             
    default :return state;
}
}

export default getProfile;