import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';

import Chip from '@material-ui/core/Chip';

import Avatar from '@material-ui/core/Avatar';

import Paper from '@material-ui/core/Paper';
import amhara from "../../../../asset/amhara.png"
import oromia from "../../../../asset/oromia.png"
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import  Tabs from '@material-ui/core/Tabs';
import Box from '@material-ui/core/Box'
import HelpIcon from '../../../../icon/src/Help';
import ExpandMore from '../../../../icon/src/ExpandMore';

 
import { makeStyles } from '@material-ui/core/styles';
import MyCard from "./MyCard"
import {useSelector,useDispatch,connect} from 'react-redux';
import ContentR from "./Content";
import {fetchRegionManager} from '../../../../Action/index';
const styles = (theme) => ({
  root: {    flexGrow: 1,    display: 'flex'
    },
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
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
 backgroundColor:"#f5f5f5"
  },
  column: {
    flexBasis: '100%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  // paper: {
  //   height: 140,
  //   width: 100,
  // },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  }
}));

 
function   Content(props)  {

  const classes = useStyles();
  // const [value, setValue] = React.useState(0);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log("minilik tikur sew",  props.regionManager.regionManger)
 
let sura={}
const item=props.regionManager.regionManger.map((i)=>{
  
  return  <MyCard {...i}  />
   
 
 
})
//  console.log("surafel did ",item)
 
const mynewArray=[];
    const mynewArray1=[];
    
    for(var i in  props.regionManager){
      console.dir("manager: ",props.regionManager)
    }

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
               
                Region Manager
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
      if(i.roleName==="regionManager"&&i.create)
      return  <Tab textColor="inherit" label="Create" {...a11yProps(0)} />
     
      
   
    })} 
         { mynewArray1.map(i=>{
 if(i.roleName==="regionManager"&&i.delete)
 return <Tab textColor="inherit"   label="View"  {...a11yProps(1)}/>
         })}
    
    { mynewArray1.map(i=>{
 if(i.roleName==="regionManager"&&i.update)
 return  <Tab textColor="inherit" label="Update" />
         })}
         { mynewArray1.map(i=>{
    if(i.roleName==="regionManager"&&i.select){
    return  <Tab textColor="inherit" label="View" {...a11yProps(4)}/>
    }
         })}
         
        </Tabs>
     
      </AppBar>
    <div className={classes.main}>
    { mynewArray1.map(i=>{
 if(i.roleName==="regionManager"&&i.create)
 return      <TabPanel value={value} index={0} >

<Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}  >
       
    
    { 
    
   
    item
      }
 
 
 
   
      </Grid>
  </Grid>
   </TabPanel>
         })}

      <TabPanel value={value} index={1}>
     {/* <ContentR/> */}
      </TabPanel>
      <TabPanel value={value} index={2}>
      delete
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
  regionManager:state.regionManager
})
export default connect(mapStateToProps)(Content);
