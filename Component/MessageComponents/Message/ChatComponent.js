// import React ,{useState}from 'react';
// import { makeStyles,withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import Divider from '@material-ui/core/Divider';
// import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import Avatar from '@material-ui/core/Avatar';
// import Fab from '@material-ui/core/Fab';
// // import SendIcon from '../icon/src/Send';
// import Button from "@material-ui/core/Button"
// import Picker from 'emoji-picker-react';
// import {Redirect,useHistory, useLocation, useParams ,useRouteMatch ,withRouter } from "react-router-dom";
// import {useSelector,useDispatch,connect} from 'react-redux';
// import axios from "axios"
// import CircularProgress from '@material-ui/core/CircularProgress';
// import {fetchConversation} from "../../../Action/index"
// const styles = ()=>({
//   table: {
//     minWidth: 650,
//   },
//   chatSection: {
//     width: '100%',

//   },
//   sendBard:{
//     height: '1vh',
//   },
//   headBG: {
//       backgroundColor: '#e0e0e0'
//   },
//   borderRight500: {
//       borderRight: '1px solid #e0e0e0'
//   },
//   messageArea: {
//     height: '70vh',
//     overflowY: 'auto'
//   }
//   ,
//   progressPs:{
//     //   marignTop:'1000vh'
//     // paddingTop: '70px',
//     marginTop: '250px',
//     marginLeft: '500px'
//   }
//  } )


//  class Chat extends React.Component{
//     // console.log("region detail ",history)

// state={
//     conversation:[],
//     isLoading:true,
//     error:null
// }
// componentDidUpdate(){
//     // this.setState({isLoading:true})
// }
// componentDidMount(){

//     // const id = this.props.params.id;
//     axios.interceptors.request.use(
//         config=>{
//             config.headers.authorization=`Bearer ${localStorage.getItem("token")}`;
//             return config
//         }
//     )

//     console.log("dspach prop@@@2 s",this.props)
//     const {match} = this.props
//     const id = match.params.id
//     this.props.getConversation(id);
//     let chat=this.props.conversation.conversation
//     console.log("conversation ",chat)
// console.log("amezing singer ",id)

// }
// // console.log("chat converstion ui ",id)

// render(){
//     const { classes, ...other } = this.props;
//     if(this.props.isLoading===true&&this.props.error===null){
//         return(
//             <CircularProgress  className={classes.progressPs} disableShrink />
//         )
//     }
//     else{
//         if(this.props.isLoading===false&&this.state.error!==null){
//         return (<div>{this.props.error}</div>)
//         }else{
//   return (

//       <div>
//         <Grid container>
//             <Grid item xs={12} >
//                 <Typography variant="h5" className="header-message">Chat</Typography>
//             </Grid>
//         </Grid>
//         <Grid container item xs={12} component={Paper} className={classes.chatSection}>

//             <Grid item xs={12}>
//                 <List className={classes.messageArea}>
//                     <ListItem key="1">
//                         <Grid container>
//                             <Grid item xs={12}>
//                                 <ListItemText align="right" primary="Hey man, What's up ?"></ListItemText>
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <ListItemText align="right" secondary="09:30"></ListItemText>
//                             </Grid>
//                         </Grid>
//                     </ListItem>
//                     <ListItem key="1">
//                         <Grid container>
//                             <Grid item xs={12}>
//                                 <ListItemText align="right" primary="Hey man, What's up ?"></ListItemText>
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <ListItemText align="right" secondary="09:30"></ListItemText>
//                             </Grid>
//                         </Grid>
//                     </ListItem>
//                     <ListItem key="2">
//                         <Grid container>
//                             <Grid item xs={12}>
//                                 <ListItemText align="left" primary="Hey, Iam Good! What about you ?"></ListItemText>
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <ListItemText align="left" secondary="09:31"></ListItemText>
//                             </Grid>
//                         </Grid>
//                     </ListItem>
//                     <ListItem key="2">
//                         <Grid container>
//                             <Grid item xs={12}>
//                                 <ListItemText align="left" primary="Hey, Iam Good! What about you ?"></ListItemText>
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <ListItemText align="left" secondary="09:31"></ListItemText>
//                             </Grid>
//                         </Grid>
//                     </ListItem>
//                     <ListItem key="3">
//                         <Grid container>
//                             <Grid item xs={12}>
//                                 <ListItemText align="right" primary="Cool. i am good, let's catch up!"></ListItemText>
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <ListItemText align="right" secondary="10:30"></ListItemText>
//                             </Grid>
//                         </Grid>
//                     </ListItem>
//                 </List>
//                 <Divider />
//                 <Grid container style={{padding: '10px'}}>
//                     <Grid item xs={12}>
//                         <TextField id="outlined-basic-email" multiline  label="Type Something" fullWidth />
//                     </Grid>

//                 </Grid>
//                 <Grid  style={{padding: '10px'}}>
//                 <Grid   xs={12} align="right">

//                          <Button>send</Button>
//                     </Grid>
//                     </Grid>
//             </Grid>
//         </Grid>
//       </div>
//   );
// }}
// }
// }
// const mapStateToProps=state=>({
//     conversation:state.conversation

//    });

//    const mapDispatchToProps = dispatch => ({
//     getConversation: (id) => dispatch(fetchConversation(id))
//   });


// export default connect(mapStateToProps,mapDispatchToProps)(withRouter((withStyles(styles)(Chat))));



import React, { useState, useEffect ,useContext,useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
// import SendIcon from '../icon/src/Send';
import Button from "@material-ui/core/Button"
import Picker from 'emoji-picker-react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchConversation, sendMessageToApi } from "../../../Action/index"
import { Redirect, useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";
import { connect } from 'react-redux';
import SocketContext from "../../SocketContext"
const useStyles = makeStyles({
  socrolle:{
    overflow: 'auto',
    border: '2px black solid'

  },
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: '100%',

  },
  sendBard: {
    height: '1vh',
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
let message = "";

const messageInput = (e) => {
  e.preventDefault();

  message = e.target.value;

}
const Chat = (props) => {
  const classes = useStyles();
  let dispatch = useDispatch();
  let { id } = useParams();
  let chats=[]
  let conversation = props.conversation.conversation;
  const divRref = useRef(null);
  let online=props.onlineUser.onlineUser;
  const socket = useContext(SocketContext)
  const socketSend=(socketId)=>{
    // socket.on('chatting', (obj.socketId)=> {
    //   console.log("send")
    // })
  }
  socket.on('chatting', function(data) {
    console.log("@Chating emit ")
    
    
    
})
console.log("new style  ",props.userPermission.permission)
// props.userPermission.permission.map((i)=>console.log(i))
  useEffect(() => {
    divRref.current.scrollIntoView({ behavior: 'smooth' });
    console.log("new props @@@@@@@@@@ ", props.conversation.conversation)
    props.conversation.conversation.map(i => console.log(i))

    
    dispatch(fetchConversation(id))
  }, [id],[chats])
  return (

    <div >
      <Grid  ref={divRref} container>
        <Grid item xs={12} >
          <Typography variant="h5" className="header-message">Chat</Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12} component={Paper} className={classes.chatSection}>

        <Grid item xs={12}>
          <List className={classes.messageArea}>
            {
              props.conversation.conversation.map((i) => {
                console.log(i.receiverId)
                return (
                  <ListItem key="1">
                    <Grid container>
                      <Grid item xs={12}>
                        <ListItemText align={i.receiverId == id ? "right" : "left"} primary={i.message}></ListItemText>
                      </Grid>
                      <Grid   item xs={12}>
                        <ListItemText align={i.receiverId == id ? "right" : "left" }  secondary={i.createdAt}></ListItemText>
                      </Grid>
                    </Grid>
                  </ListItem>
                )
              })
            }






          </List>
          <Divider />
          <Grid container style={{ padding: '10px' }}>
            <Grid item xs={12}>
              <TextField onChange={messageInput} id="outlined-basic-email"     multiline label="Type Something" fullWidth />
            </Grid>

          </Grid>
          <Grid style={{ padding: '10px' }}>
            <Grid xs={12} align="right">

              <Button onClick={(e) => {
                dispatch(sendMessageToApi(message,id))
                // let obj = props.online.find(o => o.id ===id);
                socket.emit('setmssg',id)
                setTimeout(() => {
                  
                  dispatch(fetchConversation(id));
                 
            
                }, 300)
            
                  
             
                document.getElementById("outlined-basic-email").value="";
                chats.push(id)
              }}
              >send</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
const mapStateToProps = state => ({
  conversation: state.conversation,
  onlineUser:state.onlineUser,
  userPermission:state.userPermission

})
export default connect(mapStateToProps)(Chat);


 