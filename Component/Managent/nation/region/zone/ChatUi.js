import React, { useState ,useEffect,useContext} from 'react';
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
import SendIcon from '../../../../../icon/src/Send';
import Button from "@material-ui/core/Button"
import Picker from 'emoji-picker-react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '../../../../../icon/src/Close';
import { useSelector, useDispatch,connect } from 'react-redux';
import SocketContext from "../../../../SocketContext"

import { fetchConversation, sendMessageToApi } from "../../../../../Action/index"

import IconButton from '@material-ui/core/IconButton';

const useStyles =  makeStyles((theme) => ({
  root:{
    height:50,
    width:300
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
        height: '30vh',
        overflowY: 'auto'
    },
    
    paper: {
      paddingBottom: 50,
    },

   
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    grow: {
      flexGrow: 1,
    },
    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: -20,
      left: 0,
      right: 0,
      margin: '0 auto',
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
}));
let message = "";

const messageInput = (e) => {
  e.preventDefault();

  message = e.target.value;

}
const Chat = (props) => {
    const classes = useStyles();
    let dispatch = useDispatch();
    let id=props.userId
    let chats=[]
    const socket = useContext(SocketContext)

    console.log("uuuuuuuuuuuuuuuuuuuuuuWWWWWWwwww",props)
    useEffect(() => {
      // divRref.current.scrollIntoView({ behavior: 'smooth' });
      console.log("new props @@@@@@@@@@ ", props.conversation.conversation)
      props.conversation.conversation.map(i => console.log(i))
      
        dispatch(fetchConversation(props.userId))


    }, [id],[chats])
 console.log("on chat propss",props)
    return (
        <div className={classes.root}>
          <Grid  >
          <AppBar position="static" color="primary" className={classes.appBar}>
        <Toolbar>
          {/* <IconButton edge="start" color="inherit" aria-label="open drawer">
            <CloseIcon />
          </IconButton> */}
          <Fab color="secondary"  className={classes.fabButton}>
          <Avatar alt="Remy Sharp" className={classes.large}  src="https://placeimg.com/150/150/any" />
          </Fab>
          <div className={classes.grow} />
          {/* <IconButton color="inherit">
            <CloseIcon />
          </IconButton> */}
          <IconButton edge="end" color="inherit" onClick={()=>props.onClose()}>
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid container item xs={12} component={Paper} className={classes.chatSection}>

<Grid item xs={12}>
  <List className={classes.messageArea}>
    {
      props.conversation.conversation.map((i) => {
        console.log(i.receiverId)
        return (
          <ListItem key="1">
            <Grid  xs={12}container>
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
        // socket.emit('setmssg',id)
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




// // import React, { useState } from 'react';

// const App = () => {
//   const [chosenEmoji, setChosenEmoji] = useState(null);

//   const onEmojiClick = (event, emojiObject) => {
//     setChosenEmoji(emojiObject);
//   };

//   return (
//     <div>
//       {chosenEmoji ? (
//         <span>You chose: {chosenEmoji.emoji}</span>
//       ) : (
//         <span>No emoji Chosen</span>
//       )}
//       <Picker onEmojiClick={onEmojiClick} />
//     </div>
//   );
// };




// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
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
// import SendIcon from '../icon/src/Send';

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
//   chatSection: {
//     width: '100%',
//     height: '80vh'
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
// });

// const Chat = () => {
//   const classes = useStyles();

//   return (
//       <div>
//         <Grid container>
//             <Grid item xs={9} >
//                 <Typography variant="h5" className="header-message">Chat</Typography>
//             </Grid>
//         </Grid>
//         <Grid container component={Paper} className={classes.chatSection}>
//             <Grid item xs={3} className={classes.borderRight500}>
//                 <List>
//                     <ListItem button key="RemySharp">
//                         <ListItemIcon>
//                         <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
//                         </ListItemIcon>
//                         <ListItemText primary="John Wick"></ListItemText>
//                     </ListItem>
//                 </List>
//                 <Divider />
//                 <Grid item xs={9} style={{padding: '10px'}}>
//                     <TextField id="outlined-basic-email" label="Search" variant="outlined" fullWidth />
//                 </Grid>
//                 <Divider />
//                 <List>
//                     <ListItem button key="RemySharp">
//                         <ListItemIcon>
//                             <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
//                         </ListItemIcon>
//                         <ListItemText primary="Remy Sharp">Remy Sharp</ListItemText>
//                         <ListItemText secondary="online" align="right"></ListItemText>
//                     </ListItem>
//                     <ListItem button key="Alice">
//                         <ListItemIcon>
//                             <Avatar alt="Alice" src="https://material-ui.com/static/images/avatar/3.jpg" />
//                         </ListItemIcon>
//                         <ListItemText primary="Alice">Alice</ListItemText>
//                     </ListItem>
//                     <ListItem button key="CindyBaker">
//                         <ListItemIcon>
//                             <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/2.jpg" />
//                         </ListItemIcon>
//                         <ListItemText primary="Cindy Baker">Cindy Baker</ListItemText>
//                     </ListItem>
//                 </List>
//             </Grid>
//             <Grid item xs={9}>
//                 <List className={classes.messageArea}>
//                     <ListItem key="1">
//                         <Grid container>
//                             <Grid item xs={9}>
//                                 <ListItemText align="right" primary="Hey man, What's up ?"></ListItemText>
//                             </Grid>
//                             <Grid item xs={9}>
//                                 <ListItemText align="right" secondary="09:30"></ListItemText>
//                             </Grid>
//                         </Grid>
//                     </ListItem>
//                     <ListItem key="1">
//                         <Grid container>
//                             <Grid item xs={9}>
//                                 <ListItemText align="right" primary="Hey man, What's up ?"></ListItemText>
//                             </Grid>
//                             <Grid item xs={9}>
//                                 <ListItemText align="right" secondary="09:30"></ListItemText>
//                             </Grid>
//                         </Grid>
//                     </ListItem>
//                     <ListItem key="2">
//                         <Grid container>
//                             <Grid item xs={9}>
//                                 <ListItemText align="left" primary="Hey, Iam Good! What about you ?"></ListItemText>
//                             </Grid>
//                             <Grid item xs={9}>
//                                 <ListItemText align="left" secondary="09:31"></ListItemText>
//                             </Grid>
//                         </Grid>
//                     </ListItem>
//                     <ListItem key="2">
//                         <Grid container>
//                             <Grid item xs={9}>
//                                 <ListItemText align="left" primary="Hey, Iam Good! What about you ?"></ListItemText>
//                             </Grid>
//                             <Grid item xs={9}>
//                                 <ListItemText align="left" secondary="09:31"></ListItemText>
//                             </Grid>
//                         </Grid>
//                     </ListItem>
//                     <ListItem key="3">
//                         <Grid container>
//                             <Grid item xs={9}>
//                                 <ListItemText align="right" primary="Cool. i am good, let's catch up!"></ListItemText>
//                             </Grid>
//                             <Grid item xs={9}>
//                                 <ListItemText align="right" secondary="10:30"></ListItemText>
//                             </Grid>
//                         </Grid>
//                     </ListItem>
//                 </List>
//                 <Divider />
//                 <Grid container style={{padding: '10px'}}>
//                     <Grid item xs={11}>
//                         <TextField id="outlined-basic-email" label="Type Something" fullWidth />
//                     </Grid>
//                     <Grid xs={1} align="right">
//                         <Fab color="primary" aria-label="add"><SendIcon /></Fab>
//                     </Grid>
//                 </Grid>
//             </Grid>
//         </Grid>
//       </div>
//   );
// }

// export default Chat;