import {GET_ALL_RULE} from "../Action/type";

const intialState={
   

     rule:[],
    isLoading:false,
    error:null
}

const getRuleRedicer=(state=intialState,action)=>{
    switch (action.type){
        // register success
        case  GET_ALL_RULE :
            return{
                rule: action.rule,
                isLoading: action.isLoading,   
                error: action.error


            }
             
    default :return state;
}
}

export default getRuleRedicer;