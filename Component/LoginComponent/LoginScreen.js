import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import { Field, reduxForm ,SubmissionError ,reset} from 'redux-form';
import {useSelector,useDispatch,connect} from 'react-redux';
import {fetchSignIn} from '../../Action/index';
import MyFrom from "./form"
import CircularProgress from '@material-ui/core/CircularProgress';
import {
   
    useHistory,
    useLocation
  } from "react-router-dom";
  
const styles = (theme) => ({
  paper: {
    maxWidth: 700,
    // margin: 'auto',
    overflow: 'hidden',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
  contentWrapper: {
    margin: '40px 16px',
  },
});

 
function Content(props) {
    const { classes } = props;
    const history=useHistory();
 
 const loginForm=(showResults)=>{
  
 return <MyFrom  onSubmit={showResults} />
 
     
   
 }
 
  function showResults(values,dispatch) {
     
   
  console.log("values: ",values)
 dispatch(fetchSignIn(values.email,values.password))
 setTimeout(()=>{
  
    if(!props){
        console.log("login incorrect")
         }else{
          console.log("log in success push history",props)
          history.push("/")
         }

   },3000)
   

  
} 
  return (
    
      
      <div className={classes.contentWrapper}>
        
   <Typography    variant="h6" gutterBottom>
   Login
      </Typography>
  
      {loginForm(showResults)}
      </div>
 
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};
Content = reduxForm({
  form: 'loginForm' ,
   
})(Content)
 
 
const mapStateToProps=state=>({
    usersign:state.usersign,
   
  });
export default connect(mapStateToProps)(withStyles(styles)(Content));
// export default withStyles(styles)(Content);