import React from 'react';
import PropTypes from 'prop-types';
import { AppBar,CssBaseline,Divider,Drawer,Avatar,
  Hidden,List,ListItem,ListItemIcon,ListItemText,Box, Typography,MenuItem} 
from '@material-ui/core';
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
import InputBase from '@material-ui/core/InputBase';
import Button from "@material-ui/core/Button"
import Header from "../Layout/header"
import InboxIcon from '../../icon/src/MoveToInbox';
import {useSelector,useDispatch,connect} from 'react-redux';
import {fetchPermission,signOut} from '../../Action/index';
import MUDrawer from "../Layout/index"
import Body from "./body"
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
 
 
const mynewArray=[];
const mynewArray1=[];

var listArray=[];

  for(var i in props.userPermission.permission.data){
    console.log(props.userPermission.permission.data[0])
    
    
    props.userPermission.permission.data[i].map((o)=>{
  
     mynewArray.push(o["roleName"])
     var nation= o["roleName"].includes("nation");
    var region= o["roleName"].includes("region");
    var zone=o["roleName"].includes("zone");
    var wereda= o["roleName"].includes("wereda");
    var role= o["roleName"].includes("role");
    var user= o["roleName"].includes("user");
    if(nation){
      listArray.push("nation")
      }
      if(region){
      listArray.push("region")
      }
      if(zone){
      listArray.push("zone")
      }
      if(wereda){
      listArray.push("wereda")
      }
      if(role){
        listArray.push("role")
        }
        if(user){
          listArray.push("user")
          }
     mynewArray1.push(o)
     const surafel=Object.entries(o)
    //  console.log("surafe",surafel)
    })
}
let unique = [...new Set(listArray)];

 console.log("unique:",unique)

 
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

  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('This is a success message!', { variant });
  };
 
//   const drawer = (
//     <div>
       
//       <div>

//       <Avatar alt="Remy Sharp"  />
//       </div>
//       <div className={classes.toolbar} />
//       <Divider />
//       <List>
//         {unique.map((text, index) =>{ 
//        console.log("fiki",typeof text)

     
// console.log("list of an array ",listArray)

//           return(
       
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ?<InboxIcon /> :<MailIcon />}</ListItemIcon>
//             <Link to="/nation"><ListItemText primary={text} /></Link>
//           </ListItem>
         
//         )})}
//       </List>
      
//       <Button onClick={handleClickVariant('success')}>Show success snackbar</Button>
//       <Divider />
//       <List>
//         {mynewArray1.map((i) => {
  
// if(i["create"]){
//   return   <ListItemText primary={i["roleName"]} />
// }
          
//         }
          
//       )}

//       </List>
//       <MenuItem component={Link} to="/nation">
//             Writers
//           </MenuItem>
//     </div>
//   );

  // const container = window !== undefined ? () => window().document.body : undefined;


  return (
    <BrowserRouter>
       <MUDrawer>
       <Header clickHandler={handleDrawerToggle}/>
     <Switch>
     
     <Route exact path="/protected" render={() => <div>Home</div>} />
    <div className={classes.root}>
      <CssBaseline />
   
      
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* <MUDrawer> */}
        {/* <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
            
          </Drawer>
        </Hidden> */}
        {/* </MUDrawer> */}
      </nav>



      <main className={classes.content}>
        <div className={classes.toolbar} />
        
        <Body/>


        
 
      </main>
   
    </div>
    </Switch>
    </MUDrawer>
    </BrowserRouter>
   
  );
}

ResponsiveDrawer.propTypes = {
  
  window: PropTypes.func,
};
 
const mapStateToProps=state=>({
  userPermission:state.userPermission
});
export default connect(mapStateToProps)(ResponsiveDrawer);

 
    

// <ListItem button  key={text} component={Link} to={"/" + text}>
// <ListItemIcon>{index % 2 === 0 ?<InboxIcon /> :<MailIcon />}</ListItemIcon>
// <Link to="/nation"><ListItemText primary={text} /></Link>
// </ListItem>

// )})}
// </List>


// <List>
// {["Inbox", "Starred"].map((text, index) => (
// <ListItem key={text} component={Link} to={"/" + text}>
// <ListItemIcon>
// {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
// </ListItemIcon>
// <ListItemText primary={text} />
// </ListItem>
// ))} */}