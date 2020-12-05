import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {TextField,Grid,Button} from "@material-ui/core"
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'

import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
// import {fetchSignIn,fetchPermission} from '../../../../Action/index';
// import asyncValidate from '../../../asyncValidate';

// const validate = values => {
//   const errors = {};

//   if (!values.email) {
//      errors.email = 'Required'
//    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//      errors.email = 'Invalid email address'
//    }

//    return errors;
// }

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl error={touched && error}>
    <InputLabel htmlFor="age-native-simple">Hospital type</InputLabel>
    <Select
      native
      {...input}
      {...custom}
      inputProps={{
        name: 'hospital Type',
        id: 'age-native-simple'
      }}
    >
      {children}
    </Select>
    {/* {renderFromHelper({ touched, error })} */}
  </FormControl>
)
const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.userAddress) {
    errors.userAddress = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  }
  
  return errors;
};
const onSubmit = (values,dispatch) => {
// dispatch(fetchSignIn("b.com","12345"));
 console.log("sited siketelat")
}

const renderTextField = (
    { input, label, value, meta: { touched, error }, ...custom },
  ) => {
    // console.log(input)
    // console.log(label)

    return(
      <div>
       
      <TextField
          id="outlined-helperText"
          label={label}         
          helperText={touched && error && <span>{error}</span>}
          variant="outlined"
          error={touched && error && <span>{error}</span>}
          {...input}
        />
    {/* <TextField
              required
              label={label}
              fullWidth
              error 
              autoComplete="cc-number"
              {...input}
          
              
            /> */}
            </div>
  )
  };
 
class MyForm extends React.Component{
  
onSubmit(){
console.log("dfttrr")
}
  render(){
    // const {handleSubmit}=this.props;
    // console.log(this.props)
    return(
      <form onSubmit={this.props.handleSubmit}>
      <Grid container xs={7}   spacing={3}>

        
      <Grid item xs={12} md={6} spacing={3}>
        
        <Field
          name="name"
          component={renderTextField}
          label="Hospital Name"
        />
        </Grid>
        <Grid item xs={12} md={6} spacing={3}>
        
        <Field
          // classes={classes}
          name="hospitalType"
          component={renderSelectField}
          label="Favorite Color"
        >
          <option value="" />
          <option value={'Small hospital'}>Small hospital</option>
          <option value={'Medium hospital'}>Medium hospital</option>
          <option value={'Large hospital'}>Large hospital</option>
        </Field>
        </Grid>
        <Grid item xs={12} md={6} spacing={3}>
        
        <Field
          name="phone_no"
          component={renderTextField}
          label="Phone number"
        />
        </Grid>
       
        <Grid item xs={12} md={6} >
        <Field
          name="firstName"
          component={renderTextField}
          label="First Name"
        />
        </Grid>
        <Grid item xs={12} md={6} >
        <Field
          name="lastName"
          component={renderTextField}
          label="Last Name"
        />
        </Grid>
        <Grid item xs={12} md={6}>
        <Field
          name="email"
          component={renderTextField}
          label="Email"
        />
        </Grid>
        <Grid item xs={12} md={6}>
        <Field
          name="password"
          component={renderTextField}
          label="Password"
        />
        </Grid>
        <Grid item xs={12} md={6}>
        <Field
          name="userAddress"
          component={renderTextField}
          label="user Address"
        />
        </Grid>
        <Grid item xs={12}>
          {/* <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          /> */}
           <button type="submit">Submit</button>
         {/* <Button   type="submit" variant="contained" color="primary"> */}
  {/* Primary
  </Button> */}
        </Grid>
      </Grid>
      </form>
    );
  }
}
export default reduxForm({
  form: 'nationform',
  // asyncValidate,
 
  validate
  
})(MyForm);
 
