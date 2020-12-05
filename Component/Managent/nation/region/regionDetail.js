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
import jwt from "jsonwebtoken";

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
let { name } = useParams();

const [spacing, setSpacing] = React.useState(2);
const classes = useStyles();
const token = localStorage.getItem("token")
const encoded = jwt.decode(token)
var foundValue = props.regionData.region.filter( obj=>obj.name===name);
    let { path, url } = useRouteMatch();
    // console.log("region detail ",history)


    useEffect(()=>{
      dispatch(fetchRegionEmployee(name))
    })
    const live=props.liveTraffic.onlineTraffic
  // let result = live.find( (i ) => i.rid ==id );
    // console.log("live ",result )
    console.log("region detail ",props.regionData.region)
    let id
    console.log("found unkown ",foundValue[0])
    if(foundValue[0]!==undefined){
      id=foundValue[0].id
    }
    // let id=foundValue[0].id
    let trafficOnThis=[]
  live.map(i=>{
    if(i.rid==id){
      trafficOnThis.push(i)
    }
  })
    // result = liver.map(id => arrObj.find(o => o.id === id).name);
    let innerValue=[];
    let managerProfile={}
    
  
  console.log("ONLINE LIVE TRAFFIC",trafficOnThis)

    foundValue.map((i)=>{
   
      innerValue=i;
      if(i.regionManager!==null){
      managerProfile={
        name:`${i.regionManager.user.firstName}  ${i.regionManager.user.lastName}`,
        image:'https://cdn.vocab.com/units/jcmqdia6/feature.png?width=500&v=17522072455',
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
  <Paper className={classes.paper}>{}</Paper>
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
  
    liveTraffic: state.liveTraffic,
 
  regionData:state.regionData
})
export default connect(mapStateToProps)(RegionDetail)