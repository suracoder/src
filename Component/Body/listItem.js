import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '../../icon/src/MoveToInbox';
import DraftsIcon from '../../icon/src/Drafts';
import SendIcon from '../../icon/src/Send';
import ExpandLess from '../../icon/src/ExpandLess';
import ExpandMore from '../../icon/src/ExpandMore';
import StarBorder from '../../icon/src/StarBorder';
import jwt from "jsonwebtoken";
import {
  BrowserRouter ,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import {useSelector,useDispatch,connect} from 'react-redux';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));
class NestedList extends React.Component {
//   state = { open: false };
  state = {};
  handleClick = (e) => {
    // this.setState({ open: !this.state.open });
    this.setState({ [e]: !this.state[e] });

  };
  ;
  state = { open: false 
    ,fo:false

}
state = {};
  toggle = () => this.setState({open:!this.state.open})
  myclick=()=>this.setState({fo:!this.state.fo})
    render() {
        const mynewArray=[];
  const mynewArray1=[];
  
  var listArray=[];
  
    for(var i in this.props.userPermission.permission.data){
      console.log(this.props.userPermission.permission.data[0])
      
      
      this.props.userPermission.permission.data[i].map((o)=>{
    
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
  console.log("class componet ",mynewArray1.includes())
  const token=localStorage.getItem("token")
  const encoded=jwt.decode(token)
  // const userInfo=Object.entries(encoded)
  console.log("decoded tpken,",encoded.nid)
  console.log()

      const { classes } = this.props;
   
      //  console.log(this.props)
      return (
        <div>
          <List
            component="nav"
          >
           {unique.map(i=>{
               console.log("my i", typeof i)
             return <div> <ListItem button  onClick={this.handleClick.bind(
                this,
                i
            )}>
               <ListItemText primary={i} />
               {this.state[i]  ? <ExpandLess /> : <ExpandMore />}
             </ListItem>
             <Collapse in={this.state[i] } timeout="auto" unmountOnExit>
                 {i==="nation"&&encoded.nid===1?
                 <List component="div" disablePadding>
                     <ListItem button component={Link} to={"/" + i} >
                       <ListItemText primary="nation employee"  />
                     </ListItem>
                      
                   </List>:<div/>}
                   {i==="region"&&encoded.nid===1?
                   
                   <List component="div" disablePadding>
                     <ListItem button >
                       <ListItemText primary="region Manger"  />
                     </ListItem>
                    
                     <ListItem button >
                       <ListItemText primary="region employee"  />
                     </ListItem>
                      
                   </List>:<div/>}
            
               <List component="div" disablePadding>
                 <ListItem button >
                   <ListItemText primary={i} />
                 </ListItem>
                 <ListItem button >
                   <ListItemText primary="Insurance Companies" />
                 </ListItem>
               </List>
             </Collapse>
             </div>
           })} <ListItem button onClick={this.toggle}>
              <ListItemText primary="Files" />
              {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button >
                  <ListItemText primary="Providers" />
                </ListItem>
                <ListItem button >
                  <ListItemText primary="Insurance Companies" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={this.myclick}>
              <ListItemText primary="Utilities" />
              {this.state.fo ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.fo} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button >
                  <ListItemText primary="Excel Templates" />
                </ListItem>
                <ListItem button >
                  <ListItemText primary="Upload File" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </div>
      );
    }
  
 
}

//  function NestedList(props) {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);

//   const handleClick = () => {
//     setOpen(!open);
//   };
//   const mynewArray=[];
//   const mynewArray1=[];
  
//   var listArray=[];
  
//     for(var i in props.userPermission.permission.data){
//       console.log(props.userPermission.permission.data[0])
      
      
//       props.userPermission.permission.data[i].map((o)=>{
    
//        mynewArray.push(o["roleName"])
//        var nation= o["roleName"].includes("nation");
//       var region= o["roleName"].includes("region");
//       var zone=o["roleName"].includes("zone");
//       var wereda= o["roleName"].includes("wereda");
//       var role= o["roleName"].includes("role");
//       var user= o["roleName"].includes("user");
//       if(nation){
//         listArray.push("nation")
//         }
//         if(region){
//         listArray.push("region")
//         }
//         if(zone){
//         listArray.push("zone")
//         }
//         if(wereda){
//         listArray.push("wereda")
//         }
//         if(role){
//           listArray.push("role")
//           }
//           if(user){
//             listArray.push("user")
//             }
//        mynewArray1.push(o)
//        const surafel=Object.entries(o)
//       //  console.log("surafe",surafel)
//       })
//   }
//   let unique = [...new Set(listArray)];
  
//   return (
//       <List>
//     <List>
//     {unique.map((text, index) => (
//       <ListItem key={text} component={Link} to={"/" + text}>
       
//         <ListItemText primary={text} />
//       </ListItem>
//     ))}
 
//   </List>
   
//    {unique.map((text, index)=>{
//       return (
//       <List      component="nav"
//       aria-labelledby="nested-list-subheader"
//       subheader={
//         <ListSubheader component="div" id="nested-list-subheader">
//           Nested List Items
//         </ListSubheader>
//       }
//       className={classes.root}
//     >
//       <ListItem button onClick={handleClick}>
//         <ListItemIcon>
//           <InboxIcon />
//         </ListItemIcon>
//         <ListItemText primary={text} />
//         {open ? <ExpandLess /> : <ExpandMore />}
//       </ListItem>
//       <Collapse in={open} timeout="auto" unmountOnExit>
//       <List component="div" disablePadding>
//         <ListItem button >
//           <ListItemIcon>
//             <StarBorder />
//           </ListItemIcon>
//           <ListItemText primary="Starred" />
//         </ListItem>
//       </List>
//     </Collapse>
//     </List>
//     ) })
//  }
      

//     </List>
//   );
// }
 
  
const mapStateToProps=state=>({
  userPermission:state.userPermission
})
export default connect(mapStateToProps)(NestedList);
// import React from "react";
// import PropTypes from "prop-types";
// import ListSubheader from "@material-ui/core/ListSubheader";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import Collapse from "@material-ui/core/Collapse";

// import ExpandLess from "../../icon/src/ExpandLess";
// import ExpandMore from "../../icon/src/ExpandMore";
// import {useSelector,useDispatch,connect} from 'react-redux';
// import Divider from "@material-ui/core/Divider";
// import { withStyles } from "@material-ui/core/styles";
// const styles = theme => ({
//     root: {
//         width: "100%",
//         maxWidth: 360,
//         background: theme.palette.background.paper
//     },
//     nested: {
//         paddingLeft: theme.spacing.unit * 4
//     }
// });
// function getItems() {
//     var json = {
//         list: [
//             {
//                 id: 1,
//                 title: "Google",
//                 items: [
//                     {
//                         id: 1,
//                         name: "Android",
//                         subitems: [
//                             {
//                                 id: 1,
//                                 name: "Nougat"
//                             },
//                             {
//                                 id: 2,
//                                 name: "Lollipop"
//                             }
//                         ]
//                     },
//                     {
//                         id: 2,
//                         name: "Chrome"
//                     }
//                 ]
//             },
            
             
//         ]
//     };
//     return json;
// }
// class NestedList extends React.Component {
//     state = {};
//     handleClick = e => {
//       console.log(e)
//         this.setState({ [e]: !this.state[e] });
//     };
//     render() {
//         const items = getItems();
//         const { classes } = this.props;
//         console.log("neasted props:",this.props)
        
// const mynewArray=[];
// const mynewArray1=[];

// var listArray=[];

//   for(var i in this.props.userPermission.permission.data){
//     console.log(this.props.userPermission.permission.data[0])
    
    
//     this.props.userPermission.permission.data[i].map((o)=>{
  
//      mynewArray.push(o["roleName"])
//      var nation= o["roleName"].includes("nation");
//     var region= o["roleName"].includes("region");
//     var zone=o["roleName"].includes("zone");
//     var wereda= o["roleName"].includes("wereda");
//     var role= o["roleName"].includes("role");
//     var user= o["roleName"].includes("user");
//     if(nation){
//       listArray.push("nation")
//       }
//       if(region){
//       listArray.push("region")
//       }
//       if(zone){
//       listArray.push("zone")
//       }
//       if(wereda){
//       listArray.push("wereda")
//       }
//       if(role){
//         listArray.push("role")
//         }
//         if(user){
//           listArray.push("user")
//           }
//      mynewArray1.push(o)
//      const surafel=Object.entries(o)
//     //  console.log("surafe",surafel)
//     })
// }
// let unique = [...new Set(listArray)];
// console.log("uiuiuiuiu",unique)
//         return (
//             <div>
//                 {items.list.map(list => {
//                     return (
//                         <List                         
                            
//                         >
//                             {list.items.map(item => {
//                                 return (
//                                     <div key={item.id}>
//                                         {item.subitems != null ? (
//                                             <div key={item.id}>
//                                                 <ListItem
//                                                     button
//                                                     key={item.id}
//                                                     onClick={this.handleClick.bind(
//                                                         this,
//                                                         item.name
//                                                     )}
//                                                 >
//                                                     <ListItemText
//                                                         primary={item.name}
//                                                     />
//                                                     {this.state[item.name] ? (
//                                                         <ExpandLess />
//                                                     ) : (
//                                                         <ExpandMore />
//                                                     )}
//                                                 </ListItem>
//                                                 <Collapse
//                                                     key={list.items.id}
//                                                     component="li"
//                                                     in={this.state[item.name]}
//                                                     timeout="auto"
//                                                     unmountOnExit
//                                                 >
//                                                     <List disablePadding>
//                                                         {item.subitems.map(
//                                                             sitem => {
//                                                                 return (
//                                                                     <ListItem
//                                                                         button
//                                                                         key={
//                                                                             sitem.id
//                                                                         }
                                                                        
//                                                                     >
//                                                                         <ListItemText
//                                                                             key={
//                                                                                 sitem.id
//                                                                             }
//                                                                             primary={
//                                                                                 sitem.name
//                                                                             }
//                                                                         />
//                                                                     </ListItem>
//                                                                 );
//                                                             }
//                                                         )}
//                                                     </List>
//                                                 </Collapse>{" "}
//                                             </div>
//                                         ) : (<div/>                                           
//                                         )}
//                                     </div>
//                                 );
//                             })}
//                             <Divider key={list.id} absolute />
//                         </List>
//                     );
//                 })}
//             </div>
//         );
//     }
// }
// NestedList.propTypes = {
//     classes: PropTypes.object.isRequired
// };
// const mapStateToProps=state=>({
//     userPermission:state.userPermission
//   })
// export default connect(mapStateToProps) (NestedList);
