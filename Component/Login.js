import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import Input from '@material-ui/core/Input'
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { Button } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {useSelector,useDispatch} from 'react-redux';
import {fetchSignIn,fetchPermission,fetchRegion} from '../Action/index';
 
import {
   
  useHistory,
  useLocation
} from "react-router-dom";

import {connect} from "react-redux";


const useStyles = makeStyles((theme) => ({
  main: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5),
    margin: 'auto',
    maxWidth: 500,
    backgroundColor:"#e0f2f1"
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  titleCs:{
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  
  },
  formCs:{
    '& > *': {
      padding: theme.spacing(1),

      margin: theme.spacing(1),
     
    },
  },
 inputRoot: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    // width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  }
  ,
  divider1: {
    height: 0.01,
    margin: 1,
  }
  
}));

let email="";
let password="";
const passwordFunc=(e)=>{
  
  password=e.target.value;
}
const emailFunc=(e)=>{
 
email=e.target.value;
 
}
 
 function ComplexGrid(props) {
  const dispatch=useDispatch()
   console.log("email of email",email)
  const classes = useStyles();
  const history=useHistory();
  // console.log("this is login permission check ",props.userPermission   )
 console.log("history props",useHistory())
  console.log(props)
console.log("my props ",props);
console.log()
const signin=()=>{
  dispatch(fetchSignIn(email,password));
  // props.dispatch(fetchPermission("df"));
  // props.dispatch(fetchRegion());
 if(!props){
console.log("login incorrect")
 }else{
  console.log("log in success push history",props)
  history.push("/")
 }
}
  return (

    <div className={classes.main} >
 <div className={classes.titleCs}> 
    
 
    </div> 
    
      <Paper className={classes.paper}>
      <h1>Login Page</h1>
     
       <form className={classes.formCs} noValidate onSubmit={signin}>
       <Paper  className={classes.inputRoot}>
      <IconButton className={classes.iconButton} aria-label="menu">
       M
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <Input
        className={classes.input}
        placeholder="Your Email"
        type="email"
       onChange={emailFunc}
        inputProps={{ 'aria-label': 'Your Email' }}
      />
 
      <Divider className={classes.divider} orientation="vertical" />
     
    </Paper>
    <Paper className={classes.inputRoot}>
      <IconButton className={classes.iconButton} aria-label="menu">
       M
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />

      <Input
        className={classes.input}
        placeholder="Your Password"
        onChange={passwordFunc}
        type="password"
        inputProps={{ 'aria-label': 'Your Password' }}
      />
 
      <Divider className={classes.divider} orientation="vertical" />
     
    </Paper>
     

    <FormControlLabel value="female" control={<Radio />} label="Remember me" /><br></br>
    <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                  
                  >
                    Submit
                  </Button>
    </form>
   
  
       </Paper>
      
    </div>
  );
}

 
const mapStateToProps=state=>({
  usersign:state.usersign,
  userPermission:state.userPermission
});
export default connect(mapStateToProps)(ComplexGrid);
