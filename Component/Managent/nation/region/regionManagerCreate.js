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
import { Field, reduxForm, SubmissionError, reset } from 'redux-form';
import { useSelector, useDispatch, connect } from 'react-redux';
import { createRegionManager, form_r_m_SendConfirm, fetchRegion } from '../../../../Action/index';
import MyFrom from "./regionManagerForm"
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
  const dispatchs = useDispatch();


  const data = { ...props.regionManagerCreate.region }
  console.log("region manGER data", props.regionManagerCreate)
   
  function dismiss(values, dispatch) {
    dispatch(form_r_m_SendConfirm(false))
  }
  
 const callfun=()=>{
  props.clearCompleted();
  props.onDialogClose()
 }

  const regionManagerfrom = (showResults) => {
    if (props.regionManagerCreate.isRegister === null) {
      return <MyFrom onSubmit={showResults} />
    } else {
      if (props.regionManagerCreate.isRegister === false) {
        return <div> {props.regionManagerCreate.error.error.message}
         <Button onClick={props.clearCompleted}> Confim</Button>
        </div>
      } if (props.regionManagerCreate.spinner === true) {

        return <CircularProgress />


      }

      else {
        return <div>
           Region Manager create successfully 


          <Button color="primary" onClick={ ()=>callfun()
        }> finsh</Button>
        </div>

      }
    }
  }

  function showResults(values, dispatch) {
    // await sleep(1000);

    console.log("values: ", values)
    dispatch(createRegionManager(props.regionId, values.firstName, values.lastName, values.email, values.password, values.useraddress))

    if (props.regionManagerCreate.isRegister === false) {
      console.log("is dispaly error")
    } else {
      dispatch(reset("regionManager"))

      setTimeout(() => {

        dispatch(fetchRegion())
      }, 3000)

    }
  }
  return (


    <div className={classes.contentWrapper}>



      {regionManagerfrom(showResults)}
    </div>

  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};
Content = reduxForm({
  form: 'editForm',

})(Content)
const mapStateToProps = state => ({
  regionManagerCreate: state.regionManagerCreate,

});
const mapDispatchToProps = dispatch => ({
  clearCompleted: (props) =>{
   
    dispatch(form_r_m_SendConfirm(null))
 
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Content));
// export default withStyles(styles)(Content);