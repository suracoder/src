 
import React ,{Component,Fragment} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {  } from "module";
import {Provider} from "react-redux";
import thunk from  "redux-thunk"
import {createStore,applyMiddleware} from "redux" 

import App from "./App"
import AllReducer from "./Reducer/index"
import {fetchSignIn} from './Action/index';
import MyCustomChildren from "./Component/SnackMessage";
import { SnackbarProvider, useSnackbar } from 'notistack';
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
// const store =createStore(AllReducer,applyMiddleware(thunk));
const store = createStore(AllReducer, composeWithDevTools(
  applyMiddleware(thunk),
  // other store enhancers if any
));
const root=document.getElementById('root');
 
  let email="surafelworku46@Gmail.com";
  let  password="12345"
 
// store.dispatch(fetchSignIn(email,password));
 console.log("my store:",store.getState())
ReactDOM.render((
  
  <SnackbarProvider  maxSnack={6}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
}}
content={(key, message) => (
    <MyCustomChildren id={key} message={message} />
)}>
  <BrowserRouter>
    <Provider store={store}>
    <Fragment>
{/* <Main/> */}
 
     <App></App>
   

 
    </Fragment>
 </Provider>
 </BrowserRouter>
 </SnackbarProvider>
), root);
 
// const rootElement = document.getElementById('app');

 
serviceWorker.unregister();
 