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
import {createNationEmployee,form_n_e_SendConfirm} from '../../../../Action/index';
import MyFrom from "./form"
import CircularProgress from '@material-ui/core/CircularProgress';

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
  const dispatchs=useDispatch();
  console.log("spinner: ", props.nation)
 
  const data={...props.nation.employee}
  // const dismiss=()=> dispatchs(formSendConfirm(null))
  function dismiss(values,dispatch) {
    dispatch(form_n_e_SendConfirm(false))
  }
  console.log("data: ",data.email)
 const nationempfrom=(showResults)=>{
   if(props.nation.isRegister===null){
 return <MyFrom  onSubmit={showResults} />
   }else{
    if(props.nation.isRegister===false){
      return <div>error</div>
    }if(props.nation.spinner===true){
  
        return   <CircularProgress />
    
      
    }

    else{
      return <div> <Paper className={classes.paper}>
      <MenuList>
        <MenuItem>{data.firstName}</MenuItem>
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
 dispatch(createNationEmployee(values.firstName,values.lastName,values.email,values.password,values.useraddress))

 if(props.nation.isRegister===false){
console.log("is dispaly error")
 }else{
     dispatch(reset("nationform"))
    }
} 
  return (
    <Paper className={classes.paper}>
      {/* <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
          
            <Grid item>
               
              
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar> */}
      <div className={classes.contentWrapper}>
        {/* <Typography color="textSecondary" align="center">
          No users for this project yet
        </Typography> */}
{/*      
 <Button onClick={submits}>content</Button> */}
   <Typography    variant="h6" gutterBottom>
        Payment method
      </Typography>
    
      {nationempfrom(showResults)}
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
 nation:state.nationEmpReg

});
const mapDispatchToProps = dispatch => ({
  clearCompleted: () => dispatch(form_n_e_SendConfirm(null))
})

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Content));
// export default withStyles(styles)(Content);