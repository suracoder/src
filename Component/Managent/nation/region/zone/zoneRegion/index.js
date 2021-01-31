import React, { useState, useRef, useCallback,useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { Map, GoogleApiWrapper } from 'google-maps-react';
 
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
 
import { useSelector, useDispatch, connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import BaseBase from "./BaseMap"
import { Grid, CardActionArea, Divider } from '@material-ui/core';
import { LoadScript, GoogleMap, Polygon } from "@react-google-maps/api";
import "./styles.css";
import TextField from '@material-ui/core/TextField';
import { useSnackbar } from 'notistack';

 import LocationList from "./LocationList"
// 1000179493075
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
 import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from "axios"
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

 function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [zoneName,setZoneName]=React.useState("")
  let [zoneRegion,setZoneRegion]=React.useState([])
  const [isLoading,setIsLoading]=React.useState(false)
  const [error,setError]=React.useState(null)
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [assignTrafficNo,setAssignTrafficNo]=React.useState("")
  // let { path, url } = useRouteMatch();
  console.log("props on zone region manegr ",props)
  const [path, setPath] = React.useState([
    { lat: 7.673, lng: 36.81},
    { lat: 7.6739, lng: 36.8143343 },
    { lat: 7.6739323, lng: 36.8143656 }
  ]);
  
  // Define refs for Polygon instance and listeners
  const polygonRef = useRef(null);
  const listenersRef = useRef([]);

  // Call setPath with new edited path
  const onEdit = useCallback(() => {
    if (polygonRef.current) {
      const nextPath = polygonRef.current
        .getPath()
        .getArray()
        .map(latLng => {
          return { lat: latLng.lat(), lng: latLng.lng() };
        });
      setPath(nextPath);
    }
  }, [setPath]);

  // Bind refs to current Polygon and listeners
  const onLoad = useCallback(
    polygon => {
      polygonRef.current = polygon;
      const path = polygon.getPath();
      listenersRef.current.push(
        path.addListener("set_at", onEdit),
        path.addListener("insert_at", onEdit),
        path.addListener("remove_at", onEdit)
      );
    },
    [onEdit]
  );

  // Clean up refs
  const onUnmount = useCallback(() => {
    listenersRef.current.forEach(lis => lis.remove());
    polygonRef.current = null;
  }, []);

  // useEffect(()=>{
  // // props.ADD_CIRCLE();
  // //   props.ADD_CIRCLE();
  // },[])
 
  useEffect(()=>{
    axios.get(`http://localhost:3333/api/zone/getZoneRegion`,{ headers: {"authorization" : `Bearer ${localStorage.getItem("token")}`} }).
    then(response => {
      console.log("register success onSURAFEP",response.data)
  
      setZoneRegion(response.data)
    
      if(response.data.hasOwnProperty("error")){
      // this.setState({error:"this not deleteed"})
 
      }
  
  
  
    }).catch(error => {
      // this.setState({isDeleteLoading:false})
  
    });
  },[])
const onZoneRegister=(e)=>{
  let  payload = {
    name: zoneName,
    paths:path,
    assignTrafficNo:assignTrafficNo
  }
setIsLoading(true)
  axios.post(`http://localhost:3333/api/zone/createZoneRegion`, payload).
  then(response => {
    console.log("register success")
    enqueueSnackbar(`zone Section Creates`,{ 
      variant: 'error',
  })
setIsLoading(false)
    if(response.data.hasOwnProperty("error")){
    // this.setState({error:"this not deleteed"})
    console.log("register error")
    }



  }).catch(error => {
    // this.setState({isDeleteLoading:false})

  });


}
  // props.ADD_CIRCLE();
  return (
    <div>
      <Grid container spacing={2}>
        <Grid xs={12} md={9} sm={9} item>
        <div className="App">
      <LoadScript
        id="script-loader"
        googleMapsApiKey=""
        language="en"
        region="us"
      >
        <GoogleMap
          mapContainerClassName="App-map"
          center={{ lat: 7.623, lng: 36.89 }}
          zoom={12}
          version="weekly"
          on
        >

          {
           zoneRegion.map(i=>{
             let zpath=[]
            //  i.zoneRegionLocations.map(j=>{
            //    let data={
            //      lat:i.lat,
            //      lng:i.lng
            //    }
            //    zpath.push(data)
            //  })
            return( <Polygon
             // Make the Polygon editable / draggable
             editable={false}
             draggable={false}
             path={ i.zoneRegionLocations}
             // Event used when manipulating and adding points
              
             
           />)
           })
          }
          <Polygon
            // Make the Polygon editable / draggable
            editable
            draggable
            path={path}
            // Event used when manipulating and adding points
            onMouseUp={onEdit}
            // Event used when dragging the whole Polygon
            onDragEnd={onEdit}
            onLoad={onLoad}
            onUnmount={onUnmount}
          />
           
        </GoogleMap>
      </LoadScript>
    </div>
        </Grid>
        <Grid xs={12} md={3} sm={3} item>
          <Paper className={classes.paper} >
          <TextField id="standard-basic" label="Section Name" onChange={(e)=>{
// console.log(e.target.value)
setZoneName(e.target.value)
// console.log(payload)
          }} />
            <TextField id="standard-basic" label="traffic assign number" onChange={(e)=>{
// console.log(e.target.value)
setAssignTrafficNo(e.target.value)
// console.log(payload)
          }} />
          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>List of Cordinate</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <LocationList location={path}/>
        </AccordionDetails>
      </Accordion>
       
        
      <Button variant="contained" color="primary" 

      disabled={isLoading?true:false}
      onClick={()=>{onZoneRegister()}}>
  Create 
</Button>
           </Paper>
        </Grid> <Grid xs={12} md={6} sm={3} item>
          <Paper className={classes.paper} >surel</Paper>
        </Grid>
      </Grid>

      
    </div>
  );
}
 

const mapDispatchToProps = dispatch => {
  return {
    SET_MARKERS: makers => dispatch({ type: "SET_MARKERS", value: makers }),
    ADD_CIRCLE: () => dispatch({ type: "ADD_CIRCLE" })
  };
};


const mapStateToProps = state => ({
  circles: state.circle.circles,

  regionData: state.regionData,
  zoneTraffic: state.zoneTraffic
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeReviewCard)
