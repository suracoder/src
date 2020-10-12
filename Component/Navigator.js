import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '../icon/src/Home';
import PeopleIcon from '../icon/src/People';
import DnsRoundedIcon from '../icon/src/DnsRounded';
import PermMediaOutlinedIcon from '../icon/src/PhotoSizeSelectActual';
import PublicIcon from '../icon/src/Public';
import SettingsEthernetIcon from '../icon/src/SettingsEthernet';
import SettingsInputComponentIcon from '../icon/src/SettingsInputComponent';
import TimerIcon from '../icon/src/Timer';
import SettingsIcon from '../icon/src/Settings';
import PhonelinkSetupIcon from '../icon/src/PhonelinkSetup';
import { useSelector, useDispatch, connect } from 'react-redux';
import jwt from "jsonwebtoken";
import InboxIcon from '../icon/src/MoveToInbox';
import DraftsIcon from '../icon/src/Drafts';
import SendIcon from '../icon/src/Send';
import ExpandLess from '../icon/src/ExpandLess';
import ExpandMore from '../icon/src/ExpandMore';
import StarBorder from '../icon/src/StarBorder';
import Collapse from '@material-ui/core/Collapse';
import UserContext, {UserProvider } from "./PermissionContext"

import { fetchRegionManager } from '../Action/index';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";


const styles = (theme) => ({
  categoryHeader: {
    paddingTop: theme.spacing(9),
    paddingBottom: theme.spacing(9),
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
  },
  item: {
    paddingTop: 1,
    paddingBottom: 1,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover,&:focus': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  },
  itemCategory: {
    backgroundColor: '#232f3e',
    boxShadow: '0 -1px 0 #404854 inset',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  firebase: {
    fontSize: 24,
    color: theme.palette.common.white,
  },
  itemActiveItem: {
    color: '#4fc3f7',
  },
  itemNeastedItem: {
    color: '#4fc3f7',
  },
  itemPrimary: {
    fontSize: 'inherit',
  },
  itemIcon: {
    minWidth: 'auto',
    marginRight: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(1),
  },
});

class Navigator extends React.Component {
  state = { open: false };
  state = {};
  handleClick = (e) => {
    // this.setState({ open: !this.state.open });
    this.setState({ [e]: !this.state[e] });

  };
  ;
  state = {
    open: false
    , fo: false

  }

  render() {
    const { classes, ...other } = this.props;
    const mynewArray = [];
    const mynewArray1 = [];
    const token = localStorage.getItem("token")
    const encoded = jwt.decode(token)

    var listArray = [];
    console.log("to get permission:", this.props.userPermission.permission)

    for (var i in this.props.userPermission.permission.data) {



      this.props.userPermission.permission.data[i].map((o) => {

        mynewArray.push(o["roleName"])
        var nation = o["roleName"].includes("nation");
        var region = o["roleName"].includes("region");
        var zone = o["roleName"].includes("zone");
        var wereda = o["roleName"].includes("wereda");
        var role = o["roleName"].includes("role");
        var user = o["roleName"].includes("user");
        if (nation) {

          listArray.push("nation")
        }
        if (region) {
          listArray.push("region")
        }
        if (zone&&(encoded.userType === 3||encoded.userType === 4||encoded.userType === 5||encoded.userType === 6||encoded.userType === 7)) {
          listArray.push("zone")
        }
        if (wereda&&(encoded.userType === 5||encoded.userType === 8||encoded.userType === 9||encoded.userType === 10)) {
          listArray.push("wereda")
        }
        if (role) {
          listArray.push("role")
        }
        if (user) {
          listArray.push("user")
        }
        mynewArray1.push(o)
        const surafel = Object.entries(o)
        //  console.log("surafe",surafel)
      })
    }
    let unique = [...new Set(listArray)];
    console.log("my unique componetn ", unique)
    console.log(typeof unique)
    console.log("class componet ", mynewArray1[0])
  
    console.log("encoded for wereda ", encoded.wid)
    

    return (
      
      <Drawer variant="permanent" {...other}>
        <List disablePadding>
          <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>

            Eth Traffic
        </ListItem>
          <ListItem className={clsx(classes.item, classes.itemCategory)}>
            <ListItemIcon className={classes.itemIcon}>
              <HomeIcon />
            </ListItemIcon>
            
            <ListItemText
              classes={{
                primary: classes.itemPrimary,
              }}
            >
              Project Overview
          </ListItemText>
          </ListItem>
          <ListItem className={clsx(classes.item, classes.itemCategory)}>
            <ListItemIcon className={classes.itemIcon}>
              <HomeIcon />
            </ListItemIcon>
            
            <ListItemText
              classes={{
                primary: classes.itemPrimary,
              }}
            >
              Project Overview
          </ListItemText>
          </ListItem>
          <div>
            <List
              component="nav"
            >
              {unique.map(i => {
         
                return <div>
                  <React.Fragment key="Management">

                    <ListItem
                      // key={childId}
                      button
                      className={classes.itemCategory} button
                      onClick={this.handleClick.bind(this, i)}
                      className={clsx(classes.item, classes.itemActiveItem)}
                    >
                      
                      <ListItemText
                        classes={{
                          primary: classes.itemPrimary,
                        }}
                      >
                        {i}
                      </ListItemText>
                      {this.state[i] ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={this.state[i]} timeout="auto" unmountOnExit>
                      {i === "nation" && (encoded.nid === 1 || mynewArray1[0].create === true) ?
                        <List component="div" disablePadding>
                          <ListItem button component={Link} to={"/" + i} >
                            <ListItemText className={clsx(classes.itemActiveItem)} primary="nation employee" />
                          </ListItem>

                        </List> : <div />}
                      {i === "region" && encoded.nid === 1 ?

                        <List component="div" disablePadding>
                          <ListItem button component={Link} to={"/" + i}  >
                            <ListItemText primary="region" className={clsx(classes.itemNeastedItem)} />
                          </ListItem>


                        </List> : <div />}
                      {i === "region" && encoded.nid === 1 ?

                        <List component="div" disablePadding>

                          <ListItem button component={Link} to={"/" + i + "Manager"}
                          //  onClick={this.props.fetch_r_m} 
                          >
                            <ListItemText primary="region Manger" className={clsx(classes.itemNeastedItem)} />
                          </ListItem>


                        </List> : <div />}

                      { i === "region"&&encoded.userType === 3||encoded.userType ===4?

                        <List component="div" disablePadding>
                          <ListItem button component={Link} to={"/" + i + "Employee"}>
                            <ListItemText primary="region Employee" className={clsx(classes.itemNeastedItem)} />
                          </ListItem>


                        </List> : <div />}

                      {i === "zone"&& encoded.userType === 3 ||  encoded.userTyp === 4 ?
                        <List component="div" disablePadding>
                          <ListItem button component={Link} to={"/" + i} >
                            <ListItemText primary="zone" className={clsx(classes.itemNeastedItem)} />
                          </ListItem>

                        </List> : <div />
                      }
                      { (i === "zone"&&encoded.userType === 3||encoded.userType === 4) ?
                        <List component="div" disablePadding>
                          <ListItem button component={Link} to={"/" + i + "Manager"} >
                            <ListItemText primary="zone manager" className={clsx(classes.itemNeastedItem)} />
                          </ListItem>

                        </List> : <div />
                      }

                      {(i === "zone"&&encoded.userType === 5 || encoded.userType === 6) ?
                        <List component="div" disablePadding>
                          <ListItem button component={Link} to={"/" + i + "Employee"} >
                            <ListItemText primary="zone employee" className={clsx(classes.itemNeastedItem)} />
                          </ListItem>

                        </List> : <div />
                      }
                      {(i === "zone"&&encoded.userType === 5 || encoded.userType === 6) ?
                        <List component="div" disablePadding>
                          <ListItem button component={Link} to={"/" + i + "Traffic"} >
                            <ListItemText primary="zone traffic" className={clsx(classes.itemNeastedItem)} />
                          </ListItem>

                        </List> : <div />
                      }
                      {i == "wereda" && (encoded.userType === 5 || encoded.userType === 6||encoded.userType === 7) ?
                        <List component="div" disablePadding>
                          <ListItem button component={Link} to={"/" + i} >
                            <ListItemText primary="wereda" className={clsx(classes.itemNeastedItem)} />
                          </ListItem>

                        </List> : <div />
                      }
                      { (i === "wereda"&&encoded.userType === 5||encoded.userType === 6) ?
                        <List component="div" disablePadding>
                          <ListItem button component={Link} to={"/" + i + "Manager"} >
                            <ListItemText primary="Wereda Manager" className={clsx(classes.itemNeastedItem)} />
                          </ListItem>

                        </List> : <div />
                      }
                      { i == "wereda" &&encoded.userType=== 6 || encoded.userType===7 ||encoded.userType===8 ?
                        <List component="div" disablePadding>
                          <ListItem button component={Link} to={"/" + i + "Employee"} >
                            <ListItemText primary="wereda employee" className={clsx(classes.itemNeastedItem)} />
                          </ListItem>

                        </List> : <div />
                      }
                      {i == "wereda" &&encoded.userType=== 6 || encoded.userType===7 ||encoded.userType===8 ?
                        <List component="div" disablePadding>
                          <ListItem button component={Link} to={"/" + i + "Traffic"} >
                            <ListItemText primary="wereda traffic" className={clsx(classes.itemNeastedItem)} />
                          </ListItem>

                        </List> : <div />
                      }
                    </Collapse>

                    <Divider className={classes.divider} />

                  </React.Fragment>
                </div>
              })}
 <ListItem
                      // key={childId}
                      button
                      className={classes.itemCategory} button
                      onClick={this.handleClick.bind(this, i)}
                      className={clsx(classes.item, classes.itemActiveItem)}
                    >
                      
                      <ListItemText
                        classes={{
                          primary: classes.itemPrimary,
                        }}
                      >
                        {i}
                      </ListItemText>
                      {this.state[i] ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>

            </List>
          </div>

        </List>
      </Drawer>
     
     
    )
  }
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  userPermission: state.userPermission
})
const mapDispatchToProps = dispatch => ({
  fetch_r_m: () => dispatch(fetchRegionManager())
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Navigator));
