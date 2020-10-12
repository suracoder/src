import React from 'react';
import PropTypes from 'prop-types';
import { AppBar,CssBaseline,Divider,Drawer,Avatar,
  Hidden,List,ListItem,ListItemIcon,ListItemText,Box, Typography,MenuItem
,Toolbar,Grid,Tooltip,IconButton
} 
from '@material-ui/core';
import HelpIcon from '../../icon/src/Help';
// import Pic from "./asset/pic.PNG"
import MailIcon from '../../icon/src/Mail';
import MenuIcon from '../../icon/src/Menu';
// import NewList from "./li"
import { SnackbarProvider, useSnackbar } from 'notistack';
import {
  BrowserRouter ,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import { makeStyles,fade, useTheme } from '@material-ui/core/styles';
// import MenuIcon from '../../icon/src/Menu';
import NotificationsIcon from '../../icon/src/Notifications';
import InputBase from '@material-ui/core/InputBase';
import Button from "@material-ui/core/Button"
import Header from "../Layout/header"
import InboxIcon from '../../icon/src/MoveToInbox';
import {useSelector,useDispatch,connect} from 'react-redux';
import {fetchPermission,signOut} from '../../Action/index';
import MUDrawer from "../Layout/index"
import Body from "./body"
import DList from "./listItem"
import Nation_E_M from "./NationEmployeeM"
import MyTab from "./NationEmployeeM"
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
   
 
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
 
}));
function ResponsiveDrawer(props) {
  const { window ,permission} = props;
  

 
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const dispatch=useDispatch();
  // dispatch(fetchPermission())
  const handleDrawerToggle = () => {
    console.log("surafel worku")
    setMobileOpen(!mobileOpen);
  };
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar('I love snacks.');
  };
const history =useHistory();
  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('This is a success message!', { variant });
  };
 
 

  const container = window !== undefined ? () => window().document.body : undefined;
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <DList/>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <Header clickHandler={handleDrawerToggle}/>
    <BrowserRouter>
    {/* <nav className={classes.drawer} aria-label="mailbox folders"> */}
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    {/* </nav> */}

    <main className={classes.content}>
    <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
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
      <div className={classes.toolbar} />
      <MyTab/>
      <Drawer/>
      <Switch>
        <Route exact path="/" render={() => {
          
          return <Body/> }} />
        <Route path="/Inbox" render={
          () => {
          
            return<div><Body/></div>
            console.log(history.push("/login"))}

            } />
        <Route path="/nation" render={() => <div>Page starred</div>} />
      </Switch>
    </main>
  </BrowserRouter>
</div>
   
  );
}

ResponsiveDrawer.propTypes = {
  
  window: PropTypes.func,
};
 
const mapStateToProps=state=>({
  userPermission:state.userPermission
});
export default connect(mapStateToProps)(ResponsiveDrawer);

 
