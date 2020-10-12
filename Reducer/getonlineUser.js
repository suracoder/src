import {GET_ONLINE_USER} from "../Action/type";

const intialState={
     onlineUser:[],
   
}

const getOnlineUser=(state=intialState,action)=>{
    switch (action.type){
        // get online user success
        case  GET_ONLINE_USER  :
            return{
                onlineUser:action.users
            }
             
    default :return state;
}
}

export default getOnlineUser;