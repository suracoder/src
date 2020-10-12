import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import axios from "axios"

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import  Tabs from '@material-ui/core/Tabs';
import Box from '@material-ui/core/Box'
import HelpIcon from '../../../../icon/src/Help';
import { makeStyles } from '@material-ui/core/styles';
import Chart from "./chart"
import {connect} from 'react-redux';
import ContentR from "../../../Content"
 import Chat from "../../../chat"
const styles = (theme) => ({
  root: {    flexGrow: 1  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    shape:0

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
  paper: {    padding: theme.spacing(2),    textAlign: 'center',    color: theme.palette.text.secondary  }
   ,
  main: {
    flex: 1,
    padding: theme.spacing(6, 4),
    background: '#eaeff1',
  },
   
});
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}



TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

 
function   Content(props)  {
  const [location ,setLocation]=useState([])

  useEffect(() => {
    axios.get('http://localhost:3333/api/traffic/getLocation'). then(response=>{
         console.log(response)
   let location=response.data
   setLocation(response.data)
    }).
    catch(error=>{
        
    });
  } ,[])
  const classes = useStyles();
  // const [value, setValue] = React.useState(0);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log("minilik tikur sew",value)
// Object.entries(mynewArray1[0]).forEach(entry => {
//       console.log("polition ",value)
//     })
const mynewArray=[];
    const mynewArray1=[];
    
  

      for(var i in props.userPermission.permission.data){
        
        
        
         props.userPermission.permission.data[i].map((o)=>{
      
        
        
         mynewArray1.push(o)
       
        //  console.log("surafe",surafel)
        })
    }
    
    const findTodo =function(myTodo,role){
      console.log("tato ", typeof myTodo[0])
      
      const index =myTodo.findIndex(function(todo,index){
        return todo
      })
    }
   

//  console.log("new real premsssioin" ,props.realPermission.permission)
//  props.realPermission.permission.data.map(i=>console.log(i))
    const Container = props => <Grid container {...props} />;
  return (
    <div>
      <AppBar
        component="div"
        // className={classes.secondaryBar}
         color="default"
        position="static"
     
        elevation={0}
      >
        <Toolbar  
         >
          <Grid container alignItems="center" spacing={1} >
            <Grid item xs>
              <Typography color="inherit" variant="h5" component="h1">
               
                Authentication
              </Typography>
            </Grid>
            <Grid item>
              <Button className={classes.button} variant="outlined" color="inherit" size="small">
                Web setup
              </Button>
            </Grid>
            <Grid item>
              <Tooltip title="Help">
                <IconButton color="inherit">
                  <HelpIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      
        <AppBar
        component="div"
        className={classes.secondaryBar}
        color="#eaeff1"
        position="static"
        elevation={0}
      >
        <Tabs value={0} textColor="inherit" onChange={handleChange} >
       { mynewArray1.map(i=>{
      if(i.roleName==="nationEmployee"&&i.create)
      return  <Tab textColor="inherit" label="Create" {...a11yProps(0)} />
     
      
   
    })} 
         { mynewArray1.map(i=>{
 if(i.roleName==="nationEmployee"&&i.delete)
 return <Tab textColor="inherit"   label="View"  {...a11yProps(1)}/>
         })}
    
    { mynewArray1.map(i=>{
 if(i.roleName==="nationEmployee"&&i.update)
 return  <Tab textColor="inherit" label="Update" />
         })}
         { mynewArray1.map(i=>{
    if(i.roleName==="nationEmployee"&&i.select){
    return  <Tab textColor="inherit" label="View" {...a11yProps(4)}/>
    }
         })}
         
        </Tabs>
     
      </AppBar>
    <div className={classes.main}>
    { mynewArray1.map(i=>{
 if(i.roleName==="nationEmployee"&&i.create)
 return      <TabPanel value={value} index={0} >
 <ContentR/>
 
   </TabPanel>
         })}

      <TabPanel value={value} index={1}>
      <Chart location={location}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Chat/>
      {/* <NationFrom/> */}
      </TabPanel>
      
    </div>
    </div>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
 };
const mapStateToProps=state=>({
  userPermission:state.userPermission,
  realPermission:state.realPermission
})
export default connect(mapStateToProps)(withStyles(styles )(Content));
