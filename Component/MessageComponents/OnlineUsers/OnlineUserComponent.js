import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
 
import {connect} from 'react-redux';

 
 import { makeStyles } from '@material-ui/core/styles';

 import Paper from '@material-ui/core/Paper';
 import Grid from '@material-ui/core/Grid';
 import Box from '@material-ui/core/Box';
 import Divider from '@material-ui/core/Divider';
 import TextField from '@material-ui/core/TextField';
 import Typography from '@material-ui/core/Typography';
 import List from '@material-ui/core/List';
 import ListItem from '@material-ui/core/ListItem';

 import Avatar from '@material-ui/core/Avatar';
 import BadgeAvatars from "./BadgeAvatars"
 import {getChatconversationOnStart} from "../../../Action/index"
 import {
  BrowserRouter ,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
 const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    chatSection: {
      width: '100%',
      height: '80vh'
    },
    headBG: {
        backgroundColor: '#e0e0e0'
    },
    borderRight500: {
        borderRight: '1px solid #e0e0e0'
    },
    messageArea: {
      height: '70vh',
      overflowY: 'auto'
    }
  });
  
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

  function CustomizedMenus(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  let { path, url } = useRouteMatch();
console.log("path onnected   ",path)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
console.log("online user props ",  props.onlineUser)
let online=props.onlineUser.onlineUser;
 console.log("online type ",typeof online)
online.map(i=>console.log(i))
let g=null
  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Online
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
       <div>
        
        
            <Grid item xs={12} className={classes.borderRight500}>
            <Typography variant="h6" align="center" className="header-message"> </Typography>
                 
                <List>
                    {
         online.map(i=>{
             return <ListItem button key="RemySharp" onClick={()=>{
               handleClose()   
              //  props.setInitial()
              }
               } component={Link}  to={`${path}chat/${i.user.id}`}>
             <ListItemIcon>
             <BadgeAvatars/>
             </ListItemIcon>
             <ListItemText primary={i.user.firstName}>{i.user.firstName}</ListItemText>
             
             <ListItemText secondary="online" align="top"></ListItemText>
         </ListItem>
         } )

                    }
                   
                </List>
            </Grid>
        
         
      </div>
      </StyledMenu>
    </div>
  );
}
const mapStateToProps=state=>({
    onlineUser:state.onlineUser
  })
  const mapDispatchToProps = dispatch => ({
    setInitial: (id) => dispatch(getChatconversationOnStart(true))
  });
  export default connect(mapStateToProps,mapDispatchToProps)(CustomizedMenus);
