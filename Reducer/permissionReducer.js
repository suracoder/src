import { GETPERMISSION,FIRST_PERMISSION_STATE} from "../Action/type";
const intialState={
    permission:[] 
}

const permissionReducer=(state=intialState,action)=>{
    switch (action.type){
        case  GETPERMISSION :
            // var j=0;
            // for(var i in action.permission.data){
            //     console.log(action.permission.data[0])
            //     j++;
            //     console.log(j)
            //      action.permission.data[i].map((o)=>{
            //      console.log("i",o["roleName"],{create:o["create"]})
            //     })
            // }
          return  {
           
             permission:action.permission

    }
   
    default :return state;
}
}

export default permissionReducer;