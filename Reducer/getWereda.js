import { GET_WEREDA,MAKE_NULL_W } from "../Action/type";
 

const intialState={
     wereda:[],
   
}

const weredaData=(state=intialState,action)=>{
    switch (action.type){
        // register success
        case  GET_WEREDA  :
            return{
                wereda:action.wereda
            }
            case MAKE_NULL_W:
                return{
                    wereda:[]
                }
             
    default :return state;
}
}

export default weredaData;