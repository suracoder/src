 

import React from "react";
import Login from "./Component/Login"
import Body from "./Component/Body/mainPage"
import { SnackbarProvider, useSnackbar } from 'notistack';
import lifecycle from 'react-pure-lifecycle';
import Login2 from "./Component/LoginComponent/LoginScreen"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import PaperBase from "./Component/Paperbase"
import {useSelector,useDispatch,connect} from 'react-redux';

import {fetchSignIn,fetchPermission,signOut,fetchRegion,fetchRegionManager} from './Action/index';
const methods = {
  componentDidMount(props) {
    // props.dispatch(fetchRegion());
    // props.dispatch( fetchRegionManager())
    console.log('I mounted! Here are my props: ', props);
  }
};

  function AuthExample(props) {
    const dispatch=useDispatch()
const history=useHistory();
    console.log("my props ",props.usersign.userValidate);
    // dispatch(fetchPermission("df"));
  return (
    <Router>
       <div>
        <Switch>
         
          <Route path="/login">
            <Login2 myacction={LoginPage} />
          </Route>
          <PrivateRoute isValid={props.usersign.userValidate} path="/">
            {/* <ProtectedPage /> */}
            <PaperBase/>
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

 

 

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  console.log("valdation test",rest.isValid)

   
  return (
 
    <Route
      {...rest}

    
      render={({ location }) =>
      rest.isValid ? (
        // <Body/>
        <PaperBase/>
        ) :
         (
       
  
       <Redirect
       to={{
         pathname: "/login",
         state: { from: location }
       }}
     />
        )
      }
    />
 
  );
}

function PublicPage() {
  const dispatch=useDispatch();
  return  <div>
    
   <button onClick={()=>{
    
          dispatch(signOut());console.log("dfjberferf")
          }}>signout</button> 
  </div> ;
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
  
    
      history.replace(from);
   
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}
const mapStateToProps=state=>({
  usersign:state.usersign
});
export default connect(mapStateToProps)(lifecycle(methods)(AuthExample));

