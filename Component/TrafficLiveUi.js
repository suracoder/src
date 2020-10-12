import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
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
import FavoriteIcon from '../icon/src/Favorite';
import ShareIcon from '../icon/src/Share';
import ExpandMoreIcon from '../icon/src/ExpandMore';
import MoreVertIcon from '../icon/src/MoreVert';
import Selecter from "./configSelecter"
import SvgIcon from '@material-ui/core/SvgIcon';
import Battery from './Battery';
import ReactSpeedometer from "react-d3-speedometer"

import PhonelinkSetupIcon from '../icon/src/PhonelinkSetup';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 945,
     
  },
  battery:{
      width:30,
      height:83,
      border:'solid',
      marginBottom:10
      

},
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
const [expenad2 ,setExpand2]=React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
console.log("on trfiic ui ",props.data)
let battery=props.data.batteryLevel.toFixed(2)*100
 
 
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      
      <CardContent>
     
          <ReactSpeedometer
            width={150}
            height={100}
  maxValue={100}
  value={ battery}
  needleColor="red"
  startColor="red"
  segments={10}
  endColor="green"
/>
 
      </CardContent>
    
      
      
      <CardActions disableSpacing>
      
      <PhonelinkSetupIcon/>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <Selecter data={props.data}/>
  
          
           
        
      </Collapse>
    </Card>
  );
}
