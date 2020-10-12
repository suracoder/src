import { SIGNINSUCCESS, SIGNINERROR, SIGNININCORRECT, SIGNOUT } from "../Action/type";

const intialState = {
  token: localStorage.getItem("token"),
  userValidate: localStorage.getItem("userValidate"),
  error: null
}

const singInReducer = (state = intialState, action) => {
  switch (action.type) {
    case SIGNINSUCCESS:
      localStorage.setItem("userValidate", true);
      localStorage.setItem("token", action.data.token)
      return {
        token: action.data,
        userValidate: true,

        error: null


      }
    case SIGNININCORRECT:
      localStorage.clear();
      alert("incorect passowrd")
      // localStorage.setItem("userValidate",false)
      return {
        token: null,
        // userValidate:false,

        error: null
      }
    case SIGNINERROR:
      localStorage.clear();
      return {
        token: null,
        // userValidate:false,
        error: action.error
      }
    case SIGNOUT:
      localStorage.clear();
      // localStorage.setItem("userValidate",false);
      // localStorage.setItem("token",null)
      return {
        token: null,
        userValidate: false,
        signOut: "success"

      }

    default: return state;
  }
}
export default singInReducer;