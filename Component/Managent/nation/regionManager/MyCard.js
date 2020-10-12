import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import DeleteForever from '../../../../icon/src/DeleteForever';
import FavoriteIcon from '../../../../icon/src/Favorite';
import ShareIcon from '../../../../icon/src/Share';
import ExpandMoreIcon from '../../../../icon/src//ExpandMore';
import Edit from '../../../../icon/src/Edit';
import amhara from "../../../../asset/amhara.png"
import oromia from "../../../../asset/pic.PNG"
import {fetchRegionManager,deleteRegionManager,fetchRegion} from '../../../../Action/index';
import {useSelector,useDispatch,connect} from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { Grid,CardActionArea } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // width:500,
    // minWidth:200
    // backgroundColor:"#ef9a9a"
  },
  media: {
    height: 0,
    paddingTop: '30%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    height: 100,
    width:100,
    backgroundColor: red[500],
  },
}));

 function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
console.log("MANAGER PROPS=>")
  const handleClickOpen = () => {
    setOpen(true);
  };
 
  const handleClose = () => {
    setOpen(false);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const data={...props}
  console.log("there is no place ",props)
const dispatch=useDispatch()
const mynewArray1 = [];



  for (var i in props.userPermission.permission.data) {



    props.userPermission.permission.data[i].map((o) => {



      mynewArray1.push(o)

      //  console.log("surafe",surafel)
    })
  }
// dispatch(fetchRegionManager())
  return (
    <Grid container>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar  variant="square" aria-label="recipe" className={classes.avatar}>
       <img src={oromia} ></img>
          </Avatar>

        }
         
        title={props.firstName}
        subheader={ <div><IconButton aria-label="add to favorites">
        <Edit/>
      </IconButton>
      {mynewArray1.map(i=>{
        if(i.delete&&i.roleName==="regionManager"){
     return      <IconButton aria-label="add to favorites"  onClick={handleClickOpen}>
          <DeleteForever />
        </IconButton>
        }
      })}
     
      <Dialog
        open={open}
 
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {props.firstName}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={ ()=>{
            dispatch(deleteRegionManager(props.id)) 
         
          handleClose()
          }} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      </div>
        }
 
      />
       {/* <CardActionArea>
   <CardContent backgroundColor="#ef9a9a">
        kn;k jjgekrkgj; gj trgtrgtrgrtg
        </CardContent>
       <CardContent>
    
      </CardContent>   </CardActionArea> */}
       

     
      
      <CardActions disableSpacing>
 
  
      </CardActions>
   
    </Card>
    </Grid>
  );
}
const mapStateToProps=state=>({
  userPermission:state.userPermission,
 
})
export default connect(mapStateToProps)(RecipeReviewCard);
