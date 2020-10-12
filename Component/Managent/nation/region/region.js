import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import lifecycle from 'react-pure-lifecycle';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Paper from '@material-ui/core/Paper';
import GridExample from "./GridExample"
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
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Box from '@material-ui/core/Box'
import HelpIcon from '../../../../icon/src/Help';
import { makeStyles } from '@material-ui/core/styles';
import Map from "../../../map"
import { connect } from 'react-redux';
import ContentR from "./Content"
import RegionComponent from "./viewRegion"
const styles = (theme) => ({
  root: { flexGrow: 1 },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    shape: 0

  },
  searchBar: {
    borderBottom: '3px solid #f8bbd0',
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
  paper: { padding: theme.spacing(2), textAlign: 'center', color: theme.palette.text.secondary }
  ,
  main: {
    flex: 1,
    padding: theme.spacing(6, 4),
    // background: '#eaeff1',
  },
  secondaryBar:{
 
  }

});
let isLoding = true

const methods = {
  componentDidMount(props) {
    isLoding = false
    console.log('I mounted! Here are my props: ', isLoding);
  }
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;
console.log("box props ",props)
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
        {children} 
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


function Content(props) {
 
  const classes = useStyles();
  // const [value, setValue] = React.useState(0);
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let { path, url } = useRouteMatch();
  console.log("region data  ", props.regionData)
  props.regionData.region.map((i) => {
    console.log(i.name)
  })
  const regionCard = props.regionData.region.map((i) => {
    return <RegionComponent {...i} />
  })
  const mynewArray = [];
  const mynewArray1 = [];



  for (var i in props.userPermission.permission.data) {



    props.userPermission.permission.data[i].map((o) => {



      mynewArray1.push(o)

      //  console.log("surafe",surafel)
    })
  }

  const findTodo = function (myTodo, role) {
    console.log("tato ", typeof myTodo[0])

    const index = myTodo.findIndex(function (todo, index) {
      return todo
    })
  }



  const Container = props => <Grid container {...props} />;
  return (
 
  <>
  <Grid container spacing={2}>
  
    <Grid item xs={12}>
    <Breadcrumbs aria-label="breadcrumb">
    <Link color="inherit" href="/" 
    // onClick={handleClick}
    >
     Home
    </Link>
    <Link color="inherit" href="/getting-started/installation/" 
    // onClick={handleClick}
    >
      Core
    </Link>
    <Link
      color="textPrimary"
      href="/components/breadcrumbs/"
      // onClick={handleClick}
      aria-current="page"
    >
      Breadcrumb
    </Link>
  </Breadcrumbs>
      {/* <Paper className={classes.paper}>xs=12</Paper> */}
    </Grid>
 
    <Grid item xs={12}  >
 
    <div>
    {isLoding ? <div>loding</div> : <div>
     
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Tabs value={value} textColor="inherit" onChange={handleChange} >
          {mynewArray1.map(i => {
            if (i.roleName === "region" && i.delete)
              return <Tab textColor="inherit" label="View"  {...a11yProps(1)} />
          })}
          {mynewArray1.map(i => {
            if (i.roleName === "region" && i.create)
              return <Tab textColor="inherit" label="Create" {...a11yProps(0)} />



          })}


          {mynewArray1.map(i => {
            if (i.roleName === "region" && i.update)
              return <Tab textColor="inherit" label="Update" />
          })}
          {mynewArray1.map(i => {
            if (i.roleName === "region" && i.select) {
              return <Tab textColor="inherit" label="View" {...a11yProps(4)} />
            }
          })}

        </Tabs>

      </AppBar>
      <div    >
        {mynewArray1.map(i => {
          if (i.roleName === "region" && i.select)
            return <TabPanel value={value} index={0} >
            <RegionComponent/>

            </TabPanel>
        })}

        <TabPanel value={value} index={1}>
          <ContentR />
        </TabPanel>
        <TabPanel value={value} index={2}>
        {/* <GridExample/> */}
          {/* <NationFrom/> */}
        </TabPanel>

      </div>
    </div>}
  </div>
    {/* </Paper> */}
    </Grid>
    {/* <Grid item xs={12} md={3} sm={6}>
      <Paper className={classes.paper}>xs=6 sm=3</Paper>
    </Grid> 
     <Grid item xs={12} md={3}>
      <Paper className={classes.paper}>xs=6 sm=3</Paper>
    </Grid>  
    <Grid item xs={12} md={3}>
      <Paper className={classes.paper}>xs=6 sm=3</Paper>
    </Grid>
    <Grid item xs={12} md={3}>
      <Paper className={classes.paper}>xs=6 sm=3</Paper>
    </Grid>
    <Grid item xs={9} >
      <Paper className={classes.paper}>xs=6 sm=3</Paper>
    </Grid>
    <Grid item xs={6} >
      <Paper className={classes.paper}>xs=6 sm=3</Paper>
    </Grid>
    <Grid item xs={6} >
      <Paper className={classes.paper}>xs=6 sm=3</Paper>
    </Grid>
    <Grid item xs={12} >
      <Paper className={classes.paper}>xs=12 sm=6</Paper>
    </Grid> */}
     
  </Grid>
  
</>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  userPermission: state.userPermission,
  regionData: state.regionData
})
export default connect(mapStateToProps)(lifecycle(methods)(withStyles(styles)(Content)));
