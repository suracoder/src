import React, { useState } from 'react';
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
import SendIcon from '../icon/src/Send';
import Button from "@material-ui/core/Button"
import Picker from 'emoji-picker-react';

const useStyles = makeStyles({
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

const Chat = (props) => {
    const classes = useStyles();
 console.log("on chat propss",props)
    return (
        <div>
            <Grid container>
                <Grid item xs={12} >
                    <Typography variant="h5" className="header-message">Chat</Typography>
                </Grid>
            </Grid>
            <Grid container item xs={12} component={Paper} className={classes.chatSection}>

                <Grid item xs={12}>
                    <List className={classes.messageArea}>
                        <ListItem key="1">
                            <Grid container>
                                <Grid item xs={12}>
                                    <ListItemText align="right" primary="Hey man, What's up ?"></ListItemText>
                                </Grid>
                                <Grid item xs={12}>
                                    <ListItemText align="right" secondary="09:30"></ListItemText>
                                </Grid>
                            </Grid>
                        </ListItem>
                        <ListItem key="1">
                            <Grid container>
                                <Grid item xs={12}>
                                    <ListItemText align="right" primary="Hey man, What's up ?"></ListItemText>
                                </Grid>
                                <Grid item xs={12}>
                                    <ListItemText align="right" secondary="09:30"></ListItemText>
                                </Grid>
                            </Grid>
                        </ListItem>
                        <ListItem key="2">
                            <Grid container>
                                <Grid item xs={12}>
                                    <ListItemText align="left" primary="Hey, Iam Good! What about you ?"></ListItemText>
                                </Grid>
                                <Grid item xs={12}>
                                    <ListItemText align="left" secondary="09:31"></ListItemText>
                                </Grid>
                            </Grid>
                        </ListItem>
                        <ListItem key="2">
                            <Grid container>
                                <Grid item xs={12}>
                                    <ListItemText align="left" primary="Hey, Iam Good! What about you ?"></ListItemText>
                                </Grid>
                                <Grid item xs={12}>
                                    <ListItemText align="left" secondary="09:31"></ListItemText>
                                </Grid>
                            </Grid>
                        </ListItem>
                        <ListItem key="3">
                            <Grid container>
                                <Grid item xs={12}>
                                    <ListItemText align="right" primary="Cool. i am good, let's catch up!"></ListItemText>
                                </Grid>
                                <Grid item xs={12}>
                                    <ListItemText align="right" secondary="10:30"></ListItemText>
                                </Grid>
                            </Grid>
                        </ListItem>
                    </List>
                    <Divider />
                    <Grid container style={{ padding: '10px' }}>
                        <Grid item xs={12}>
                            <TextField id="outlined-basic-email" multiline label="Type Something" fullWidth />
                        </Grid>

                    </Grid>
                    <Grid style={{ padding: '10px' }}>
                        <Grid xs={12} align="right">

                            <Button>send</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Chat;




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
//             <Grid item xs={12} >
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
//                 <Grid item xs={12} style={{padding: '10px'}}>
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