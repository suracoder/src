import React from 'react';
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
import {createWeredaEmployee, form_w_e_SendConfirm} from '../../../../Action/index';
import MyFrom from "./form"
import CircularProgress from '@material-ui/core/CircularProgress';
 
const styles = (theme) => ({
  paper: {
     
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
  const dispatchs=useDispatch();
 
 
  const data={...props.weredaEmpData.employee}
  // const dismiss=()=> dispatchs(formSendConfirm(null))
  function dismiss(values,dispatch) {
    dispatch(form_w_e_SendConfirm(false))
  }
  console.log("data surafel: ",data.uData)

 
  
 const regionManagerfrom=(showResults)=>{
   
   if(props.weredaEmpData.isRegister===null){
 return <MyFrom  onSubmit={showResults} />
   }else{
    if(props.weredaEmpData.isRegister===false){
      return <div>error
         <Button onClick={props.clearCompleted}> Confim</Button>
      </div>
    }if(props.weredaEmpData.spinner===true){
  
        return   <CircularProgress />
    
      
    }

    else{
      return <div> <Paper className={classes.paper}>
      <MenuList>
        <MenuItem>{}</MenuItem>
        <Divider light />

        <MenuItem>{data.lastName}</MenuItem>
        <Divider light />
        <MenuItem>{data.email}</MenuItem>
      </MenuList>
    
    </Paper>
    <Button onClick={props.clearCompleted}> Confim</Button>
    </div>

    }
   }
 }
 
  function showResults(values,dispatch) {
      // await sleep(1000);
   
  console.log("values: ",values)
 dispatch(createWeredaEmployee(values.firstName,values.lastName,values.email,values.password,values.useraddress))

 if(props.weredaEmpData.isRegister===false){
console.log("is dispaly error")
 }else{
     dispatch(reset("weredaEmployeeForm"))
    }
} 
  return (
    <Paper className={classes.paper}>
      
      <div className={classes.contentWrapper}>
        
  
  
      {regionManagerfrom(showResults)}
      </div>
    </Paper>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};
Content = reduxForm({
  form: 'editForm' ,
   
})(Content)
const mapStateToProps=state=>({
 weredaEmpData:state.weredaEmpReg

});
const mapDispatchToProps = dispatch => ({
  clearCompleted: () => dispatch(form_w_e_SendConfirm(null))
})

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Content));
// export default withStyles(styles)(Content);