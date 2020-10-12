import {GET_CONVERSATION,GET_CONV_ERROR,ON_CONV_START} from "../Action/type";

const intialState={
     conversation:[],
     isLoading:true,
     error:null
}

const getConversation=(state=intialState,action)=>{
    switch (action.type){
        // get online user success
        case  GET_CONVERSATION  :
            return{
                conversation:action.conversation,
                isLoading:false
            }
        case GET_CONV_ERROR:
            return {
                error:action.error,
                isLoading:false
            }    
        case ON_CONV_START:
            return {
                isLoading:action.isLoading
            } 
    default :return state;
}
}

export default getConversation;