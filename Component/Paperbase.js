import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Links from '@material-ui/core/Link';
import Navigator from './Navigator';
import Content from './Content';
import Header from './headers';
import Body from "./Body/body"
import NationEmpM from "./Managent/nation/nationEmployee/NationEmpM"
import RegionManag from "./Managent/nation/regionManager/RegionManager"
import Region from "./Managent/nation/region/region"
import MyMap from "./map"
import RegionDetail from "./Managent/nation/region/regionDetail"
import RegionEmployee from "./Managent/region/regionEmployee/RegionEmployee"
import Zone from "./Managent/region/zone/zone"
import ZoneEmployee from "./Managent/zone/zoneEmployee/zoneEmployee"
import ZoneTraffic from "./Managent/zone/zoneTraffic/zoneTraffic"
import Wereda from "./Managent/zone/wereda/wereda"
import WeredaEmployee from "./Managent/wereda/weredaEmployee/weredaEmployee"
import WeredaTraffic from "./Managent/wereda/weredaTraffic/weredaTraffic"
import socketIOClient from "socket.io-client";
import Hospital from "./Managent/hospital/HospitalMain"
import AccidentDetail from "./Accidnet/AccidentDetail"
import {
  fetchSignIn, fetchPermission, signOut, fetchRegion,
  fetchRegionManager, fetchOnlineUser,
  fetchRealPermission, fetchLiveTraffic,
  fetchAccidnet, fetchProfile
} from '../Action/index';
import { useSelector, useDispatch, connect } from 'react-redux';
import SocketContext from './SocketContext'
import ChatUi from "../Component/MessageComponents/Message/ChatComponent"
import { useSnackbar } from 'notistack';
import NewTab from "./tab"
import MapBox from "./Mapbox"
import ZoneDetail from "./Managent/nation/region/zone/zoneDetail"
import WeredaDetail from "./Managent/nation/region/wereda/weredaDetail"
import Grid from '@material-ui/core/Grid';
import ZoneEmployeeProfile from './profile/ZoneEmployeeProfile/profile'
import ZoneTrafficProfile from './profile/ZoneTrafficProfile/profile'
import WeredaEmployeeProfile from './profile/WeredaEmployeeProfile/profile'
import WeredaTrafficProfile from './profile/WeredaTrafficProfile/profile'
import Accident from "../Component/Accidnet/AccidnetMain"
import Profile from "./profile"
import CreateNationEmployee from "../Component/Managent/nation/nationEmployee/createNationEmployee"
import CreateRegionEmployee from "../Component/Managent/region/regionEmployee/createRegionEmployee"
import CreateRule from "../Component/Rule/createRule"
import {
  BrowserRouter,
  Switch,
  Route,
  useRouteMatch,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import MapfromRoute from "./MapForRoute"
import EmployeeProfile from "./profile/WeredaEmployeeProfile/profile"
import ZoneRegionCreate from "./Managent/nation/region/zone/zoneRegion/index"
import Rule from "./Rule/index"
const ENDPOINT = "http://192.168.1.15:3333";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Links color="inherit" href="https://material-ui.com/">
        Your Website
      </Links>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 256;

let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#18202c',
      },
    },
    MuiButton: {
      label: {
        textTransform: 'none',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1),
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        margin: '0 16px',
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854',
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
};

const styles = {
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    padding: theme.spacing(2, 4),
    background: '#eaeff1',
  },
  footer: {
    padding: theme.spacing(2),
    background: '#eaeff1',
  },
};


function Paperbase(props) {
  const socket = socketIOClient(ENDPOINT);
  socket.emit('setUsername', { token: localStorage.getItem("token") });
  const { classes } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  console.log("@@@@@@@@@@@@@@@@@@@@ en", process.env)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  let { path, url } = useRouteMatch();
  const dispatch = useDispatch();
  dispatch(fetchPermission("df"));
  dispatch(fetchRegion());
  dispatch(fetchRealPermission())
  dispatch(fetchRegionManager())
  dispatch(fetchOnlineUser())
  dispatch(fetchLiveTraffic())
  dispatch(fetchAccidnet())
  dispatch(fetchProfile())
  socket.on('broadCastAccidentToWeb',function(data){
    console.log("onBroadCast",data)
 enqueueSnackbar("Accinet brodcated");
  })
  socket.on('chatting', function (data) {
    console.log("@Chating emit ")
    enqueueSnackbar("new message");

     
  })
  socket.on("update", () => {
    console.log("new user login ")
    setTimeout(() => {
      dispatch(fetchOnlineUser())


    }, 3000)

  })
  useEffect(() => {


    //  socket.off('WELCOME_FROM_SERVER');
  })
  return (

    <SocketContext.Provider value={socket}>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <nav className={classes.drawer}>
            <Hidden smUp implementation="js">
              <Navigator
                PaperProps={{ style: { width: drawerWidth } }}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
              />
            </Hidden>
            <Hidden xsDown implementation="css">
              <Navigator PaperProps={{ style: { width: drawerWidth } }} />
            </Hidden>
          </nav>
          <div className={classes.app}>
            <Header onDrawerToggle={handleDrawerToggle} />
            <div className={classes.main}>

              <Switch>
                <Route exact path="/" render={() => { return <MyMap /> }} />
                ZoneRegionCreate
                <Route exact path="/nation" render={() => {

                  return <NationEmpM />
                }} />
                <Route   path="/zone/zoneRegion" render={() => {

                  return <ZoneRegionCreate />
                }} />
                <Route exact path="/region" render={() => {

                  return <Region />
                }} />

                <Route exact path="/region/createEmployee" render={() => {

                  return <CreateRegionEmployee />
                }} />

                <Route path="/regionManager" render={() => {

                  return <RegionManag />
                }} />
                <Route exact path={`/region/:name`} render={() => {

                  return <RegionDetail />
                }} />
                <Route exact path={`/region/zone/:name`} render={() => {

                  return <ZoneDetail />
                }} />
                <Route exact path={`/zone/:name`} render={() => {

                  return <ZoneDetail />
                }} />
                <Route exact path={`/region/zone/wereda/:name`} render={() => {

                  return <WeredaDetail />
                }} />
                <Route exact path={`/zone/wereda/:name`} render={() => {

                  return <WeredaDetail />
                }} />
                <Route exact path={`/wereda/:name`} render={() => {

                  return <WeredaDetail />
                }} />
                <Route exact path={`/zone/employee_profile/:id`} render={() => {

                  return <ZoneEmployeeProfile />
                }} />
                <Route exact path={`/zone/traffic_profile/:id`} render={() => {

                  return <ZoneTrafficProfile />
                }} />
                <Route exact path={`/wereda/employee_profile/:id`} render={() => {

                  return <WeredaEmployeeProfile />
                }} />
                <Route exact path={`/wereda/traffic_profile/:id`} render={() => {

                  return <WeredaTrafficProfile />
                }} />
                <Route exact path={`/accident_detail/:id`} render={() => {

                  return <AccidentDetail />
                }} />

                <Route path="/regionEmployee" render={() => {

                  return <RegionEmployee />
                }} />
                <Route path="/zone" render={() => {

                  return <Zone />
                }} />
                <Route path="/zoneEmployee" render={() => {

                  return <ZoneEmployee />
                }} />
                <Route path="/zoneTraffic" render={() => {

                  return <ZoneTraffic />
                }} />
                <Route path="/wereda" render={() => {

                  return <Wereda />
                }} />
                <Route path="/weredaManager" render={() => {

                  return <WeredaEmployee />
                }} />
                <Route path="/weredaEmployee" render={() => {

                  return <WeredaEmployee />
                }} />
                <Route path="/weredaTraffic" render={() => {

                  return <WeredaTraffic />
                }} />
                <Route exact path={`/chat/:id`} render={() => {

                  return <ChatUi />
                }} />
                <Route path="/hospital" render={() => {

                  return <Hospital />
                }} />
                <Route path="/accident" render={() => {

                  return <Accident />
                }} />
                <Route path="/nation/createEmployee" render={() => {

                  return <CreateNationEmployee />
                }} />
                <Route exact path="/rule" render={() => {

return <Rule />

}} />
 <Route path="/rule/createRule" render={() => {

return <CreateRule />
}} />
              </Switch>

            </div>
            {/* <footer className={classes.footer}>
            <Copyright />
          </footer> */}

          </div>
        </div>
      </ThemeProvider>

    </SocketContext.Provider>

  );
}

Paperbase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Paperbase);
