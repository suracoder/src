 
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import clsx from 'clsx';
import { useSnackbar } from 'notistack';
// import MuiAlert from '@material-ui/lab/Alert';

import {createRegionEmployeee,setCreateRegionEmployee} from "../../../../Action/index"
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
   
  makeStyles
} from '@material-ui/core';
import {useSelector,useDispatch,connect} from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }
const validate = values => {
  const errors = {}
  const requiredFields = [
    'name',
    'balanceRequest',
    'balanceRecharge',
     
  ]
  requiredFields.forEach(field => {
    console.log(field)
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }
  return errors
}

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
  variant="outlined"
    label={label}
    placeholder={label}
    fullWidth
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)

const renderCheckbox = ({ input, label }) => (
  <div>
    <FormControlLabel
      control={
        <Checkbox
          checked={input.value ? true : false}
          onChange={input.onChange}
        />
      }
      label={label}
    />
  </div>
)

const radioButton = ({ input, ...rest }) => (
  <FormControl>
    <RadioGroup {...input} {...rest}>
      <FormControlLabel value="female" control={<Radio />} label="Female" />
      <FormControlLabel value="male" control={<Radio />} label="Male" />
      <FormControlLabel value="other" control={<Radio />} label="Other" />
    </RadioGroup>
  </FormControl>
)

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return
  } else {      
    return <FormHelperText>{touched && error}</FormHelperText>
  }
}


const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl fullWidth error={touched && error}>

    <InputLabel htmlFor="color-native-simple">{label}</InputLabel>
    <Select
      native

      {...input}
      {...custom}
      inputProps={{
        name: input.name,
        id: 'color-native-simple'
      }}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
)
 
const MaterialUiForm = props => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const history=useHistory()
  const dispatch=useDispatch();
  console.log("props on>>>>>>>>fuck prop ",props.regionEmployee)
  if(props.regionEmployee.success){
    console.log("loading state ")
    history.push("/regionEmployee");
  dispatch(setCreateRegionEmployee(null,[],false,null))
    enqueueSnackbar("regionEmployee create successfuly ",{ 
      variant: 'error',
  });

  }

  if(props.regionEmployee.error!==null){
    console.log("eroor display ",props.regionEmployee.error.error)
    enqueueSnackbar( props.regionEmployee.error.error,{ 
      variant: 'error',
  });
  dispatch(setCreateRegionEmployee(null,[],false,null))
  }
  const { handleSubmit, pristine, reset, submitting, classes } = props
  return (
    <div>
          {/* {props.regionEmployee.error!==null?<Alert severity="error">{ props.regionEmployee.error.error}</Alert>:null}   */}

    <form      
          noValidate 
          onSubmit={handleSubmit}
        >
          <Card>
            <CardHeader
              subheader="The information can be edited"
              title="Region Employee"
            />
            <Divider />
            <CardContent>
              <Grid
                container
                spacing={3}
              >
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                 
               
          < Field
          name="firstName"
          component={renderTextField}
          label="first Name"
        />
     
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                   < Field
          name="lastName"
          component={renderTextField}
          label="last Name"
        />
     
              
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  
               <Field
              name="email"
              label="email"
              component={renderTextField}
          
            />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <Field
              name="password"
              label="password"
              component={renderTextField}
          
            />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <Field
              name="userAddress"
              label="user Address"
              component={renderTextField}
          
            />
                </Grid>
                <Grid
                item
                md={6}
                xs={12}
              >

           
               

             
              </Grid>


              </Grid>
            </CardContent>
            <Divider />
            <Box
              display="flex"
              justifyContent="flex-end"
              p={2}
            >
              <Button
                color="primary"
                disabled={props.regionEmployee.isLoading?true:false}
                variant="contained"
                type="submit"
              >
                Create regionEmployee
              </Button>
            </Box>
          </Card>
        </form>
        </div>
     
  )
}

export default reduxForm({
  form: 'MaterialUiForm', // a unique identifier for this form
  validate,
  
})(MaterialUiForm)