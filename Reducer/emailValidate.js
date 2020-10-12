
import {EMAILVALIDATE} from "../Action/type";


const intialState={
    isDuplicate:false,
 
}

const validateEmail=(state=intialState,action)=>{
    switch (action.type){
   
        case  EMAILVALIDATE :
            return{
                isRegister:action.isRegister
            }
 
     
    default :return state;
}
}

export default validateEmail;