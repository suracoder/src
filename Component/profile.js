import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
 

import Chip from '@material-ui/core/Chip';

import Avatar from '@material-ui/core/Avatar';

import Paper from '@material-ui/core/Paper';
 import { makeStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import  Tabs from '@material-ui/core/Tabs';
import Box from '@material-ui/core/Box'
 

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
 
 
 
import {useSelector,useDispatch,connect} from 'react-redux';
import ContentR from "./Content";
 
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


 
 
function   Content(props)  {
 
  return (
    <div>
  <Grid container >
        <Grid xs={12} md={3} sm={3} item>
          <Paper  >surel</Paper>
        </Grid>
        <Grid xs={12} md={6} sm={3} item>
          <Paper   >surel</Paper>
        </Grid> <Grid xs={12} md={3} sm={3} item>
          <Paper >surel</Paper>
        </Grid>
      </Grid>

home view 
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
 