import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import axios from "axios"


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
  withRouter,
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
 import Card from "./Card" 
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


 
 class ZoneEmployeeProfile extends  React.Component {
  state={
    user:'',
    isLoading:true
  }
      componentDidMount(){
        let id = this.props.match.params.id
       let ids={
         id:id
       }
       let ip='192.168.1.15'
        axios.post(`http://${ip}:3333/api/user/getUserById`, ids).
        then(response => {
console.log("user =>", response.data[0])
          this.setState({isLoading:false})
this.setState({user:response.data[0]})
        }
        ).
        catch(error => {
 
        });
      }
  render(){
    let data={}
    console.log("on rener user ",this.user)
    if(!this.state.isLoading){
      console.log("QQQQQQQQQQQQQQQQQQQq ",this.state.user)
  data={
      name:`${this.state.user.firstName} ${this.state.user.lastName}`,
      image:'https://placeimg.com/640/480/nature',
      address:this.state.user.email
    }
  }
 if(this.state.isLoading){
  return(<div>loading..</div>)
 }else{
   if(!this.state.isLoading){
  return(

    <div>
<Grid container spacing={2} >
          <Grid xs={12} md={3} sm={3} item>
          <Card {...data}/>
          </Grid>
          <Grid xs={12} md={6} sm={3} item>
            <Paper   >surel</Paper>
          </Grid> <Grid xs={12} md={3} sm={3} item>
            <Paper >surel</Paper>
          </Grid>
        </Grid>

    
  
  home view 
         </div>


  )
   }
 }
   
  }
 }
 

 ZoneEmployeeProfile.propTypes = {
  classes: PropTypes.object.isRequired,
 };
 
const mapStateToProps = state => ({

  regionData: state.regionData,
  zoneEmployee: state.zoneEmployee
})
 
export default withRouter(connect(mapStateToProps)(ZoneEmployeeProfile))
