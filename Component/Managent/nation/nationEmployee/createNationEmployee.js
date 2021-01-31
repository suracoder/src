import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles
} from '@material-ui/core';
import NationForm from "./createNationEmployeeForm"
 
import {createNationEmployeee,setCreateNationEmployee} from "../../../../Action/index"

import { connect} from "react-redux"
const useStyles = makeStyles(() => ({
  root: {}
}));





function ProfileDetails(props) {
  const { classes } = props;
  //   const dispatchs=useDispatch();
  //   const encoded = jwt.decode(localStorage.getItem("wittech"))
  //  const history=useHistory()

console.log("on ",props)
// if(props.nationEmployee.isLoading===true){
//   console.log("i hate u ")
// }

  const regionManagerfrom = (showResults) => {


    return <NationForm onSubmit={showResults}    nationEmployee={props.createNationEmployee} />

  }

  function showResults(values, dispatch) {
    dispatch(createNationEmployeee( values.firstName, values.lastName, values.email, values.password, values.userAddresse))


  }


  return (

    <div>



      {regionManagerfrom(showResults)}
    </div>

  );
}




ProfileDetails.propTypes = {
  className: PropTypes.string
};
const mapStateToProps=state=>({
  createNationEmployee:state.createNationEmployee
 
 });
 const mapDispatchToProps = dispatch => ({
   // clearCompleted: () => dispatch(form_r_e_SendConfirm(null))
 })
 export default  connect(mapStateToProps,mapDispatchToProps)(ProfileDetails);
;
