import React,{useEffect} from 'react';
 
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import SurafelTable from "./table"
import { useSelector, useDispatch, connect } from 'react-redux';
import {fetchRegionEmployee} from "../../../../Action/index"
import {Redirect,useHistory, useLocation, useParams ,useRouteMatch } from "react-router-dom";
import ManagerProfile from "../../managerProfile"
import Map from "../../../map"
import RegionEmployee from "./regionemployee"

const useStyles = makeStyles((theme) => ({
  
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
}));
function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
function RegionDetail(props){
  const dispatch=useDispatch()
let history=useHistory()
const [spacing, setSpacing] = React.useState(2);
const classes = useStyles();

    let { path, url } = useRouteMatch();
    let { name } = useParams();
    // console.log("region detail ",history)


    useEffect(()=>{
      dispatch(fetchRegionEmployee(name))
    })
    console.log("route name ",useParams())
    console.log("region detail ",props.regionData.region)
    let innerValue=[];
    let managerProfile={}
    var foundValue = props.regionData.region.filter( obj=>obj.name===name);
    foundValue.map((i)=>{
   
      innerValue=i;
      if(i.regionManager!==null){
      managerProfile={
        name:`${i.regionManager.user.firstName}  ${i.regionManager.user.lastName}`,
        image:'https://placeimg.com/640/480/people',
        id:i.regionManager.user.id,
        role:"region Manager",
        email:i.regionManager.user.email
    }}
      console.log("io=>",i)
    })
    console.log("=>IOIO ",foundValue)
console.log("this foud value ", foundValue)
console.log("this inner value ", innerValue)
    return <div>
    <Grid container spacing={2}>
    
      <Grid item xs={12}>
      <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick}>
        Material-UI
      </Link>
      <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
        Core
      </Link>
      <Link
        color="textPrimary"
        href="/components/breadcrumbs/"
        onClick={handleClick}
        aria-current="page"
      >
        Breadcrumb
      </Link>
    </Breadcrumbs>
        {/* <Paper className={classes.paper}>xs=12</Paper> */}
      </Grid>
   
     
      <Grid item xs={3}>
        {/* <Paper className={classes.paper}> */}
        <ManagerProfile {...managerProfile}/>

        {/* </Paper> */}
      </Grid>
      <Grid style={{position: 'relative', height: '60vh'}} item xs={9} >
                       <Map/>
                    </Grid>
      <Grid item xs={6} >
        <Paper className={classes.paper}>xs=6 sm=3</Paper>
      </Grid>
      <Grid item xs={6} >
        <Paper className={classes.paper}>xs=6 sm=3</Paper>
      </Grid>
     
      <Grid item xs={6} >
        <SurafelTable {...innerValue}/>
      </Grid>
      <Grid item xs={6} >
      <RegionEmployee/>
      </Grid>
    </Grid>
  
  </div>
}
const mapStateToProps=state=>({
  
  regionData:state.regionData
})
export default connect(mapStateToProps)(RegionDetail)