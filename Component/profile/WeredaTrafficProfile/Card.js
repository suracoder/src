import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
 
 import IconButton from '@material-ui/core/IconButton';

import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
// });

//  full name 
// image
// role
// id
// email
const useStyles =  makeStyles((theme) => ({
  root:{
    maxWidth: 345,
     
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
export default function ImgMediaCard(props) {
  const classes = useStyles();
console.log("!!!!!!!!!!!!!!!!!!!1Profile manager &",props)
// let name=`${props.firstName}   ${props.lastName}`
  return (
    <Card className={classes.root}>
    
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://placeimg.com/150/150/any"
          title="Contemplative Reptile"
        />
            {/* <AppBar position="static" color="primary" className={classes.appBar}> */}
        <Toolbar>
          {/* <IconButton edge="start" color="inherit" aria-label="open drawer">
            <CloseIcon />
          </IconButton> */}
          <Fab color="secondary"  className={classes.fabButton}>
          <Avatar alt="Remy Sharp"  src="https://placeimg.com/640/480/nature"  className={classes.large}   />
          </Fab>
          <div className={classes.grow} />
          {/* <IconButton color="inherit">
            <CloseIcon />
          </IconButton> */}
        
        </Toolbar>
      {/* </AppBar> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {/* {props.role} */}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {/* {props.email} */}
          </Typography>
        </CardContent>
      
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
