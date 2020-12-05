import React ,{useEffect} from 'react';
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
import { makeStyles } from '@material-ui/core/styles';

import { Field, reduxForm, SubmissionError, reset } from 'redux-form';
import { useSelector, useDispatch, connect } from 'react-redux';
 import { createHospital, form_h_SendConfirm,resetHospital } from '../../../Action/index';
import MyFrom from "./form"
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSnackbar } from 'notistack';
import Map from "./map"
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 150,
  },
  avatar: {
    width: 70,
    height: 30,
  },
  innerCard: {
    width: 100,
  },
  paper: {
    // height: 30,
    // width: 330,
  },
}));



function ShowResults(props) {
  const classes = useStyles();
const[lat,setLat]=React.useState(null);
const [lng,setLng]=React.useState(null);

  const dispatch = useDispatch()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  console.log(props.getHospital)
  function showResults(values, dispatch) {

    console.log(values)

    dispatch(createHospital(values.name, values.hospitalType, values.phone_no, lat, lng, values.firstName, values.lastName, values.email, values.password, values.useraddress))

    if (props.getHospital.error !== null && props.getHospital.success == false) {
      enqueueSnackbar("ereeee");


    }






  }
 
  if (props.getHospital.success == true) {
    enqueueSnackbar("success");
    dispatch(reset("nationform"))
    dispatch(resetHospital(null,[],false,null))
  }
 
 
const setLocation=(lat,lng)=>{
  setLat(lat)
  setLng(lng)
}
console.log(lat,lng)
  return (
    <Grid container >
      <Grid xs={6} md={6} sm={3} item>
        <MyFrom onSubmit={showResults} />
      </Grid>
      <Grid style={{ position: 'relative', height: '60vh' }} item xs={6} >
        <Map onLocationInput={setLocation}/>
      </Grid>
      <Grid xs={12} md={6} sm={3} item>
  <Paper className={classes.paper} >Latitude:{lat}  Longtude:{lng}
  {props.getHospital.isLoading==true?<CircularProgress/>:null}
  </Paper>
      </Grid>
    </Grid>

   
  );
}

ShowResults.propTypes = {
  classes: PropTypes.object.isRequired,
};
ShowResults = reduxForm({
  form: 'editForm',

})(ShowResults)
const mapStateToProps = state => ({
  getHospital: state.getHospital

});
const mapDispatchToProps = dispatch => ({
  // clearCompleted: () => dispatch(form_h_SendConfirm(null))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ShowResults));
// export default withStyles(styles)(Content);